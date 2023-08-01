var idAgent = json.get("idAgent")+"";
var Correct = false; 

   if(idAgent) {

    var agentNode = search.findNode("workspace://SpacesStore/"+ idAgent)
        
    var userName = agentNode.properties["cm:userName"];
    people.enableAccount(userName);
  
    Correct = true;

   }
  
 model["Correct"] = Correct;