var idAssures = args.idAssures;
var Correct = false; 

   if(idAssures) {

    var assuresNode = search.findNode("workspace://SpacesStore/"+ idAssures)
        
    var userName = assuresNode.properties["cm:userName"];
  
    people.disableAccount(userName);
  
    Correct = true;

   }
   
 model["Correct"] = Correct;