
function main(){
    try{
      var message = "";

      var nomDossier = args.nomDossier;
      var results = null;
      
      if (nomDossier) {
        results = search.findNode("workspace://SpacesStore/"+nomDossier);
      }
      var fields = [];
      for each(field in formdata.fields)
        {
          if (field.name == "0" && field.isFile)
        {
          
          message = childrenPath(results,"CONSTAT_ORIGINAL",field);
        }
        if (field.name == "1" && field.isFile)
        {
          message = childrenPath(results,"ATTESTATION_ASSURE_B",field);
        }
        if (field.name == "2" && field.isFile)
        {
          message = childrenPath(results,"VIDEO_ACCIDENT",field);
        }
        if (field.name == "3" && field.isFile)
        {
          message = childrenPath(results,"IMAGES_DES_DEGATS",field);
        }
          
        }
        for each(field in formdata.fields)
        {
          if (field.name == "0" && field.isFile)
        {
          
          model.message = createFile(results,"CONSTAT_ORIGINAL",field);
      
        }
        if (field.name == "1" && field.isFile)
        {
          model.message = createFile(results,"ATTESTATION_ASSURE_B",field);
      
        }
        if (field.name == "2" && field.isFile)
        {
          model.message = createFile(results,"VIDEO_ACCIDENT",field);
        }
        if (field.name == "3" && field.isFile)
        {
          model.message = createFile(results,"IMAGES_DES_DEGATS",field);
        }
          
        }
    }
    catch(e){
      model.message = false;
    }
}
function childrenPath(res, childrenName) {
  var child = res.childByNamePath(childrenName)
  var dossierparent = child.children;
    if(dossierparent.length > 0){
      for each(n in dossierparent){
        n.remove();
      }
    }
    
}
function createFile(res, childrenName, field){
  var child = res.childByNamePath(childrenName);
  var upload = child.createFile(field.value);
    upload.properties.content.guessMimetype(field.filename);
    upload.properties.content.write(field.content);
    upload.setInheritsPermissions(true);
    if(upload){
      return true;
    }
    else{
      return false;
    }
}
main();
