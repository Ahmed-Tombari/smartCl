var index = args.skipCount;
var size = args.maxItems;
var filtreByStatut = args.statut;
var boolascending = args.ascending === 'true';
var sort = {
    column:"cm:created",
    ascending:boolascending
}
var maxResults;
var count;
var query = "PATH:'/app:company_home/st:sites/cm:smartclaim/cm:documentLibrary/*/*' AND dsm:agentAffecte:'"+ person.properties["cm:userName"] +"'";
if(filtreByStatut) query += " AND dsm:statutDossier:'"+ filtreByStatut +"'";
maxResults = search.query({
  language: "fts-alfresco",
  query: query
}).length;
//count = returnPagingNumber(maxResults);
count = maxResults;
var searchResult = search.query({
  language: "fts-alfresco",
  query: query,
  page: {
    maxItems: size,
    skipCount: index * size,
  },
  sort: [
    sort
  ],
});


var items = [];
for each(var item in searchResult){
    var user = people.getPerson(item.properties["dsm:refAssure"]);
        items.push({
            "nom":user.properties["cm:firstName"],
            "prenom":user.properties["cm:lastName"],
            "userId":item.name,
            "dateCreation": item.properties["cm:created"].toISOString(),
            "numeroDossier": item.name,
            "statut": item.properties["dsm:statutDossier"],
            "compagnie": item.properties["dsm:compagnieDassurance"]
        })
}

model.response = items;
model.count = count;
