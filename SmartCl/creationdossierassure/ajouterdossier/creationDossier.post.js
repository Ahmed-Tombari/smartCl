var nomDossier = args.nomDossier;
function getValueByKey(object, row) {
	return object[row];
  }
function copyStructure(template, to) {
	if (template) {
		var templates = template.children;

		for ( var i in templates) {
			var child = templates[i];

			if (child.getTypeShort() != "cm:systemfolder") {
				logger.system.out("child=" + child.name);
				var newChild = child.copy(to);

				newChild.setInheritsPermissions(true);
				if ((child.getTypeShort() != "cm:content") && child.children && child.children.length) {
					this.copyStructure(child, newChild);
				}
			}
		}
	}
}




function main() {

	var template = companyhome.childrenByXPath("/app:company_home/app:dictionary/app:space_templates/cm:DOSSIER_SINISTRE")[0];


	var dossierDestination = companyhome.childrenByXPath("/app:company_home/st:sites/cm:smartclaim/cm:documentLibrary/cm:EN_COURS_DENVOI")[0];
	if(!dossierDestination.hasAspect("dsm:informationDossierAssure")){

			dossierDestination.addAspect("dsm:informationDossierAssure");
			dossierDestination.properties["dsm:idDossier"] = 1000;
			dossierDestination.save();

		}
		var i = dossierDestination.properties["dsm:idDossier"] + 1;
		var statut = {
			EN_COURS_DENVOI: "0",
			CREE: "1",
			EN_COURS_DE_TRAITEMENT: "2",
			EN_ATTENTE_DE_RECTIFICATION: "3",
			EN_ATTENTE_DE_CONFIRMATION: "4",
		  };
		var dossier = dossierDestination.createFolder(i);
		dossierDestination.properties["dsm:idDossier"] = i;
		dossierDestination.save();
		dossier.properties["dsm:refAssure"] = person.properties["cm:userName"];
		dossier.properties["dsm:compagnieDassurance"] = person.properties["companyaddress1"];
		dossier.properties["dsm:statutDossier"] = getValueByKey(statut, dossierDestination.name);
		dossier.save();

		copyStructure(template, dossier);
		model.uuid = dossier.properties["sys:node-uuid"];

}
if(nomDossier){
	var nodeToDelete = search.findNode("workspace://SpacesStore/"+nomDossier);
	nodeToDelete.remove();
	main();
}
else{
	main();
}