var ctxt = Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var properties = ctxt.getBean("global-properties", java.util.Properties);
var authenticationService = ctxt.getBean("authenticationService", org.alfresco.service.cmr.security.AuthenticationService);

var username = json.get("username")+"";
var password = null;
var pass = "";
var connectedUser;
var Correct = false;  
// Get userNode

try {
  connectedUser = people.getPerson(username);
} catch (e) {
  logger.system.out("Exception  : " + e);
}

if (connectedUser) {
  var userName = connectedUser.properties["userName"];
  // Generate Password Automatique
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdef@#$ghijklmn0123456789@#$opqrstuvwxyz0123456789@#$";
  for (i = 1; i <= 10; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }

  password = pass;
  authenticationService.setAuthentication(username, password.split(""));

  // Envoyer E-mail
  var mail = actions.create("mail");
  mail.parameters.to = connectedUser.properties["email"];
  mail.parameters.from = "bot@addinn-group.com";
  mail.parameters.subject = "Mot de passe d'authentification";
  var templateNode = search.xpathSearch("/app:company_home/app:dictionary/app:email_templates/app:notify_email_templates/cm:send-Password_fr.html.ftl")[0];
  mail.parameters.template = templateNode;

  var templateArgs = new Array();
  templateArgs["firstname"] = connectedUser.properties["firstName"];
  templateArgs["userName"] = connectedUser.properties["userName"];
  templateArgs["password"] = password;

  var templateModel = new Array();
  templateModel["args"] = templateArgs;
  mail.parameters.template_model = templateModel;

  mail.execute(templateNode);

  // sendMail(email, subject, templateNode, false);
   Correct = true;
}

 


model["Correct"] = Correct;
