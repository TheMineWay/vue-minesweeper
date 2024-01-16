import{d as i,t as r,v as l,x as e,C as u,D as w,_ as d,z as p,V as g}from"./entry.SaGwbJBS.js";const m=t=>(u("data-v-909c13a6"),t=t(),w(),t),v={class:"swap swap-rotate"},b=m(()=>e("svg",{class:"swap-on fill-current w-10 h-10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})],-1)),f=m(()=>e("svg",{class:"swap-off fill-current w-10 h-10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})],-1)),x=i({__name:"ThemeToggle",setup(t){const a=()=>localStorage.getItem("theme")??"dark",c=()=>{var o;const s=(o=document.querySelector("html"))==null?void 0:o.getAttribute("data-theme");n(s==="dark"?"light":"dark")},n=s=>{var o,_,h;(o=document.querySelector("html"))==null||o.setAttribute("data-theme",s),(h=(_=document.querySelector(":root"))==null?void 0:_.style)==null||h.setProperty("--white",s==="dark"?"white":"gray")};return n(a()),(s,o)=>(r(),l("label",v,[e("input",{type:"checkbox",onClick:c}),b,f]))}}),A=d(x,[["__scopeId","data-v-909c13a6"]]),Z={class:"navbar bg-base-100"},y=e("div",{class:"navbar-start"},[e("a",{class:"btn btn-ghost normal-case text-xl"},"Minesweeper")],-1),M={class:"navbar-end"},$=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-github",viewBox:"0 0 16 16"},[e("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})],-1),k=[$],S=i({__name:"Header",setup(t){const a=()=>window.open("https://github.com/TheMineWay/vue-minesweeper");return(c,n)=>{const s=A;return r(),l("div",Z,[y,e("div",M,[p(s),e("button",{onClick:a,class:"btn btn-ghost btn-circle"},k)])])}}}),T={},B={class:"h-screen"},C={class:"flex flex-col h-screen"},V={class:"bg-gray-300"},H={class:"flex-grow"};function I(t,a){const c=S;return r(),l("div",B,[e("div",C,[e("div",V,[p(c)]),e("div",H,[g(t.$slots,"default",{class:"h-full"})])])])}const z=d(T,[["render",I]]);export{z as default};