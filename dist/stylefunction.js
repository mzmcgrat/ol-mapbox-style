(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{123:function(e,t,a){"use strict";a.r(t);a(56);var n=a(82),s=a(80),o=a(99),r=a(68),w=a(75),c=a(69),u=new n.a({declutter:!0,source:new s.a({format:new o.a,url:"data/states.geojson"})}),d=new r.a({target:"map",view:new w.a({center:[-13603186.115192635,6785744.563386],zoom:2})});fetch("data/states.json").then(function(e){return e.json()}).then(function(e){Object(c.a)(u,e,"states"),-1===d.getLayers().getArray().indexOf(u)&&d.addLayer(u)})}},[[123,0]]]);
//# sourceMappingURL=stylefunction.js.map