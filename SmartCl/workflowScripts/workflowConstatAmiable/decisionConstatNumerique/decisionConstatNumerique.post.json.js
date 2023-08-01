var ctxt =
  org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var wsbean = ctxt.getBean(
  "workflowServiceImpl",
  org.alfresco.repo.workflow.WorkflowServiceImpl
);
var ws = ctxt.getBean(
  "activitiProcessEngine",
  org.activiti.engine.impl.ProcessEngineImpl
);
var ns = ctxt.getBean('dictionaryService',org.alfresco.service.cmr.dictionary.DictionaryService);
var idDossier = args.nomDossier;
var Date_Du_Jour = json.get("DateDuJour")+"";
var Heure = json.get("Heure")+"";
var Localis = json.get("Localis") + "";
var Details = json.get("Details") + "";
var B_Leg = json.get("B_Leg") + "";
var Vec_A = json.get("V_A") + "";
var Obj_Autre = json.get("Obj_Autre") + "";
var Temoins = json.get("Temoins") + "";
var Adresse = json.get("Adresse") + "";
var Tel = json.get("Tel") + "";
// Véhicule A
var NomA = json.get("NomA") + "";
var PrenA = json.get("PrenA") + "";
var AdresseA = json.get("AdresseA") + "";
var PostalA = json.get("PostalA") + "";
var VilleA = json.get("VilleA") + "";
var TelephoneA = json.get("TelephoneA") + "";
var Marque_Type_A = json.get("Marque_Type_A") + "";
var N_immatricule_A = json.get("N_immatricule_A") + "";
var Pays_Immatric_A = json.get("Pays_Immatric_A") + "";
var N_immatRem_A = json.get("N_immatRem_A") + "";
var Pays_ImmatRem_A = json.get("Pays_ImmatRem_A") + "";
var Nom_Societe_A = json.get("Nom_Societe_A") + "";
var Num_Contrat_A = json.get("Num_Contrat_A") + "";
var Num_CarteV_A = json.get("Num_CarteV_A") + "";
var ValableDu_A = json.get("ValableDu_A") + "";
var ValableAu_A = json.get("ValableAu_A") + "";
var Agence_A = json.get("Agence_A") + "";
var Nom_2A = json.get("Nom_2A") + "";
var Adresse_2A = json.get("Adresse_2A") + "";
var Pays_A = json.get("Pays_A") + "";
var Tel_A = json.get("Tel_A") + "";
var Nm_C_A = json.get("Nm_C_A") + "";
var P_C_A = json.get("P_C_A") + "";
var Date_Naissance_A = json.get("Date_Naissance_A") + "";
var Adresse_Conduct_A = json.get("Adresse_Conduct_A") + "";
var Tel_Conduct_A = json.get("Tel_Conduct_A") + "";
var Cin_Conducteur_A = json.get("Cin_Conducteur_A") + "";
var Numero_Permis_A = json.get("Numero_Permis_A") + "";
var Type_Permis_A = json.get("Type_Permis_A") + "";
var Perm_Val_A = json.get("Perm_Val_A") + "";
var Degats_A = json.get("Degats_A") + "";
var Observations_A = json.get("Observations_A") + "";
var Pays_cond_A = json.get("Pays_cond_A") + "";
var Degat_mat_A = json.get("Degat_mat_A") + "";
// ***** circonstant A ***✔
var A1 = json.get("A1") + "";
var A2 = json.get("A2") + "";
var A3 = json.get("A3") + "";
var A4 = json.get("A4") + "";
var A5 = json.get("A5") + "";
var A6 = json.get("A6") + "";
var A7 = json.get("A7") + "";
var A8 = json.get("A8") + "";
var A9 = json.get("A9") + "";
var A10 = json.get("A10") + "";
var A11 = json.get("A11") + "";
var A12 = json.get("A12") + "";
var A13 = json.get("A13") + "";
var A14 = json.get("A14") + "";
var A15 = json.get("A15") + "";
var A16 = json.get("A16") + "";

