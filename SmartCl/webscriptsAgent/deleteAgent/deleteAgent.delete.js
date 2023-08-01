var idAgent = args.idAgent;
var Correct = false; 

   if(idAgent) {

    var agentNode = search.findNode("workspace://SpacesStore/"+ idAgent)
        
    var userName = agentNode.properties["cm:userName"];
    people.disableAccount(userName);
  
    Correct = true;

   }
   // status.setCode(status.STATUS_NOT_FOUND, "user not found");
   
  
 model["Correct"] = Correct;