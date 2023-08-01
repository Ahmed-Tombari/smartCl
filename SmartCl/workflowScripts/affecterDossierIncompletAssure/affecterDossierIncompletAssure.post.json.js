var ctxt = org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var wsbean = ctxt.getBean("workflowServiceImpl", org.alfresco.repo.workflow.WorkflowServiceImpl);
var ws = ctxt.getBean("activitiProcessEngine", org.activiti.engine.impl.ProcessEngineImpl);

var nomDossier = args.nomDossier;
var informationsInc = json.get("informations_Incomplet") + "";
var results = search.query({
  language: "fts-alfresco",
  query:
    "PATH:'/app:company_home/st:sites/cm:smartclaim/cm:documentLibrary/*/*' AND cm:name:'" +
    nomDossier +
    "'",
  sort: [
    {
      column: "cm:name",
      ascending: true,
    },
  ],
});
var assure = results[0].properties["dsm:refAssure"];

var instanceWorkflow = results[0].getActiveWorkflows()[0].getId().replace("activiti$", "");
var result = ws.getTaskService().createTaskQuery().processInstanceId(instanceWorkflow).orderByTaskId().asc().list();
var taskId = result.get(0).id;

  ws.getTaskService().setVariable(taskId, "dsw_informationsInc", informationsInc);
  wsbean.endTask("activiti$" + taskId, "Next");

model.message = "champs manquantes rempli avec succès";


