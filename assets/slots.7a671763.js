import{_ as p}from"./index.e5437f2a.js";import{H as t,o as s,c as m,d as _,r as k,B as d,a as i,F as M,ap as V,b as y,M as h,R as B,K as b,Q as C}from"./modules-vue.3dfb25a8.js";const S={};function z(e,o){const r=t("pro-menu");return s(),m(r,{class:"docs-menu"})}var w=p(S,[["render",z]]);const U=_({setup(){return{mode:k("horizontal"),data:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}]}}});function g(e,o,r,a,c,f){const u=t("pro-radio-button"),l=t("pro-menu");return s(),d(M,null,[i(u,{modelValue:e.mode,"onUpdate:modelValue":o[0]||(o[0]=n=>e.mode=n),data:e.data},null,8,["modelValue","data"]),i(l,{mode:e.mode,class:"docs-menu"},null,8,["mode"])],64)}var E=p(U,[["render",g]]);const x=_({setup(){const e=V();return{routes:y(()=>{var a;return((a=e.options.routes.find(c=>c.path==="/en-US/components/"))==null?void 0:a.children)||[]})}}});function F(e,o,r,a,c,f){const u=t("pro-menu");return s(),m(u,{routes:e.routes,class:"docs-menu"},null,8,["routes"])}var I=p(x,[["render",F]]);const R=_({setup(){return{routes:[{path:"/en-US/components/menu",meta:{title:"FontIcon",icon:"el-icon-potato-strips"}},{path:"/en-US/components/menu",meta:{title:"Development",icon:"el-icon-cpu"}}]}}}),j={key:1};function D(e,o,r,a,c,f){const u=t("pro-link"),l=t("pro-menu");return s(),m(l,{routes:e.routes,class:"docs-menu"},{default:h(n=>[i(u,{to:n.path},{default:h(()=>{var $,v;return[(($=n.meta)==null?void 0:$.icon)?(s(),d("i",{key:0,class:B(n.meta.icon)},null,2)):b("",!0),((v=n.meta)==null?void 0:v.title)?(s(),d("span",j,C(n.meta.title),1)):b("",!0)]}),_:2},1032,["to"])]),_:1},8,["routes"])}var K=p(R,[["render",D]]);export{w as M,E as a,I as b,K as c};
