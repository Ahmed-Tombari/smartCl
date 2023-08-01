{
"agents": [
<#if agents?size !=0>
    <#list agents as agent>
        {
        "idAgent" : "${agent.idAgent!''}",
        "firstName": "${agent.firstName!''}",
        "lastName": "${agent.lastName!''}",
        "adresse": "${agent.adresse!''}",
        "telephone": "${agent.telephone!''}",
        "cin": "${agent.cin!''}",
        "email": "${agent.email!''}",
        "role": "${agent.role!''}",
        "nombreDossier": "${agent.nombreDossier!''}",
        "AccountEnabled": ${agent.AccountEnabled?c!''}
        }
        <#if agent_has_next>,</#if>
    </#list>
<#else>

"statut": "404"

</#if>
]

}