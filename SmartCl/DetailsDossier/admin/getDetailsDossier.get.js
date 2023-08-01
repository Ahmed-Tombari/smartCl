var nomDossier = args.nomDossier;
var searchResult = search.query(
	{
		language: "fts-alfresco",
		query:"PATH:'/app:company_home/st:sites/cm:smartclaim/cm:documentLibrary/*/*' AND cm:name:'" + nomDossier + "'" ,
		sort: [{
			column: 'cm:created',
			descending: true
		}]
	}
);
var dossier = searchResult[0];
var imagesDegat = dossier.childByNamePath("IMAGES_DES_DEGATS").children;
var imageConstat = dossier.childByNamePath("CONSTAT_ORIGINAL").children[0].getNodeRef().getId();
var videoSinistre = dossier.childByNamePath("VIDEO_ACCIDENT").children[0].getNodeRef().getId();
var attestationAssure = dossier.childByNamePath("ATTESTATION_ASSURE_B").children[0].getNodeRef().getId();
var imagesDegatsArray = [];
for each(var images in imagesDegat)
{
	imagesDegatsArray.push(shareLink.getShredLink(images.getNodeRef().getId()));
}
model.imagesDegat = imagesDegatsArray;
model.imageConstat = shareLink.getShredLink(imageConstat);
model.videoSinistre = shareLink.getShredLink(videoSinistre);
model.attestationAssure = shareLink.getShredLink(attestationAssure);
model.longitude = dossier.properties[["cm:longitude"]];
model.latitude = dossier.properties[["cm:latitude"]];