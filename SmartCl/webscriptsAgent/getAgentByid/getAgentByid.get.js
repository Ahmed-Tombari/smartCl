
var idAgent = args.idAgent;
var results = null;

agentNode = search.findNode("workspace://SpacesStore/"+ idAgent);

var agents = {

 "firstName":agentNode.properties["firstName"],
 "lastName":agentNode.properties["lastName"],
 "adresse":agentNode.properties["location"],
 "telephone":agentNode.properties["telephone"],
 "cin":agentNode.properties["agm:cin"],
 "email":agentNode.properties["email"],
 "role":agentNode.properties["jobtitle"],
 "companieAssurance":agentNode.properties["companyaddress1"],

}
model.agents = agents;