//// Véhicule B
var NomB = json.get("NomB") + "";
var PrenB = json.get("PrenB") + "";
var AdresseB = json.get("AdresseB") + "";
var PostalB = json.get("PostalB") + "";
var VilleB = json.get("VilleB") + "";
var TelephoneB = json.get("TelephoneB") + "";
var Marque_Type_B = json.get("Marque_Type_B") + "";
var N_immatricule_B = json.get("N_immatricule_B") + "";
var Pays_Immatric_B = json.get("Pays_Immatric_B") + "";
var N_immatRem_B = json.get("N_immatRem_B") + "";
var Pays_ImmatRem_B = json.get("Pays_ImmatRem_B") + "";
var Nom_Societe_B = json.get("Nom_Societe_B") + "";
var Num_Contrat_B = json.get("Num_Contrat_B") + "";
var Num_CarteV_B = json.get("Num_CarteV_B") + "";
var ValableDu_B = json.get("ValableDu_B") + "";
var ValableAu_B = json.get("ValableAu_B") + "";
var Agence_B = json.get("Agence_B") + "";
var Nom_2B = json.get("Nom_2B") + "";
var Adresse_2B = json.get("Adresse_2B") + "";
var Pays_B = json.get("Pays_B") + "";
var Tel_B = json.get("Tel_B") + "";
var Nm_C_B = json.get("Nm_C_B") + "";
var P_C_B = json.get("P_C_B") + "";
var Date_Naissance_B = json.get("Date_Naissance_B") + "";
var Adresse_Conduct_B = json.get("Adresse_Conduct_B") + "";
var Tel_Conduct_B = json.get("Tel_Conduct_B") + "";
var Cin_Conducteur_B = json.get("Cin_Conducteur_B") + "";
var Numero_Permis_B = json.get("Numero_Permis_B") + "";
var Type_Permis_B = json.get("Type_Permis_B") + "";
var Perm_Val_B = json.get("Perm_Val_B") + "";
var Degats_B = json.get("Degats_B") + "";
var Observations_B = json.get("Observations_B") + "";
var Pays_cond_B = json.get("Pays_cond_B") + "";
var Degat_mat_B = json.get("Degat_mat_B") + "";
// ***** circonstant B ***✔
var B1 = json.get("B1") + "";
var B2 = json.get("B2") + "";
var B3 = json.get("B3") + "";
var B4 = json.get("B4") + "";
var B5 = json.get("B5") + "";
var B6 = json.get("B6") + "";
var B7 = json.get("B7") + "";
var B8 = json.get("B8") + "";
var B9 = json.get("B9") + "";
var B10 = json.get("B10") + "";
var B11 = json.get("B11") + "";
var B12 = json.get("B12") + "";
var B13 = json.get("B13") + "";
var B14 = json.get("B14") + "";
var B15 = json.get("B15") + "";
var B16 = json.get("B16") + "";
var action = json.get("action");


