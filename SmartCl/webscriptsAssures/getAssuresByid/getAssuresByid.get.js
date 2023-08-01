
var idAssures = args.idAssures;

assureNode = search.findNode("workspace://SpacesStore/"+ idAssures);

var agents = {

 "idContrat":assureNode.properties["userName"],
 "firstName":assureNode.properties["firstName"],
 "lastName":assureNode.properties["lastName"],
 "adresse":assureNode.properties["location"],
 "ville":assureNode.properties["agm:ville"],
 "codePostal":assureNode.properties["agm:codePostal"],
 "telephone":assureNode.properties["telephone"],
 "cin":assureNode.properties["agm:cin"],
 "email":assureNode.properties["email"],
 "role":assureNode.properties["jobtitle"],
 "companieAssurance":assureNode.properties["companyaddress1"],
 "marque":assureNode.properties["agm:marque"],
 "immatriculeVoiture":assureNode.properties["agm:immatriculeVoiture"],
 "paysImmatriculeVoiture":assureNode.properties["agm:paysImmatriculeVoiture"],
 "immatriculeRemorque":assureNode.properties["agm:immatriculeRemorque"],
 "paysImmatriculeRemorque":assureNode.properties["agm:paysImmatriculeRemorque"],

}
model.agents = agents;

