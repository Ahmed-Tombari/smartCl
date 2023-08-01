package com.addinn.smartclaim.generate.template;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.cmr.model.FileExistsException;
import org.alfresco.service.cmr.model.FileFolderService;
import org.alfresco.service.cmr.model.FileInfo;
import org.alfresco.service.cmr.model.FileNotFoundException;
import org.alfresco.service.cmr.repository.ContentReader;
import org.alfresco.service.cmr.repository.ContentService;
import org.alfresco.service.cmr.repository.ContentWriter;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.util.TempFileProvider;

import fr.opensagres.xdocreport.core.XDocReportException;
import fr.opensagres.xdocreport.core.io.internal.ByteArrayOutputStream;
import fr.opensagres.xdocreport.document.IXDocReport;
import fr.opensagres.xdocreport.document.registry.XDocReportRegistry;
import fr.opensagres.xdocreport.template.IContext;
import fr.opensagres.xdocreport.template.TemplateEngineKind;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.mozilla.javascript.NativeObject;

/**
 *
 * JavaScriptExtension for metadata injection into word document model
 *
 *
 */
public class GenerateFile extends BaseProcessorExtension {
    /* Services */
    private ContentService contentService;
    private FileFolderService fileFolderService;
    private final TemplateEngineKind TEMPLATE_ENGINE_KIND = TemplateEngineKind.Freemarker;
    private final String TEMP_GENERATED_DOC_NAME = "temp_generated_doc_name.doc";


    /**
     * Takes file path as input and returns the stream opened on it
     * @param filePath
     * @return
     * @throws IOException
     */
    public InputStream loadDocumentAsStream(NodeRef templateNodeRef) throws IOException{

        ContentReader contentReader = contentService.getReader(templateNodeRef, ContentModel.PROP_CONTENT);
        return contentReader.getContentInputStream();

    }

    public NodeRef writeContent(NodeRef templateNode, NodeRef generationFolderNode, File finalContent) throws FileExistsException, FileNotFoundException {


        NodeRef finalFile = fileFolderService.copy(templateNode, generationFolderNode, TEMP_GENERATED_DOC_NAME).getNodeRef();
        ContentWriter contentWriter = getContentService().getWriter(finalFile, ContentModel.PROP_CONTENT,
                true);
        contentWriter.putContent(finalContent);

        return finalFile;

    }

    /**
     * Loads the docx report
     * @param documentTemplateAsStream
     * @param freemarkerOrVelocityTemplateKind
     * @return
     * @throws IOException
     * @throws XDocReportException
     */
    public IXDocReport loadDocumentAsIDocxReport(InputStream documentTemplateAsStream, TemplateEngineKind freemarkerOrVelocityTemplateKind) throws IOException, XDocReportException{
        IXDocReport xdocReport = XDocReportRegistry.getRegistry().loadReport(documentTemplateAsStream, freemarkerOrVelocityTemplateKind);
        return xdocReport;
    }
    /**
     * Takes the IXDocReport instance, creates IContext instance out of it and puts variables in the context
     * @param report
     * @param variablesMap
     * @return
     * @throws XDocReportException
     */
    public IContext replaceVariabalesInTemplate(IXDocReport report, Map<String, String> variablesMap) throws XDocReportException{
        IContext context = report.createContext();



        for(Map.Entry<String, String> variable: variablesMap.entrySet()){
            context.put(variable.getKey(), variable.getValue());
        }

        return context;
    }

    /**
     * Generates byte array as output from merged template
     * @param report
     * @param context
     * @return
     * @throws XDocReportException
     * @throws IOException
     */
    public File generateMergedOutput(IXDocReport report,IContext context ) throws XDocReportException, IOException{
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        report.process(context, outputStream);

        File tempOutputFile = TempFileProvider.createTempFile("tempOutputFile",  "doc");

        FileOutputStream os = new FileOutputStream(tempOutputFile);

        os.write(outputStream.toByteArray());
        os.flush();
        os.close();
        return tempOutputFile;
    }
    /**
     * Takes inputs and returns merged output as byte[]
     * @param templatePath
     * @param templateEngineKind
     * @param variablesMap
     * @param fileTargetName
     * @param imageVariablesWithPathMap
     * @return
     * @throws IOException
     * @throws XDocReportException
     * @throws FileNotFoundException
     * @throws FileExistsException
     */

