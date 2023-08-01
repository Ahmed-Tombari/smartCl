
var userName = stringUtils.urlEncode(json.get("userName")+"");
var firstName = json.get("firstName")+"";
var lastName = json.get("lastName")+"";
var telephone = json.get("telephone")+"";
var cin = json.get("cin")+"";
var email = json.get("email")+"";
var setAccountEnabled = true;
var adresse = json.get("adresse")+"";
var role = json.get("role")+"";
var group = json.get("group")+"";
var Correct = false; 
var statut = 200;
var actif = true;
var idAgnet = "";

var userExiste = people.getPerson(userName);

if(userExiste){

  if(people.isAccountEnabled(userName)){
    actif = true;
    idAgnet = userExiste.id;
  }else{
    actif = false;
    idAgnet = userExiste.id;
  }

  statut = 406;
 

}else{

var pass = "";
// Generate Password Automatique
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdef@#$ghijklmn0123456789@#$opqrstuvwxyz0123456789@#$";

for (i = 1; i <= 10; i++) 
{
    var char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
}
var password = pass;

var personNode = people.createPerson(userName, firstName, lastName, email, password, setAccountEnabled);

var agentNode = people.getPerson(userName);
var site = siteService.getSite("smartclaim");
site.setMembership(userName, "SiteCollaborator");

if(agentNode){
   if(!agentNode.hasAspect("agm:agent")){
    agentNode.addAspect("agm:agent");
    agentNode.save();
  }

  agentNode.properties["agm:cin"] = cin;
  agentNode.properties["telephone"] = telephone;
	agentNode.properties["location"] = adresse;
  agentNode.properties["jobtitle"] = role;
  agentNode.save();

  Correct = true;
}


var Persongroup = people.getGroup("GROUP_" + group);
var authority = agentNode;
people.addAuthority(Persongroup,authority);

  // Envoyer E-mail
  var mail = actions.create("mail");
  mail.parameters.to = email;
  mail.parameters.from = "bot@addinn-group.com";
  mail.parameters.subject = "Bienvenue a smartClaim";
  var templateNode = search.xpathSearch("/app:company_home/app:dictionary/app:email_templates/app:notify_email_templates/cm:send-Account.html.ftl")[0];
  mail.parameters.template = templateNode;

  var templateArgs = new Array();
  templateArgs["firstname"] = firstName;
  templateArgs["userName"] = stringUtils.urlDecode(userName);
  templateArgs["password"] = password;

  var templateModel = new Array();
  templateModel["args"] = templateArgs;
  mail.parameters.template_model = templateModel;

  mail.execute(templateNode);

  // sendMail(email, subject, templateNode, false);

  
}
model["statut"] = statut;
model["actif"] = actif;
model["Correct"] = Correct;
model["idAgnet"] = idAgnet;
