"use strict";(self.webpackChunkol_mapbox_style=self.webpackChunkol_mapbox_style||[]).push([[874],{8516:(e,t,l)=>{l(9789);var n=l(5955);fetch("data/geojson.json").then((function(e){return e.json()})).then((function(e){return e.layers.push({id:"state-hover",type:"fill",source:"states",paint:{"fill-color":"red","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.5,0]}}),(0,n.ZP)("map",e)})).then((function(e){var t=null;e.on("pointermove",(function(l){var s=e.getFeaturesAtPixel(l.pixel);s.length>0?(null!==t&&(0,n.LN)(e,{source:"states",id:t},null),t=s[0].getId(),(0,n.LN)(e,{source:"states",id:t},{hover:!0})):null!==t&&((0,n.LN)(e,{source:"states",id:t},null),t=null)}))}))}},e=>{e(e.s=8516)}]);
//# sourceMappingURL=geojson-featurestate.js.map