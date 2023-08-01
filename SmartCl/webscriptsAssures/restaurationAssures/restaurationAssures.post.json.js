var idAssures = json.get("idAssures")+"";
var Correct = false; 

   if(idAssures) {

    var agentNode = search.findNode("workspace://SpacesStore/"+ idAssures)
        
    var userName = agentNode.properties["cm:userName"];
    people.enableAccount(userName);
  
    Correct = true;

   }
  
 model["Correct"] = Correct;