function enregisterPropriete(dossier){
  /************************ Entête Constat ******************************/
  dossier.addAspect("cnm:informationGenerale");
  dossier.addAspect("cnm:vehiculeA");
  dossier.addAspect("cnm:conducteurA");
  dossier.addAspect("cnm:circonstatA");
  dossier.addAspect("cnm:vehiculeB");
  dossier.addAspect("cnm:conducteurB");
  dossier.addAspect("cnm:circonstatB");

  dossier.properties["cnm:Date"] =
    new Date().getDay() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear();
  dossier.properties["cnm:Heure"] =
    new Date().getHours() + 1 + ":" + new Date().getMinutes();
  dossier.properties["cnm:Localis"] = Localis;
  dossier.properties["cnm:Details"] = Details;
  dossier.properties["cnm:B_Leg"] = B_Leg;
  dossier.properties["cnm:Vec_A"] = Vec_A;
  dossier.properties["cnm:Obj_Autre"] = Obj_Autre;
  dossier.properties["cnm:Temoins"] = Temoins;
  dossier.properties["cnm:Adresse"] = Adresse;
  dossier.properties["cnm:Tel"] = Tel;

  /***************************** Véhicule A **************************/

  // Assuré
  dossier.properties["cnm:NomA"] = NomA;
  dossier.properties["cnm:PrenA"] = PrenA;
  dossier.properties["cnm:AdresseA"] = AdresseA;
  dossier.properties["cnm:PostalA"] = PostalA;
  dossier.properties["cnm:VilleA"] = VilleA;
  dossier.properties["cnm:TelephoneA"] = TelephoneA;
  // Véhicule
  dossier.properties["cnm:Marque_Type_A"] = Marque_Type_A;
  dossier.properties["cnm:N_immatricule_A"] = N_immatricule_A;
  dossier.properties["cnm:Pays_Immatric_A"] = Pays_Immatric_A;
  dossier.properties["cnm:N_immatRem_A"] = N_immatRem_A;
  dossier.properties["cnm:Pays_ImmatRem_A"] = Pays_ImmatRem_A;
  dossier.properties["cnm:Nom_Societe_A"] = Nom_Societe_A;
  dossier.properties["cnm:Num_Contrat_A"] = Num_Contrat_A;
  dossier.properties["cnm:Num_CarteV_A"] = Num_CarteV_A;
  dossier.properties["cnm:ValableDu_A"] =
    new Date().getDay() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear();
  dossier.properties["cnm:ValableAu_A"] =
    new Date().getDay() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear();
  dossier.properties["cnm:Agence_A"] = Agence_A;
  dossier.properties["cnm:Nom_2A"] = Nom_2A;
  dossier.properties["cnm:Adresse_2A"] = Adresse_2A;
  dossier.properties["cnm:Degat_mat_A"] = Degat_mat_A;
  dossier.properties["cnm:Pays_A"] = Pays_A;
  dossier.properties["cnm:Tel_A"] = Tel_A;
  // Conducteur
  dossier.properties["cnm:Nm_C_A"] = Nm_C_A;
  dossier.properties["cnm:P_C_A"] = P_C_A;
  dossier.properties["cnm:Date_Naissance_A"] = Date_Naissance_A;
  dossier.properties["cnm:Adresse_Conduct_A"] = Adresse_Conduct_A;
  dossier.properties["cnm:Tel_Conduct_A"] = Tel_Conduct_A;
  dossier.properties["cnm:Cin_Conducteur_A"] = Cin_Conducteur_A;
  dossier.properties["cnm:Numero_Permis_A"] = Numero_Permis_A;
  dossier.properties["cnm:Type_Permis_A"] = Type_Permis_A;
  dossier.properties["cnm:Pays_cond_A"] = Pays_cond_A;
  dossier.properties["cnm:Perm_Val_A"] =
    new Date().getDay() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear();
  // Degats
  dossier.properties["cnm:Degats_A"] = Degats_A;
  // Observations
  dossier.properties["cnm:Observations_A"] = Observations_A;
  // circonstat A
  dossier.properties["cnm:A1"] = A1;
  dossier.properties["cnm:A2"] = A2;
  dossier.properties["cnm:A3"] = A3;
  dossier.properties["cnm:A4"] = A4;
  dossier.properties["cnm:A5"] = A5;
  dossier.properties["cnm:A6"] = A6;
  dossier.properties["cnm:A7"] = A7;
  dossier.properties["cnm:A8"] = A8;
  dossier.properties["cnm:A9"] = A9;
  dossier.properties["cnm:A10"] = A10;
  dossier.properties["cnm:A11"] = A11;
  dossier.properties["cnm:A12"] = A12;
  dossier.properties["cnm:A13"] = A13;
  dossier.properties["cnm:A14"] = A14;
  dossier.properties["cnm:A15"] = A15;
  dossier.properties["cnm:A16"] = A16;

  /***************************** Véhicule B **************************/

  // Assuré
  dossier.properties["cnm:NomB"] = NomB;
  dossier.properties["cnm:PrenB"] = PrenB;
  dossier.properties["cnm:AdresseB"] = AdresseB;
  dossier.properties["cnm:PostalB"] = PostalB;
  dossier.properties["cnm:VilleB"] = VilleB;
  dossier.properties["cnm:TelephoneB"] = TelephoneB;
  // Véhicule
  dossier.properties["cnm:Marque_Type_B"] = Marque_Type_B;
  dossier.properties["cnm:N_immatricule_B"] = N_immatricule_B;
  dossier.properties["cnm:Pays_Immatric_B"] = Pays_Immatric_B;
  dossier.properties["cnm:N_immatRem_B"] = N_immatRem_B;
  dossier.properties["cnm:Pays_ImmatRem_B"] = Pays_ImmatRem_B;
  dossier.properties["cnm:Nom_Societe_B"] = Nom_Societe_B;
  dossier.properties["cnm:Num_Contrat_B"] = Num_Contrat_B;
  dossier.properties["cnm:Num_CarteV_B"] = Num_CarteV_B;
  dossier.properties["cnm:ValableDu_B"] =
    new Date().getDay() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear();
  dossier.properties["cnm:ValableAu_B"] =
    new Date().getDay() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear();
  dossier.properties["cnm:Agence_B"] = Agence_B;
  dossier.properties["cnm:Nom_2B"] = Nom_2B;
  dossier.properties["cnm:Adresse_2B"] = Adresse_2B;
  dossier.properties["cnm:Degat_mat_B"] = Degat_mat_B;
  dossier.properties["cnm:Pays_B"] = Pays_B;
  dossier.properties["cnm:Tel_B"] = Tel_B;
  // Conducteur
  dossier.properties["cnm:Nm_C_B"] = Nm_C_B;
  dossier.properties["cnm:P_C_B"] = P_C_B;
  dossier.properties["cnm:Date_Naissance_B"] = Date_Naissance_B;
  dossier.properties["cnm:Adresse_Conduct_B"] = Adresse_Conduct_B;
  dossier.properties["cnm:Tel_Conduct_B"] = Tel_Conduct_B;
  dossier.properties["cnm:Cin_Conducteur_B"] = Cin_Conducteur_B;
  dossier.properties["cnm:Numero_Permis_B"] = Numero_Permis_B;
  dossier.properties["cnm:Type_Permis_B"] = Type_Permis_B;
  dossier.properties["cnm:Perm_Val_B"] =
    new Date().getDay() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear();
  // Degats
  dossier.properties["cnm:Degats_B"] = Degats_B;
  // Observations
  dossier.properties["cnm:Observations_B"] = Observations_B;
  // circonstat B
  dossier.properties["cnm:B1"] = B1;
  dossier.properties["cnm:B2"] = B2;
  dossier.properties["cnm:B3"] = B3;
  dossier.properties["cnm:B4"] = B4;
  dossier.properties["cnm:B5"] = B5;
  dossier.properties["cnm:B6"] = B6;
  dossier.properties["cnm:B7"] = B7;
  dossier.properties["cnm:B8"] = B8;
  dossier.properties["cnm:B9"] = B9;
  dossier.properties["cnm:B10"] = B10;
  dossier.properties["cnm:B11"] = B11;
  dossier.properties["cnm:B12"] = B12;
  dossier.properties["cnm:B13"] = B13;
  dossier.properties["cnm:B14"] = B14;
  dossier.properties["cnm:B15"] = B15;
  dossier.properties["cnm:B16"] = B16;
  dossier.save();
}

