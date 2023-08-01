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
var iddossier = args.nomproperty;
var dossier = search.findNode("workspace://SpacesStore/" + iddossier);

var dataObj = json;
var data = [];


for (var key in dataObj) {
	
	var value = json[key];
	
	["cnm:"+key] = value;
	
    
}

for each(var property in dossier) 
{
  data.push({ "Date_Du_Jour": property.properties["cnm:DateDuJour"],
              "Heure": property.properties["Heure"],
              "Localis": property.properties["Localis"],
              "Details": property.properties["Details"],
              "B_Leg": property.properties["B_Leg"],
              "Vec_A": property.properties["V_A"],
              "Obj_Autre": property.properties["Obj_Autre"],
              "Temoins": property.properties["Temoins"],
              "Adresse": property.properties["Adresse"],
              "Tel": property.properties["Tel"],
              // Véhicule A
              "NomA": property.properties["NomA"],
              "PrenA": property.properties["PrenA"],
              "AdresseA": property.properties["AdresseA"],
              "PostalA": property.properties["PostalA"],
              "VilleA": property.properties["VilleA"],
              "TelephoneA": property.properties["TelephoneA"],
              "Marque_Type_A": property.properties["Marque_Type_A"],
              "N_immatricule_A": property.properties["N_immatricule_A"],
              "Pays_Immatric_A": property.properties["Pays_Immatric_A"],
              "N_immatRem_A": property.properties["N_immatRem_A"],
              "Pays_ImmatRem_A": property.properties["Pays_ImmatRem_A"],
              "Nom_Societe_A": property.properties["Nom_Societe_A"],
              "Num_Contrat_A": property.properties["Num_Contrat_A"],
              "Num_CarteV_A": property.properties["Num_CarteV_A"],
              "ValableDu_A": property.properties["ValableDu_A"],
              "ValableAu_A": property.properties["ValableAu_A"],
              "Agence_A": property.properties["Agence_A"],
              "Nom_2A": property.properties["Nom_2A"],
              "Adresse_2A": property.properties["Adresse_2A"],
              "Pays_A": property.properties["Pays_A"],
              "Tel_A": property.properties["Tel_A"],
              "Nm_C_A": property.properties["Nm_C_A"],
              "P_C_A": property.properties["P_C_A"],
              "Date_Naissance_A": property.properties["Date_Naissance_A"],
              "Adresse_Conduct_A": property.properties["Adresse_Conduct_A"],
              "Tel_Conduct_A": property.properties["Tel_Conduct_A"],
              "Cin_Conducteur_A": property.properties["Cin_Conducteur_A"],
              "Numero_Permis_A": property.properties["Numero_Permis_A"],
              "Type_Permis_A": property.properties["Type_Permis_A"],
              "Perm_Val_A": property.properties["Perm_Val_A"],
              "Degats_A": property.properties["Degats_A"],
              "Observations_A": property.properties["Observations_A"],
              "Pays_cond_A": property.properties["Pays_cond_A"],
              "Degat_mat_A": property.properties["Degat_mat_A"],
              // ***** circonstant A ***✔
              "A1": property.properties["A1"],
              "A2": property.properties["A2"],
              "A3": property.properties["A3"],
              "A4": property.properties["A4"],
              "A5": property.properties["A5"],
              "A6": property.properties["A6"],
              "A7": property.properties["A7"],
              "A8": property.properties["A8"],
              "A9": property.properties["A9"],
              "A10": property.properties["A10"],
              "A11": property.properties["A11"],
              "A12": property.properties["A12"],
              "A13": property.properties["A13"],
              "A14": property.properties["A14"],
              "A15": property.properties["A15"],
              "A16": property.properties["A16"],

              //// Véhicule B
              "NomB": property.properties["NomB"],
              "PrenB": property.properties["PrenB"],
              "AdresseB": property.properties["AdresseB"],
              "PostalB": property.properties["PostalB"],
              "VilleB": property.properties["VilleB"],
              "TelephoneB": property.properties["TelephoneB"],
              "Marque_Type_B": property.properties["Marque_Type_B"],
              "N_immatricule_B": property.properties["N_immatricule_B"],
              "Pays_Immatric_B": property.properties["Pays_Immatric_B"],
              "N_immatRem_B": property.properties["N_immatRem_B"],
              "Pays_ImmatRem_B": property.properties["Pays_ImmatRem_B"],
              "Nom_Societe_B": property.properties["Nom_Societe_B"],
              "Num_Contrat_B": property.properties["Num_Contrat_B"],
              "Num_CarteV_B": property.properties["Num_CarteV_B"],
              "ValableDu_B": property.properties["ValableDu_B"],
              "ValableAu_B": property.properties["ValableAu_B"],
              "Agence_B": property.properties["Agence_B"],
              "Nom_2B": property.properties["Nom_2B"],
              "Adresse_2B": property.properties["Adresse_2B"],
              "Pays_B": property.properties["Pays_B"],
              "Tel_B": property.properties["Tel_B"],
              "Nm_C_B": property.properties["Nm_C_B"],
              "P_C_B": property.properties["P_C_B"],
              "Date_Naissance_B": property.properties["Date_Naissance_B"],
              "Adresse_Conduct_B": property.properties["Adresse_Conduct_B"],
              "Tel_Conduct_B": property.properties["Tel_Conduct_B"],
              "Cin_Conducteur_B": property.properties["Cin_Conducteur_B"],
              "Numero_Permis_B": property.properties["Numero_Permis_B"],
              "Type_Permis_B": property.properties["Type_Permis_B"],
              "Perm_Val_B": property.properties["Perm_Val_B"],
              "Degats_B": property.properties["Degats_B"],
              "Observations_B": property.properties["Observations_B"],
              "Pays_cond_B": property.properties["Pays_cond_B"],
              "Degat_mat_B": property.properties["Degat_mat_B"],
              // ***** circonstant B ***✔
              "B1": property.properties["B1"],
              "B2": property.properties["B2"],
              "B3": property.properties["B3"],
              "B4": property.properties["B4"],
              "B5": property.properties["B5"],
              "B6": property.properties["B6"],
              "B7": property.properties["B7"],
              "B8": property.properties["B8"],
              "B9": property.properties["B9"],
              "B10": property.properties["B10"],
              "B11": property.properties["B11"],
              "B12": property.properties["B12"],
              "B13": property.properties["B13"],
              "B14": property.properties["B14"],
              "B15": property.properties["B15"],
              "B16": property.properties["B16"]
            });

          }
          model.data = data;
/*

var obj = {};

var objects = [];

obj.data = [];


for each (var p in dataObject){

	obj.data.push({"key":p, "value":["cnm:"+p]});
	
   //aspects.push({"key":p, "value":["cnm:"+p]});
   
}

objects.push(obj);

model.objects = objects;

/*var instanceWorkflow = property
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

  try {
    ws.getTaskService().setVariable(
      taskId,
      "dsw_assure",
      ["dsm:refAssure"]
    );
    wsbean.endTask("activiti$" + taskId, "Next");
    
    
  } catch (error) { logger.system.out("error : "+ error);
    model.error = "true";
  }
*/





