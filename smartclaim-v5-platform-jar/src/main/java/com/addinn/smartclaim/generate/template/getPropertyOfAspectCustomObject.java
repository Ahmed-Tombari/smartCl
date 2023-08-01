package com.addinn.smartclaim.generate.template;

import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.cmr.dictionary.DictionaryService;
import org.alfresco.service.namespace.NamespaceService;
import org.alfresco.service.namespace.QName;

public class getPropertyOfAspectCustomObject extends BaseProcessorExtension {
    private DictionaryService dictionaryService;
    private NamespaceService namespaceService;

    public String getPropertyAspect(String qname){
        QName name = getName(qname);
        String prefix = dictionaryService.getProperty(name).getContainerClass().getName().getLocalName();
        return prefix;
    }
    public QName getName(String qname){
        String[] qnamePrefix = QName.splitPrefixedQName(qname);
        String localname = namespaceService.getNamespaceURI(qnamePrefix[0]);
        return QName.createQName("{"+localname+"}"+qnamePrefix[1]);
    }
    public void setDictionaryService(DictionaryService dictionaryService) {
        this.dictionaryService = dictionaryService;
    }
    public void setNamespaceService(NamespaceService namespaceService) {
        this.namespaceService = namespaceService;
    }



}