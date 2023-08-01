//import(Packages.org.alfresco.service.cmr.repository.datatype.Duration);
var ctxt =
  Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var authenticationService = ctxt.getBean(
  "authenticationService",
  org.alfresco.service.cmr.security.AuthenticationService
);
var properties = ctxt.getBean("global-properties", java.util.Properties);
//var duration = Packages.org.alfresco.service.cmr.repository.datatype.Duration;
var username = stringUtils.urlEncode(json.get("username") + "");
var password = json.get("password") + "";
var statut = null;
var connectedUser = null;
try {
  connectedUser = people.getPerson(username);
  authenticationService.authenticate(username, password.split(''));
  var groups = people.getContainerGroups(connectedUser);
  var AccountEnabled = people.isAccountEnabled(username);
  var agents = {
    ticket: authenticationService.getCurrentTicket(),
    nodeId: connectedUser.getId(),
    userName: stringUtils.urlDecode(connectedUser.properties["userName"]),
    firstName: connectedUser.properties["firstName"],
    lastName: connectedUser.properties["lastName"],
    adresse: connectedUser.properties["location"],
    ville: connectedUser.properties["agm:ville"],
    codePostal: connectedUser.properties["agm:codePostal"],
    telephone: connectedUser.properties["telephone"],
    cin: connectedUser.properties["agm:cin"],
    email: connectedUser.properties["email"],
    role: connectedUser.properties["jobtitle"],
    group: groups[0].properties["authorityName"].replace("GROUP_", ""),
    AccountEnabled:AccountEnabled,
    //DateExpiration: new Date(dateExpiration).toISOString()
    //DateExpiration: duration.add(new Date(Date.now()),new duration(properties["authentication.ticket.validDuration"])),
    DateExpiration: new Date(Date.now()),
  };
  model.agents = agents;
} catch (e) {
  logger.system.out("error" + e);
  model.error = true;
}
