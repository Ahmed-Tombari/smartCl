<#assign datetimeformat="yyyy-MM-dd HH:mm:ss.ms">
{
<#if agents?has_content>
    "ticket": "${agents.ticket!''}",
    "nodeId": "${agents.nodeId!''}",
    "userName": "${agents.userName!''}",
    "firstName": "${agents.firstName!''}",
    "lastName": "${agents.lastName!''}",
    "adresse": "${agents.adresse!''}",
    "ville": "${agents.ville!''}",
    "codePostal": "${agents.codePostal!''}",
    "telephone": "${agents.telephone!''}",
    "cin": "${agents.cin!''}",
    "email": "${agents.email!''}",
    "group":"${agents.group!''}",
    "role":"${agents.role!''}",
    "AccountEnabled":${agents.AccountEnabled?c!''},
    "dateExpiration":"${agents.DateExpiration?string(datetimeformat)!''}"
</#if>
<#if error??>
"error":${error?c}
</#if>
}