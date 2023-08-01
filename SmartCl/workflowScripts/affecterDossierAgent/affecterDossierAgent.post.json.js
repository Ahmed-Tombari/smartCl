var ctxt =
  org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var wsbean = ctxt.getBean(
  "workflowServiceImpl",
  org.alfresco.repo.workflow.WorkflowServiceImpl
);
var ws = ctxt.getBean(
  "activitiProcessEngine",
  org.activiti.engine.impl.ProcessEngineImpl
);

var nomDossier = args.nomDossier;
var agentNodeRef = json.get("agent") + "";
var agent = search.findNode("workspace://SpacesStore/" + agentNodeRef)
  .properties["userName"];
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

var instanceWorkflow = results[0]
  .getActiveWorkflows()[0]
  .getId()
  .replace("activiti$", "");
var result = ws
  .getTaskService()
  .createTaskQuery()
  .processInstanceId(instanceWorkflow)
  .orderByTaskId()
  .asc()
  .list();
function getValueByKey(object, row) {
  return object[row];
}
var statut = {
  EN_COURS_DENVOI: "0",
  CREE: "1",
  EN_COURS_DE_TRAITEMENT: "2",
  EN_ATTENTE_DE_RECTIFICATION: "3",
  EN_ATTENTE_DE_CONFIRMATION: "4",
};
var taskId = result.get(0).id;
try {
  ws.getTaskService().setVariable(taskId, "dsw_agent", agent);
  wsbean.endTask("activiti$" + taskId, "Next");
  var newParent = companyhome.childrenByXPath(
    "/app:company_home/st:sites/cm:smartclaim/cm:documentLibrary/cm:EN_COURS_DE_TRAITEMENT"
  )[0];
  results[0].move(newParent);
  results[0].properties["dsm:agentAffecte"] = agent;
  results[0].properties["dsm:statutDossier"] = getValueByKey(
    statut,
    newParent.name
  );
  results[0].save();

  model.message = "Dossier affecté avec succée";
} catch (e) {
  model.message = e.toString();
}
