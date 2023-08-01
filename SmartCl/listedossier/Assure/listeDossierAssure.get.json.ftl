{
"data":[
<#if response?size !=0>
    <#list response as res>
        {
        "numeroDossier":"${res.numeroDossier!''}",
        "statut":"${res.statut!''}",
        "dateCreation":"${res.dateCreation!''}"
        }
        <#if res_has_next>,</#if>
    </#list>
</#if>
],
"nombreDossier":${nombreDossier!''}
}