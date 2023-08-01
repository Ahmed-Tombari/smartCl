{
<#if agents?has_content>

"firstName": "${agents.firstName!''}",
"lastName": "${agents.lastName!''}",
"adresse": "${agents.adresse!''}",
"telephone": "${agents.telephone!''}",
"cin": "${agents.cin!''}",
"email": "${agents.email!''}",
"role": "${agents.role!''}"
<#else>

"statut": "404"

</#if>
}


