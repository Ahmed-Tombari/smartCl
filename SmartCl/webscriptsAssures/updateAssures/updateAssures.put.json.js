
var idAssures = args.idAssures;
var firstName = json.get("firstName")+"";
var lastName = json.get("lastName")+"";
var adresse = json.get("adresse")+"";
var ville = json.get("ville")+"";
var codePostal = json.get("codePostal")+"";
var telephone = json.get("telephone")+"";
var cin = json.get("cin")+"";
var email = json.get("email")+"";
var role = json.get("role")+"";
var companieAssurance = json.get("companieAssurance")+"";
var Correct = false; 

if(idAssures){

  var assureNode = search.findNode("workspace://SpacesStore/"+ idAssures);

   assureNode.properties["firstName"] = firstName;
   assureNode.properties["lastName"] = lastName;
   assureNode.properties["location"] = adresse;
   assureNode.properties["agm:ville"] = ville;
   assureNode.properties["agm:codePostal"] = codePostal;
   assureNode.properties["telephone"] = telephone;
   assureNode.properties["agm:cin"] = cin;
   assureNode.properties["email"] = email;
   assureNode.properties["jobtitle"] = role;
   assureNode.properties["companyaddress1"] = companieAssurance;
   assureNode.save();
   Correct = true;
}

model["Correct"] = Correct;