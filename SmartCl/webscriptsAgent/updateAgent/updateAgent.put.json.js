
var idAgent = args.idAgent;
var firstName = json.get("firstName")+"";
var lastName = json.get("lastName")+"";
var adresse = json.get("adresse")+"";
var telephone = json.get("telephone")+"";
var cin = json.get("cin")+"";
var email = json.get("email")+"";
var role = json.get("role")+"";
var Correct = false; 

if(idAgent){

 var agentNode = search.findNode("workspace://SpacesStore/"+ idAgent);

   agentNode.properties["firstName"] = firstName;
   agentNode.properties["lastName"] = lastName;
   agentNode.properties["location"] = adresse;
   agentNode.properties["telephone"] = telephone;
   agentNode.properties["agm:cin"] = cin;
   agentNode.properties["email"] = email;
   agentNode.properties["jobtitle"] = role;
   agentNode.save();
   Correct = true;
}

model["Correct"] = Correct;