    public NodeRef mergeAndGenerateOutputV2(String templateNodeRef, String generationFolderNodeRef, String variablesMapParam, String fileTargetName) throws IOException, XDocReportException, FileExistsException, FileNotFoundException, ParseException {


        Map<String, String> variablesMap = new HashMap<String, String>();
//    Map<String, String> variablesMap = (Map<String, String> )variablesMapParam;

        JSONParser parser = new JSONParser();
        JSONObject json = (JSONObject) parser.parse(variablesMapParam);
        for(Object key : json.keySet()){
            System.out.println(json.get(key.toString()));
            if(!key.toString().equals("prop_cm_name"))
                variablesMap.put(key.toString().split("_")[2], json.get(key.toString()).toString());
            else
                fileTargetName = key.toString();
        }



        NodeRef templateNode = new NodeRef(templateNodeRef);
        NodeRef generationFolderNode = new NodeRef(generationFolderNodeRef);

        InputStream inputStream = this.loadDocumentAsStream(templateNode);
        IXDocReport xdocReport = this.loadDocumentAsIDocxReport(inputStream, TEMPLATE_ENGINE_KIND);

        IContext context = this.replaceVariabalesInTemplate(xdocReport, variablesMap);
        File mergedOutput = this.generateMergedOutput(xdocReport, context);

        NodeRef nodeRef = this.writeContent(templateNode, generationFolderNode, mergedOutput);
        FileInfo fileInfo = fileFolderService.rename(nodeRef, fileTargetName);

        String s = new String();
        return fileInfo.getNodeRef();

    }

 public NodeRef mergeAndGenerateOutput(String templateNodeRef, String generationFolderNodeRef, Map<String, String> variablesMap, String fileTargetName) throws IOException, XDocReportException, FileExistsException, FileNotFoundException, ParseException {


    NodeRef templateNode = new NodeRef(templateNodeRef);
    NodeRef generationFolderNode = new NodeRef(generationFolderNodeRef);

    InputStream inputStream = this.loadDocumentAsStream(templateNode);
    IXDocReport xdocReport = this.loadDocumentAsIDocxReport(inputStream, TEMPLATE_ENGINE_KIND);

    IContext context = this.replaceVariabalesInTemplate(xdocReport, variablesMap);
    File mergedOutput = this.generateMergedOutput(xdocReport, context);

    NodeRef nodeRef = this.writeContent(templateNode, generationFolderNode, mergedOutput);
    FileInfo fileInfo = fileFolderService.rename(nodeRef, fileTargetName);

    String s = new String();
    return fileInfo.getNodeRef();

 }

    /**
     * Inject Signataire into document
     */
    public void setSignataire(String docToSign, Map<String, String> variablesMap) throws IOException, XDocReportException, FileExistsException, FileNotFoundException{

        NodeRef docToSignNode = new NodeRef(docToSign);


        InputStream inputStream = this.loadDocumentAsStream(docToSignNode);
        IXDocReport xdocReport = this.loadDocumentAsIDocxReport(inputStream, TEMPLATE_ENGINE_KIND);
        IContext context = this.replaceVariabalesInTemplate(xdocReport, variablesMap);
        File mergedOutput = this.generateMergedOutput(xdocReport, context);

        ContentWriter contentWriter = getContentService().getWriter(docToSignNode, ContentModel.PROP_CONTENT,
                true);
        contentWriter.putContent(mergedOutput);

    }


    public ContentService getContentService() {
        return contentService;
    }

    public void setContentService(ContentService contentService) {
        this.contentService = contentService;
    }

    public FileFolderService getFileFolderService() {
        return fileFolderService;
    }

    public void setFileFolderService(FileFolderService fileFolderService) {
        this.fileFolderService = fileFolderService;
    }

}
