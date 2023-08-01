try {
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
  var nomDossier = args.nomDossier;

  var results = search.findNode("workspace://SpacesStore/" + nomDossier);
  var dossier = results;

  var newParent = companyhome.childrenByXPath(
    "/app:company_home/st:sites/cm:smartclaim/cm:documentLibrary/cm:CREE"
  )[0];
  var result = dossier.move(newParent);
  dossier.properties["dsm:statutDossier"] = getValueByKey(
    statut,
    newParent.name
  );
  dossier.save();
  var wfName = "smartClaim";
  var wfdef = workflow.getDefinitionByName("activiti$" + wfName);
  var wfparams = new Object();
  wfparams["bpm:workflowDescription"] =
    "workflow de " + dossier.properties["cm:creator"];
  wfparams["dsw:attestationAssurance"] = dossier.childByNamePath(
    "ATTESTATION_ASSURE_B"
  ).children[0];
  wfparams["dsw:videoSinistre"] =
    dossier.childByNamePath("VIDEO_ACCIDENT").children[0];
  wfparams["dsw:imageDegat"] =
    dossier.childByNamePath("IMAGES_DES_DEGATS").children;
  wfparams["dsw:constat"] =
    dossier.childByNamePath("CONSTAT_ORIGINAL").children[0];
  wfparams["cm:longitude"] = dossier.properties["cm:longitude"];
  wfparams["cm:latitude"] = dossier.properties["cm:latitude"];

  wfparams["bpm:comment"] =
    "c'est le dossier de Monsieur " + dossier.properties["dsm:refAssure"];

  var wfpackage = workflow.createPackage();

  wfpackage.addNode(dossier);
  wfdef.startWorkflow(wfpackage, wfparams);
  model.message = true;
} catch (e) {
  logger.system.out("error : " + e);
  model.message = false;
}
