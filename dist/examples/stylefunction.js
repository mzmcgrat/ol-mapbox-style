"use strict";(self.webpackChunkol_mapbox_style=self.webpackChunkol_mapbox_style||[]).push([[890],{7592:(e,t,s)=>{s(9789);var a=s(9466),n=s(1202),o=s(6333),r=s(3107),c=s(9090),l=s(2660);const u=new o.Z({declutter:!0,source:new r.Z({format:new a.Z,url:"data/states.geojson"})}),w=new n.Z({target:"map",view:new c.ZP({center:[-13603186.115192635,6785744.563386],zoom:2})});fetch("data/states.json").then((e=>e.json())).then((e=>{(0,l.uX)(u,e,"states"),-1===w.getLayers().getArray().indexOf(u)&&w.addLayer(u)}))}},e=>{e(e.s=7592)}]);
//# sourceMappingURL=stylefunction.js.map