var j=Object.defineProperty;var D=(m,t,e)=>t in m?j(m,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):m[t]=e;var g=(m,t,e)=>(D(m,typeof t!="symbol"?t+"":t,e),e);import{d as k,c as F,t as u,v as _,L as p,M as L,y as v,N as E,C as U,D as W,x as n,_ as z,r as b,O as H,P as G,Q as R,R as S,z as B,S as A,T as y,U as V}from"./entry.SaGwbJBS.js";const N=m=>(U("data-v-7a7ab6d5"),m=m(),W(),m),O={key:0},P=N(()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-emoji-expressionless-fill",viewBox:"0 0 16 16"},[n("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm5 0h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm-5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"})],-1)),Q=[P],q={key:1},x={key:0},J={key:2,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-flag-fill flagged",viewBox:"0 0 16 16"},K=N(()=>n("path",{d:"M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"},null,-1)),X=[K],Y={key:3,class:"unrevealed"},Z=k({__name:"GameCell",props:{cell:{},x:{},y:{},bombed:{type:Boolean},boardState:{}},setup(m){const t=m,e=F(()=>t.cell.minesAround(t.boardState,t.x,t.y)),s=F(()=>{switch(e.value){case 1:return"cyan";case 2:return"green";default:return"red"}});return(a,c)=>(u(),_("div",{class:E(a.cell.isFlagged&&!a.cell.isRevealed()&&!a.bombed?"flagged":"")},[a.bombed&&a.cell.hasMine?(u(),_("div",O,Q)):a.cell.isRevealed()?(u(),_("div",q,[p(e)===0?(u(),_("p",x)):(u(),_("p",{key:1,style:L(`color: ${p(s)}`)},v(p(e)),5))])):a.cell.isFlagged?(u(),_("svg",J,X)):(u(),_("div",Y))],2))}}),ee=z(Z,[["__scopeId","data-v-7a7ab6d5"]]),$=class ${constructor(t,e=!1,s=!1){g(this,"isRevealed",()=>this.revealed);g(this,"reveal",()=>this.revealed=!0);g(this,"setFlag",(t=!0)=>this.isFlagged=t);g(this,"swapFlag",()=>this.setFlag(!this.isFlagged));g(this,"minesAround",(t,e,s)=>{let a=0;const c=e>0,h=e+1<t.length,l=s>0,w=s+1<t[e].length;return c&&t[e-1][s].hasMine&&a++,h&&t[e+1][s].hasMine&&a++,l&&t[e][s-1].hasMine&&a++,w&&t[e][s+1].hasMine&&a++,c&&l&&t[e-1][s-1].hasMine&&a++,c&&w&&t[e-1][s+1].hasMine&&a++,h&&l&&t[e+1][s-1].hasMine&&a++,h&&w&&t[e+1][s+1].hasMine&&a++,a});this.hasMine=t,this.isFlagged=e,this.revealed=s}};g($,"CreateMine",()=>new $(!0)),g($,"CreateEmpty",()=>new $(!1));let M=$;class te{constructor(t,e,s=Math.ceil(10*(e*t)/100)){g(this,"board");g(this,"getBoard",()=>this.board);this.width=t,this.height=e,this.mines=s,this.board=[];for(let c=0;c<t;c++){const h=[];for(let l=0;l<e;l++)h.push(M.CreateEmpty());this.board.push(h)}const a=[];do{const c=Math.floor(Math.random()*t),h=Math.floor(Math.random()*e);a.some(([l,w])=>l===c&&w===h)||(a.push([c,h]),this.board[c][h]=M.CreateMine())}while(a.length<s)}}class I{constructor(t,e){g(this,"board");g(this,"getBoard",()=>this.board);this.board=new te(t,e)}}const se={class:"flex justify-center content-center flex-col gap-4"},ae={key:0},oe={class:"text-center"},ne={class:"flex justify-center content-center"},le={class:"map"},ie=["onClick","onAuxclick"],ce={key:1,class:"flex justify-center content-center"},re=k({__name:"Game",props:{game:{}},setup(m){const t=m,e=b(!1),s=b(t.game.getBoard().getBoard()),a=H(()=>s.value.some(r=>r.some(o=>!o.hasMine&&!o.isRevealed()))),c=(r,o)=>{if(e.value||!a)return;const i=s.value;s.value=[...l(i,r,o)]},h=(r,o)=>{if(e.value||!a)return;const i=s.value,f=i[r][o];f.isRevealed()||(f.swapFlag(),i[r][o]=f,s.value=[...i])},l=(r,o,i)=>{if(o<0||i<0||o>=r.length||i>=r[o].length||r[o][i].isRevealed())return r;const f=r[o][i];if(f.hasMine)return e.value=!0,r;if(f.reveal(),f.minesAround(r,o,i)===0){let d=[...r];d=l(d,o-1,i+1),d=l(d,o+1,i+1),d=l(d,o-1,i-1),d=l(d,o+1,i-1),d=l(d,o,i+1),d=l(d,o,i-1),d=l(d,o+1,i),d=l(d,o-1,i)}return r[o][i]=f,r},w=()=>{e.value=!1,s.value=new I(t.game.getBoard().getBoard().length,t.game.getBoard().getBoard()[0].length).getBoard().getBoard()};return(r,o)=>{const i=ee;return u(),_("div",se,[p(a)()?G("",!0):(u(),_("div",ae,[n("h1",oe,v(r.$t("game.endgame.Win")),1)])),n("div",ne,[n("table",le,[(u(!0),_(R,null,S(p(s),(f,d)=>(u(),_("tr",null,[(u(!0),_(R,null,S(f,(T,C)=>(u(),_("td",{onClick:()=>c(d,C),onAuxclick:()=>h(d,C)},[B(i,{x:d,y:C,cell:T,boardState:p(s),bombed:p(e)},null,8,["x","y","cell","boardState","bombed"])],40,ie))),256))]))),256))])]),p(e)||!p(a)()?(u(),_("div",ce,[n("button",{onClick:w,class:"btn btn-primary"},v(r.$t("game.endgame.Restart")),1)])):G("",!0)])}}}),de=z(re,[["__scopeId","data-v-d6d3d16d"]]),he={id:"new_game_modal",class:"modal modal-bottom sm:modal-middle"},me={method:"dialog",class:"modal-box flex flex-col gap-4"},ue={class:"font-bold text-lg"},_e={class:"flex flex-col gap-4"},pe={class:"flex gap-4"},ge=["placeholder"],fe=["placeholder"],ve={class:"w-full"},we=n("form",{method:"dialog",class:"modal-backdrop"},[n("button",null,"close")],-1),$e=k({__name:"NewGameModal",props:{setGame:{type:Function}},setup(m){const t=m,e=b(10),s=b(10),a=()=>{t.setGame(new I(e.value,s.value))};return(c,h)=>(u(),_("dialog",he,[n("div",me,[n("h3",ue,v(c.$t("main-page.new-game-modal.Title")),1),n("div",null,[n("div",_e,[n("div",pe,[A(n("input",{type:"number","onUpdate:modelValue":h[0]||(h[0]=l=>V(s)?s.value=l:null),placeholder:c.$t("main-page.new-game-modal.form.Height"),class:"input input-bordered w-full max-w-xs"},null,8,ge),[[y,p(s)]]),A(n("input",{type:"number","onUpdate:modelValue":h[1]||(h[1]=l=>V(e)?e.value=l:null),placeholder:c.$t("main-page.new-game-modal.form.Width"),class:"input input-bordered w-full max-w-xs"},null,8,fe),[[y,p(e)]])]),n("div",ve,[n("button",{onClick:a,class:"btn btn-primary w-full"},v(c.$t("main-page.new-game-modal.form.Start")),1)])])])]),we]))}}),be={key:0,class:"h-full"},Me={key:1,class:"h-full"},ke={class:"hero bg-base-200 h-full"},Ce={class:"hero-content text-center"},Be={class:"max-w-md"},Fe={class:"text-5xl font-bold"},Ge={class:"py-6"},Re={onclick:"new_game_modal.showModal()",class:"btn btn-primary"},ye=k({__name:"index",setup(m){const t=b();return(e,s)=>{const a=de,c=$e;return p(t)?(u(),_("div",be,[B(a,{game:p(t)},null,8,["game"])])):(u(),_("div",Me,[B(c,{setGame:h=>t.value=h},null,8,["setGame"]),n("div",ke,[n("div",Ce,[n("div",Be,[n("h1",Fe,v(e.$t("main-page.intro-hero.Title")),1),n("p",Ge,v(e.$t("main-page.intro-hero.Description")),1),n("button",Re,v(e.$t("main-page.intro-hero.New-game")),1)])])])]))}}});export{ye as default};