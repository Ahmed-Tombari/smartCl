var ctxt = Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var properties =  ctxt.getBean('global-properties', java.util.Properties);
var codeExpiryMunite = properties["codeVerification.codeExpiryMunite"];

var codeExpiryMuniteInt = 10;

if(parseInt(codeExpiryMunite)){
    codeExpiryMuniteInt = parseInt(codeExpiryMunite);
    //logger.system.out("code Expiry Munite Int  : "+codeExpiryMuniteInt);
}

var  username = json.get("username")+"";
var Correct = false;
var connectedUser;
try{
    connectedUser = people.getPerson(stringUtils.urlEncode(username));
}catch (e) {
    logger.system.out("Exception  : "+e);
}


if(connectedUser){
    if(!connectedUser.hasAspect("pcm:VerificationCode")){
        connectedUser.addAspect("pcm:VerificationCode");
        connectedUser.save();
    }

    connectedUser.properties["pcm:dateExpirationCode"] = add_minutes(new Date(), codeExpiryMuniteInt);
    connectedUser.properties["pcm:codeVerification"] = (Math.floor(Math.random() * (999999 - 100000)) + 100000)+"";
    connectedUser.save();

    var mail = actions.create("mail");
    mail.parameters.to = connectedUser.properties["email"];
    logger.system.out("usernam"+ username);
    logger.system.out("email to"+ mail.parameters.to);
    mail.parameters.from = "bot@addinn-group.com";
    mail.parameters.subject = "Code d'authentification";
    var templateNode = search.xpathSearch("/app:company_home/app:dictionary/app:email_templates/cm:Modeles_x0020_email_x0020_code_x0020_verification/cm:send-codeVerification_fr.html.ftl")[0];
    mail.parameters.template = templateNode;

    var templateArgs = new Array();
    templateArgs['firstname'] = connectedUser.properties["firstName"];
    templateArgs['code'] = connectedUser.properties["pcm:codeVerification"];
	templateArgs['dateExpirationCode'] = connectedUser.properties["pcm:dateExpirationCode"].toLocaleString();

    var templateModel = new Array();
    templateModel['args'] = templateArgs;
    mail.parameters.template_model = templateModel;

    mail.execute(templateNode);
    
   // sendMail(email, subject, templateNode, false);
   Correct = true;
}


function add_minutes(dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}


model["Correct"] = Correct;
