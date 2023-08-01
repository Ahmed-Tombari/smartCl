try {
  var results = null;

  var nomDossier = args.nomDossier;
  var longitude = json.get("longitude");
  var latitude = json.get("latitude");
  results = search.findNode("workspace://SpacesStore/" + nomDossier);

  var dossierparent = results;
  if (!dossierparent.hasAspect("cm:geographic")) {
    dossierparent.addAspect("cm:geographic");
    dossierparent.properties["cm:latitude"] = longitude;
    dossierparent.properties["cm:longitude"] = latitude;
    dossierparent.save();
  } else {
    dossierparent.properties["cm:latitude"] = longitude;
    dossierparent.properties["cm:longitude"] = latitude;
    dossierparent.save();
  }
  model.message = true;
} catch (e) {
  logger.system.out("error " + e);
  model.message = false;
}
