var index = args.skipCount;
var size = args.maxItems;
var filtreByCompagnie = args.compagnie;
var filtreByStatut = args.statut;
var boolascending = args.ascending === 'true';
var sort = {
    column:"cm:created",
    ascending:boolascending
}
var maxResults;
var count;

/* function returnPagingNumber(count){
    return count % size == 0? Math.trunc(count / size):Math.trunc(count/size) + 1
} */
var query = "PATH:'/app:company_home/st:sites/cm:smartclaim/cm:documentLibrary/*/*'";
if(filtreByCompagnie) query += " AND dsm:compagnieDassurance:'"+ filtreByCompagnie +"'";
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
            "userId":user.properties["sys:node-uuid"],
            "dateCreation": item.properties["cm:created"].toISOString(),
            "numeroDossier": item.name,
            "statut": item.properties["dsm:statutDossier"],
            "compagnie": item.properties["dsm:compagnieDassurance"]
        })
}

model.response = items;
model.count = count;