var variablesToReplace = new java.util.HashMap();
var TEMPLATE_PATH =
  "/app:company_home/app:dictionary/app:node_templates/cm:CONSTAT_AMIABLE/cm:CONSTAT_x0020_AMIABLE.docx";

var templateNode = companyhome.childrenByXPath(TEMPLATE_PATH)[0];

var dossier = search.findNode("workspace://SpacesStore/" + idDossier);
var destinationNodeRef = "workspace://SpacesStore/"+dossier.childByNamePath("CONSTAT_NUMERIQUE").getNodeRef().getId();
//workspace://SpacesStore/0c968cde-494e-4d6b-ad4f-033570db827a
var instanceWorkflow = dossier
  .getActiveWorkflows()[0]
  .getId()
  .replace("activiti$", "");
var result = ws
  .getTaskService()
  .createTaskQuery()
  .processInstanceId(instanceWorkflow)
  .orderByTaskId()
  .asc()
  .list();
  var taskId = result.get(0).id;
if (action == "complet") {
  try {
    
    enregisterPropriete(dossier);
    /************************ Entête Constat ******************************/

    variablesToReplace["Date"] =
      new Date().getDay() +
      "/" +
      new Date().getMonth() +
      "/" +
      new Date().getFullYear();
    variablesToReplace["Heure"] =
      new Date().getHours() + 1 + ":" + new Date().getMinutes();
    variablesToReplace["Localis"] = Localis;
    variablesToReplace["Details"] = Details;
    variablesToReplace["B_Leg"] = B_Leg;
    variablesToReplace["Vec_A"] = Vec_A;
    variablesToReplace["Obj_Autre"] = Obj_Autre;
    variablesToReplace["Temoins"] = Temoins;
    variablesToReplace["Adresse"] = Adresse;
    variablesToReplace["Tel"] = Tel;

    /***************************** Véhicule A **************************/

    // Assuré
    variablesToReplace["NomA"] = NomA;
    variablesToReplace["PrenA"] = PrenA;
    variablesToReplace["AdresseA"] = AdresseA;
    variablesToReplace["PostalA"] = PostalA;
    variablesToReplace["VilleA"] = VilleA;
    variablesToReplace["TelephoneA"] = TelephoneA;
    // Véhicule
    variablesToReplace["Marque_Type_A"] = Marque_Type_A;
    variablesToReplace["N_immatricule_A"] = N_immatricule_A;
    variablesToReplace["Pays_Immatric_A"] = Pays_Immatric_A;
    variablesToReplace["N_immatRem_A"] = N_immatRem_A;
    variablesToReplace["Pays_ImmatRem_A"] = Pays_ImmatRem_A;
    variablesToReplace["Nom_Societe_A"] = Nom_Societe_A;
    variablesToReplace["Num_Contrat_A"] = Num_Contrat_A;
    variablesToReplace["Num_CarteV_A"] = Num_CarteV_A;
    variablesToReplace["ValableDu_A"] =
      new Date().getDay() +
      "/" +
      new Date().getMonth() +
      "/" +
      new Date().getFullYear();
    variablesToReplace["ValableAu_A"] =
      new Date().getDay() +
      "/" +
      new Date().getMonth() +
      "/" +
      new Date().getFullYear();
    variablesToReplace["Agence_A"] = Agence_A;
    variablesToReplace["Nom_2A"] = Nom_2A;
    variablesToReplace["Adresse_2A"] = Adresse_2A;
    variablesToReplace["Pays_A"] = Pays_A;
    variablesToReplace["Tel_A"] = Tel_A;
    variablesToReplace["Degat_mat_A"] = Degat_mat_A;
    // Conducteur
    variablesToReplace["Nm_C_A"] = Nm_C_A;
    variablesToReplace["P_C_A"] = P_C_A;
    variablesToReplace["Date_Naissance_A"] = Date_Naissance_A;
    variablesToReplace["Adresse_Conduct_A"] = Adresse_Conduct_A;
    variablesToReplace["Tel_Conduct_A"] = Tel_Conduct_A;
    variablesToReplace["Cin_Conducteur_A"] = Cin_Conducteur_A;
    variablesToReplace["Numero_Permis_A"] = Numero_Permis_A;
    variablesToReplace["Type_Permis_A"] = Type_Permis_A;
    variablesToReplace["Pays_cond_A"] = Pays_cond_A;
    variablesToReplace["Perm_Val_A"] =
      new Date().getDay() +
      "/" +
      new Date().getMonth() +
      "/" +
      new Date().getFullYear();
    // Degats
    variablesToReplace["Degats_A"] = Degats_A;
    // Observations
    variablesToReplace["Observations_A"] = Observations_A;
    // circonstat A
    variablesToReplace["A1"] = A1;
    variablesToReplace["A2"] = A2;
    variablesToReplace["A3"] = A3;
    variablesToReplace["A4"] = A4;
    variablesToReplace["A5"] = A5;
    variablesToReplace["A6"] = A6;
    variablesToReplace["A7"] = A7;
    variablesToReplace["A8"] = A8;
    variablesToReplace["A9"] = A9;
    variablesToReplace["A10"] = A10;
    variablesToReplace["A11"] = A11;
    variablesToReplace["A12"] = A12;
    variablesToReplace["A13"] = A13;
    variablesToReplace["A14"] = A14;
    variablesToReplace["A15"] = A15;
    variablesToReplace["A16"] = A16;

    /***************************** Véhicule B **************************/

    // Assuré
    variablesToReplace["NomB"] = NomB;
    variablesToReplace["PrenB"] = PrenB;
    variablesToReplace["AdresseB"] = AdresseB;
    variablesToReplace["PostalB"] = PostalB;
    variablesToReplace["VilleB"] = VilleB;
    variablesToReplace["TelephoneB"] = TelephoneB;
    // Véhicule
    variablesToReplace["Marque_Type_B"] = Marque_Type_B;
    variablesToReplace["N_immatricule_B"] = N_immatricule_B;
    variablesToReplace["Pays_Immatric_B"] = Pays_Immatric_B;
    variablesToReplace["N_immatRem_B"] = N_immatRem_B;
    variablesToReplace["Pays_ImmatRem_B"] = Pays_ImmatRem_B;
    variablesToReplace["Nom_Societe_B"] = Nom_Societe_B;
    variablesToReplace["Num_Contrat_B"] = Num_Contrat_B;
    variablesToReplace["Num_CarteV_B"] = Num_CarteV_B;
    variablesToReplace["ValableDu_B"] =
      new Date().getDay() +
      "/" +
      new Date().getMonth() +
      "/" +
      new Date().getFullYear();
    variablesToReplace["ValableAu_B"] =
      new Date().getDay() +
      "/" +
      new Date().getMonth() +
      "/" +
      new Date().getFullYear();
    variablesToReplace["Agence_B"] = Agence_B;
    variablesToReplace["Nom_2B"] = Nom_2B;
    variablesToReplace["Adresse_2B"] = Adresse_2B;
    variablesToReplace["Pays_B"] = Pays_B;
    variablesToReplace["Tel_B"] = Tel_B;
    variablesToReplace["Degat_mat_B"] = Degat_mat_B;
    // Conducteur
    variablesToReplace["Nm_C_B"] = Nm_C_B;
    variablesToReplace["P_C_B"] = P_C_B;
    variablesToReplace["Date_Naissance_B"] = Date_Naissance_B;
    variablesToReplace["Adresse_Conduct_B"] = Adresse_Conduct_B;
    variablesToReplace["Tel_Conduct_B"] = Tel_Conduct_B;
    variablesToReplace["Cin_Conducteur_B"] = Cin_Conducteur_B;
    variablesToReplace["Numero_Permis_B"] = Numero_Permis_B;
    variablesToReplace["Type_Permis_B"] = Type_Permis_B;
    variablesToReplace["Pays_cond_B"] = Pays_cond_B;
    variablesToReplace["Perm_Val_B"] =
      new Date().getDay() +
      "/" +
      new Date().getMonth() +
      "/" +
      new Date().getFullYear();
    // Degats
    variablesToReplace["Degats_B"] = Degats_B;
    // Observations
    variablesToReplace["Observations_B"] = Observations_B;
    // circonstat B
    variablesToReplace["B1"] = B1;
    variablesToReplace["B2"] = B2;
    variablesToReplace["B3"] = B3;
    variablesToReplace["B4"] = B4;
    variablesToReplace["B5"] = B5;
    variablesToReplace["B6"] = B6;
    variablesToReplace["B7"] = B7;
    variablesToReplace["B8"] = B8;
    variablesToReplace["B9"] = B9;
    variablesToReplace["B10"] = B10;
    variablesToReplace["B11"] = B11;
    variablesToReplace["B12"] = B12;
    variablesToReplace["B13"] = B13;
    variablesToReplace["B14"] = B14;
    variablesToReplace["B15"] = B15;
    variablesToReplace["B16"] = B16;
    documentsGeneration.mergeAndGenerateOutput(
      templateNode.nodeRef,
      destinationNodeRef,
      variablesToReplace,
      "file.docx"
    );

    ws.getTaskService().setVariable(
      taskId,
      "dsw_decisionConstatNumeriqueOutcome",
      action
    );
    ws.getTaskService().setVariable(
      taskId,
      "dsw_assure",
      dossier.properties["dsm:refAssure"]
    );
    wsbean.endTask("activiti$" + taskId, "Next");
    model.error = "Le constat numerique est complet et generer avec success";
  } catch (error) { logger.system.out("error : "+ error);
    model.error = "true";
  }
} else if (action == "invalid") {
  try {
    ws.getTaskService().setVariable(
      taskId,
      "dsw_decisionConstatNumeriqueOutcome",
      action
    );
    wsbean.endTask("activiti$" + taskId, "Next");
    model.error = "Le constat numerique est invalid";
  } catch (error) { logger.system.out("error : "+ error);
    
    model.error = "true";
  }
} else if (action == "incomplet"){
 /* try {
   
    enregisterPropriete(dossier);
    
  }
catch (error) { logger.system.out("error : "+ error);
  model.error = "true";
}*/

enregisterPropriete(dossier);

/*var jsonString = json.toString();
jsonString = jsonString.replace("{", "").replace("}", "");
var jsonArray = jsonString.split(",");

for (var i = 0; i < jsonArray.length; i++) {
    var keyValuePair = jsonArray[i].split(":");
    var key = keyValuePair[0].trim();
    
      logger.system.out("true =======> " + key);
}
*/


///////////////////////////////////

var jsonString = json.toString();
jsonString = jsonString.replace("{", "").replace("}", "");
var jsonArray = jsonString.split(",");
var dataObject = [];
for (var i = 0; i < jsonArray.length; i++) {
    var keyValuePair = jsonArray[i].split(":");
    var key = keyValuePair[0].trim();
    var value = keyValuePair[1].trim();
    var jsonDataValue = JSON.parse(value);
    var jsonDataKey = JSON.parse(key);
    if (jsonDataValue === ""){
    
     dataObject.push(jsonDataKey);
     
    }
}


/*
var jsonData = JSON.parse(json);
for (var key in jsonData) {
  logger.system.out("true =======> " + key);
}
*/



//logger.system.out("json / " + combinedObject);
// var dataObject = json.keys.keys
//       .filter(function(keyreturned){
//     return json[keyreturned] === "";
//   });

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

      aspect.name = asp; 
      aspect.data = [];
      
    for each (var p in properties){

      aspect.data.push({"key":p, "value":dossier.properties["cnm:"+p]});
      
      //aspects.push({"key":p, "value":dossier.properties["cnm:"+p]});
      
    }
      aspects.push(aspect);
      aspect = {};
    }
    
    try {
      
   

  ws.getTaskService().setVariable(
    taskId,
    "dsw_decisionConstatNumeriqueOutcome",
    action
  );
  ws.getTaskService().setVariable(
    taskId,
    "dsw_assure",
    dossier.properties["dsm:refAssure"]
  );
  wsbean.endTask("activiti$" + taskId, "Next");
  model.aspects = aspects;
  model.error = "Le constat numerique est incomplet";
}
catch (error) { logger.system.out("error : "+ error);
  model.error = "true";
}

}
