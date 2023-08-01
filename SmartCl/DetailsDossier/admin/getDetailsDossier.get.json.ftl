{
"imagesDegat":[
<#if imagesDegat?size !=0>
<#list imagesDegat as image>
"${image!''}"
<#if image_has_next>,</#if>
</#list>
</#if>
],
"imageConstat":"${imageConstat!''}",
"videoSinistre":"${videoSinistre!''}",
"attestationAssure":"${attestationAssure!''}",
"longitude":${longitude?c!''},
"latitude":${latitude?c!''}
}