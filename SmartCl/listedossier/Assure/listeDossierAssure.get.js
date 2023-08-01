var assureName= args.refAssure;
var refAssure;
if(assureName){
  refAssure = search.findNode("workspace://SpacesStore/"+assureName).properties["cm:userName"]
}
else{
  refAssure = person.properties["cm:userName"];
}

var searchResult = search.query(
    {
        language: "fts-alfresco",
        query:"PATH:'/app:company_home/st:sites/cm:smartclaim/cm:documentLibrary/*/*' AND dsm:refAssure:'" + refAssure + "'" ,
        sort: [{
                column: 'cm:created',
                descending: true
            }]
    }
);
var dossiers = searchResult;
var nombreDesDossiers = dossiers.length;
var response = [];
for each(var dossier in dossiers){
        /*var item = Object.keys(statut).filter(function(item){
            return typeof dossier.parent.name == 'string' && item.includes('dossier.parent.name');
          });*/
          response.push({
            "numeroDossier":dossier.name,
            "statut":dossier.properties["dsm:statutDossier"],
            "dateCreation":dossier.properties["cm:created"].toISOString()
        });
}
model.response = response;
model.nombreDossier = nombreDesDossiers;
