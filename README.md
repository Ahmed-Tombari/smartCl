# Alfresco AIO Project - SDK 3

This is an All-In-One (AIO) project for Alfresco SDK 3.0. 

Run with `mvn clean install -DskipTests=true alfresco:run` or `./run.sh` and verify that it 

 * Runs the embedded Tomcat + H2 DB 
 * Runs Alfresco Platform (Repository)
 * Runs Alfresco Solr4
 * Runs Alfresco Share
 * Packages both as JAR and AMP assembly for modules
 
# Few things to notice

 * No parent pom
 * No WAR projects, all handled by the Alfresco Maven Plugin 
 * No runner project - it's all in the Alfresco Maven Plugin
 * Standard JAR packaging and layout
 * Works seamlessly with Eclipse and IntelliJ IDEA
 * JRebel for hot reloading, JRebel maven plugin for generating rebel.xml, agent usage: `MAVEN_OPTS=-Xms256m -Xmx1G -agentpath:/home/martin/apps/jrebel/lib/libjrebel64.so`
 * AMP as an assembly
 * [Configurable Run mojo](https://github.com/Alfresco/alfresco-sdk/blob/sdk-3.0/plugins/alfresco-maven-plugin/src/main/java/org/alfresco/maven/plugin/RunMojo.java) in the `alfresco-maven-plugin`
 * No unit testing/functional tests just yet
 * Resources loaded from META-INF
 * Web Fragment (this includes a sample servlet configured via web fragment)
 
# TODO
 
  * Abstract assembly into a dependency so we don't have to ship the assembly in the archetype
  * Purge
  * Functional/remote unit tests
   
  
 

# smartclaim-v5

CREATION DU SITE smartclaim :

* chemin : company_home/sites/smartclaim


2- Création du modèle de dossier :
Vous pouvez trouver les modele de dossier sinistre sous utils/model_de_dossier.
* Le dossier sinistre contient 4 sous dossiers:
  - ATTESTATION_ASSURE_B: ou se trouve l'attestation d'assurance de personne B.
  - CONSTAT_NUMERIQUE: ou se trouve le constat numerique sous format PDF.
  - CONSTAT_ORIGINAL: là ou on trouve le constat original de l'assure.
  - IMAGES_DES_DEGATS: Dans cette emplacement, on trouve les images des dégats du voiture.
  - VIDEO_ACCIDENT: Dans cette emplacement, on trouve le video de l'accident.


  CREATION DU PLAN DE CLASSEMENT DE DOSSIER :
  Le dossier sinistre se passe en plusieurs statut. Donc, les dossiers sinistre va etre classer selon le statut. C'est pour cela 
* PROJECT_HOME/utils/plan_de_classement/DOSSIERRECOUVREMENT (A créer sous repository/datadictionary/space_template)



CRUD CHARGE:

1- Ajouter le script 'REG_CHARGE.js' qui se trouve sous PROJECT_HOME/utils/scripts dans share sous Entrepot/data dictionary/scripts.


2-CREATION DU REGLE DE GESTION DE CHARGE :

chemin : Entrepot/user Homes (veuillez créer la règle de gestion sur le dossier User Homes)

* Description:
  Actif: Oui
  Exécuter en tâche de fond: Non
  Règle appliquée aux sous-dossiers: Non
* Quand:
  Des éléments sont créés ou entrent dans ce dossier
  Si tous les critères sont remplis :
  Est de type (ou de sous-type) 'dossier'
  Exécuter une action :
  Exécuter le script 'REG_CHARGE.js' (vous le trouverez sous utils/scripts)


