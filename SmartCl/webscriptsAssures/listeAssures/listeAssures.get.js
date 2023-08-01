var group = args.group;
var groups = groups.getGroup(group).allUsers;
var agents = [];
var ag;

for each(var g in groups){

	ag = people.getPerson(g.userName);

      var refAssure = ag.properties["userName"];
      var results = search.query({
        language: "fts-alfresco",
        query:
          "PATH:'/app:company_home/st:sites/cm:smartclaim/cm:documentLibrary/*/*' AND dsm:refAssure:'" +
        refAssure +
          "'",
        sort: [
          {
            column: "cm:name",
            ascending: true,
          },
        ],
      });

 var AccountEnabled = people.isAccountEnabled(refAssure);

	agents.push({
            "idContrat":ag.properties["userName"],
            "firstName":ag.properties["firstName"],
            "lastName":ag.properties["lastName"],
            "adresse":ag.properties["location"],
            "ville":ag.properties["agm:ville"],
            "codePostal":ag.properties["agm:codePostal"],
            "telephone":ag.properties["telephone"],
            "cin":ag.properties["agm:cin"],
            "email":ag.properties["email"],
            "role":ag.properties["jobtitle"],
            "companieAssurance":ag.properties["companyaddress1"],
            "marque":ag.properties["agm:marque"],
            "immatriculeVoiture":ag.properties["agm:immatriculeVoiture"],
            "paysImmatriculeVoiture":ag.properties["agm:paysImmatriculeVoiture"],
            "immatriculeRemorque":ag.properties["agm:immatriculeRemorque"],
            "paysImmatriculeRemorque":ag.properties["agm:paysImmatriculeRemorque"],
            "idAssures":ag.id,
            "nombreDossier":results.length.toString(10),
            "AccountEnabled":AccountEnabled,
	});

}

model.agents = agents;