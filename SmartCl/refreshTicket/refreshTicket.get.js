//auth.runAsSystem();

var ctxt = org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var authenticationService = ctxt.getBean('authenticationService', org.alfresco.service.cmr.security.AuthenticationService);
var userName = person.properties.userName;
authenticationService.getTicketComponents().iterator().next().invalidateTicketByUser(userName)
model.ticket = authenticationService.getTicketComponents().iterator().next().getNewTicket(userName);
