var group = args.group;
var groups = groups.getGroup(group).allUsers;
var agents = [];
var ag;

for each(var g in groups){

	ag = people.getPerson(g.userName);

      var refAgent = ag.properties["userName"];
      var results = search.query({
        language: "fts-alfresco",
        query:
          "PATH:'/app:company_home/st:sites/cm:smartclaim/cm:documentLibrary/*/*' AND dsm:agentAffecte:'" +
          refAgent +
          "'",
        sort: [
          {
            column: "cm:name",
            ascending: true,
          },
        ],
      });

  var AccountEnabled = people.isAccountEnabled(refAgent);
  
	agents.push({
      "idAgent":ag.id,
      "firstName":ag.properties["firstName"],
      "lastName":ag.properties["lastName"],
      "adresse":ag.properties["location"],
      "telephone":ag.properties["telephone"],
      "cin":ag.properties["agm:cin"],
      "email":ag.properties["email"],
      "role":ag.properties["jobtitle"],
      "nombreDossier":results.length.toString(10),
      "AccountEnabled":AccountEnabled,
      
	});

}

model.agents = agents;