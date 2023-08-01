
var userName = json.get("idContrat")+"";
var firstName = json.get("firstName")+"";
var lastName = json.get("lastName")+"";
var telephone = json.get("telephone")+"";
var cin = json.get("cin")+"";
var email = json.get("email")+"";
var setAccountEnabled = true;
var adresse = json.get("adresse")+"";
var ville = json.get("ville")+"";
var codePostal = json.get("codePostal")+"";
var role = json.get("role")+"";
var marque = json.get("marque")+"";
var immatriculeVoiture = json.get("immatriculeVoiture")+"";
var paysImmatriculeVoiture = json.get("paysImmatriculeVoiture")+"";
var immatriculeRemorque = json.get("immatriculeRemorque")+"";
var paysImmatriculeRemorque = json.get("paysImmatriculeRemorque")+"";
var group = json.get("group")+"";
var companieAssurance = json.get("companieAssurance")+"";
var Correct = false;
var statut = 200;
var actif = true;
var idAssure = "";

var userExiste = people.getPerson(userName);

if(userExiste){

  if(people.isAccountEnabled(userName)){
    actif = true;
    idAssure = userExiste.id;
  }else{
    actif = false;
    idAssure = userExiste.id;
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
  agentNode.properties["agm:ville"] = ville;
  agentNode.properties["agm:codePostal"] = codePostal;
  agentNode.properties["telephone"] = telephone;
	agentNode.properties["location"] = adresse;
  agentNode.properties["jobtitle"] = role;
  agentNode.properties["companyaddress1"] = companieAssurance;
  agentNode.save();

  if(!agentNode.hasAspect("agm:voitureAssure")){
    agentNode.addAspect("agm:voitureAssure");
    agentNode.save();
  }
  agentNode.properties["agm:marque"] = marque;
  agentNode.properties["agm:immatriculeVoiture"] = immatriculeVoiture;
  agentNode.properties["agm:paysImmatriculeVoiture"] = paysImmatriculeVoiture;
  agentNode.properties["agm:immatriculeRemorque"] = immatriculeRemorque;
  agentNode.properties["agm:paysImmatriculeRemorque"] = paysImmatriculeRemorque;
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
  mail.parameters.subject = "Mot de passe d'authentification";
  var templateNode = search.xpathSearch("/app:company_home/app:dictionary/app:email_templates/app:notify_email_templates/cm:send-Account.html.ftl")[0];
  mail.parameters.template = templateNode;

  var templateArgs = new Array();
  templateArgs["firstname"] = firstName;
  templateArgs["userName"] = userName;
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
model["idAssure"] = idAssure;
