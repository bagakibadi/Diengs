!function(o){"use strict";function r(){}r.prototype.init=function(){o("#world-map-markers").vectorMap({map:"world_en",normalizeFunction:"polynomial",hoverOpacity:.7,hoverColor:!1,backgroundColor:"#transparent",color:"#f2f5f7",borderColor:"#bcbfc7",colors:{in:"#f96565",au:"#f96565",gl:"#f96565",us:"#f96565",sa:"#f96565"},borderColors:{in:"#f96565",au:"#f96565",gl:"#f96565",us:"#f96565",sa:"#f96565"}}),o("#usa").vectorMap({map:"usa_en",enableZoom:!0,showTooltip:!0,selectedColor:null,hoverColor:"#fa7777",backgroundColor:"transparent",color:"#f96565",borderColor:"#bcbfc7",colors:{ca:"#fa7777",tx:"#fa7777",mt:"#fa7777",ny:"#fa7777"},onRegionClick:function(o,r,a){o.preventDefault()}}),o("#canada").vectorMap({map:"canada_en",backgroundColor:"transparent",color:"#f96565",hoverColor:"#fa7777",borderColor:"#bcbfc7",enableZoom:!0,showTooltip:!0}),o("#france").vectorMap({map:"france_fr",backgroundColor:"transparent",color:"#f96565",borderColor:"#bcbfc7",hoverColor:"#fa7777",enableZoom:!0,showTooltip:!0}),o("#germany").vectorMap({map:"germany_en",backgroundColor:"transparent",color:"#f96565",borderColor:"#bcbfc7",hoverColor:"#fa7777",enableZoom:!0,showTooltip:!0}),o("#brazil").vectorMap({map:"brazil_br",backgroundColor:"transparent",color:"#f96565",borderColor:"#bcbfc7",hoverColor:"#fa7777",enableZoom:!0,showTooltip:!0})},o.VectorMap=new r,o.VectorMap.Constructor=r}(window.jQuery),function(){"use strict";window.jQuery.VectorMap.init()}();