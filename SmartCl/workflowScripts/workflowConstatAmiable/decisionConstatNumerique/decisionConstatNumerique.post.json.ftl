{"data":[
<#if aspects??>
    <#list aspects as aspect>
    {
       "${aspect.name}":[
       <#list aspect.data as prop>
       
        "${prop.key!''}": "${prop.value!''}"
        
       <#if prop_has_next>,</#if>
       </#list>
       ]
    }
    <#if aspect_has_next>,</#if>
    </#list>
</#if>
<#if error??>
"error":"${error}"
</#if>
]}