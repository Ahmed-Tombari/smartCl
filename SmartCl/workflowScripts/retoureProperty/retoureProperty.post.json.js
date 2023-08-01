var idDossier = json.get("nomDossier")+"";
//nomDossier=6321c1ab-a450-4aee-a3d4-5c2d1dd1234f
var dossier = search.findNode("workspace://SpacesStore/" + idDossier);

//print(dossier.properties);


var dataObject = Object.keys(dossier.properties).filter(function(key){
	return key.substring(key.indexOf("{")+1,key.indexOf("}")) == "http://www.addinn.com/model/constatNumeriqueModel/1.0"})
		.filter(function(keyreturned){
	  return dossier.properties[keyreturned] === "";
	}).map(function(result){
	  return result.replace("{http://www.addinn.com/model/constatNumeriqueModel/1.0}", "");
	});

	var aspects = [];
	var uniqueNumbers = [];
	var seen = {};
	  for each (var emptyVal in dataObject){
		
		var aspect = (propertyAspectCO.getPropertyAspect("cnm:" + emptyVal)).replace("cnm:", "");
		aspects.push(aspect);
		
	  }
	  // print(aspects);
	  aspects.forEach(function(number) {
		  if (!seen[number]) {
			  seen[number] = true;
			  uniqueNumbers.push(number);
		  }
	  });
	  //print(uniqueNumbers);


function aspectProperties(uri, aspectName) {

	var props = [];
	
var ctxt = org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var ns = ctxt.getBean('dictionaryService',org.alfresco.service.cmr.dictionary.DictionaryService);

var tar = ns.getAspect(org.alfresco.service.namespace.QName.createQName(uri, aspectName)).getProperties();
	
for(var i=0;i<tar.length;i++){
	
    props.push(tar[i].toString().split("}")[1].split("\n")[0]);

   }
	
	return props;
}

var aspect = {};

var aspects = [];
for each (var asp in uniqueNumbers){
var properties = aspectProperties("http://www.addinn.com/model/constatNumeriqueModel/1.0", asp);

	aspect.name = asp ; 
	aspect.data = [];
	
for each (var p in properties){

	aspect.data.push({"key":p, "value":dossier.properties["cnm:"+p]});
	
   //aspects.push({"key":p, "value":dossier.properties["cnm:"+p]});
	
}
	aspects.push(aspect);
	aspect = {};
	
}
logger.system.out(aspects);
//print(asp);
//print(aspects);	
model.aspects = aspects;
