var ctxt = Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var properties =  ctxt.getBean('global-properties', java.util.Properties);
var authenticationService =  ctxt.getBean('authenticationService', org.alfresco.service.cmr.security.AuthenticationService);

var username = json.get("username")+"";
var code = json.get("code")+"";
var Correct = false;
var connectedUser;
try{
    connectedUser = people.getPerson(username);
}catch (e) {
    logger.system.out("Exception  : "+e);
}

if(connectedUser){
    var dateExpireCode =  connectedUser.properties["pcm:dateExpirationCode"];
    var codeSended = connectedUser.properties["pcm:codeVerification"];
   if(code == codeSended && dateExpireCode.getTime() > new Date().getTime()){
    Correct = true;
   }

}
model["Correct"] = Correct;