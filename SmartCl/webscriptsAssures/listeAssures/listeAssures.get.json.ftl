{
"agents": [
<#if agents?size !=0>
    <#list agents as agent>
        {
        "idAssures": "${agent.idAssures!''}",
        "idContrat": "${agent.idContrat!''}",
        "firstName": "${agent.firstName!''}",
        "lastName": "${agent.lastName!''}",
        "adresse": "${agent.adresse!''}",
        "ville": "${agent.ville!''}",
        "codePostal": "${agent.codePostal!''}",
        "telephone": "${agent.telephone!''}",
        "cin": "${agent.cin!''}",
        "email": "${agent.email!''}",
        "role": "${agent.role!''}",
        "companieAssurance": "${agent.companieAssurance!''}",
        "marque": "${agent.marque!''}",
        "immatriculeVoiture": "${agent.immatriculeVoiture!''}",
        "paysImmatriculeVoiture": "${agent.paysImmatriculeVoiture!''}",
        "immatriculeRemorque": "${agent.immatriculeRemorque!''}",
        "paysImmatriculeRemorque": "${agent.paysImmatriculeRemorque!''}",
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