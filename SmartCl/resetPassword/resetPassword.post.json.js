var ctxt = Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var properties =  ctxt.getBean('global-properties', java.util.Properties);
var authenticationService =  ctxt.getBean('authenticationService', org.alfresco.service.cmr.security.AuthenticationService);

var  username = json.get("username")+"";
var  password = json.get("password")+"";
var connectedUser;
var Correct = false;
try{
    connectedUser = people.getPerson(username);
}catch (e) {
    logger.system.out("Exception  : "+e);
}

var dateExpireCode =  connectedUser.properties["pcm:dateExpirationCode"];

if(connectedUser && dateExpireCode.getTime() > new Date().getTime()){

    authenticationService.setAuthentication(username, password.split(''));
    
     Correct = true;
}

model["Correct"] = Correct;