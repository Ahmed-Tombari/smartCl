{
<#if agents?has_content>

"idContrat": "${agents.idContrat!''}",
"firstName": "${agents.firstName!''}",
"lastName": "${agents.lastName!''}",
"adresse": "${agents.adresse!''}",
"ville": "${agents.ville!''}",
"codePostal": "${agents.codePostal!''}",
"telephone": "${agents.telephone!''}",
"cin": "${agents.cin!''}",
"email": "${agents.email!''}",
"role": "${agents.role!''}",
"companieAssurance": "${agents.companieAssurance!''}",
"marque": "${agents.marque!''}",
"immatriculeVoiture": "${agents.immatriculeVoiture!''}",
"paysImmatriculeVoiture": "${agents.paysImmatriculeVoiture!''}",
"immatriculeRemorque": "${agents.immatriculeRemorque!''}",
"paysImmatriculeRemorque": "${agents.paysImmatriculeRemorque!''}"
<#else>

"statut": "404"

</#if>
}

