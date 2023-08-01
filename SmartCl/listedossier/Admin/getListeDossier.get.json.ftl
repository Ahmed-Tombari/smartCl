{
"data":[
<#if response?size !=0>
    <#list response as res>
        {
        "numeroDossier":"${res.numeroDossier!''}",
        "statut":"${res.statut!''}",
        "dateCreation":"${res.dateCreation!''}",
        "nom":"${res.nom!''}",
        "prenom":"${res.prenom!''}",
        "userId":"${res.userId!''}",
        "compagnie":"${res.compagnie!''}"
        }
        <#if res_has_next>,</#if>
    </#list>
</#if>
],
"count":"${count!''}"
}