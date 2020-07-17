(this["webpackJsonphire-me-challenge"]=this["webpackJsonphire-me-challenge"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=(a(92),a(93),a(79)),i=a(8),u=a(143),s=a(152),m=a(153),p=a(42),f=a(151),d=a(49),E=a.n(d),h=a(147),y=a(38),g=a(23),b=a(41),k=a(3),v=a(159),O=a(145),w=a(150),L=a(160),x=a(148),j=a(149),I=a(74),S=a.n(I),T=a(75),C=a.n(T),N=a(48),P=a.n(N),A=Object(u.a)({list:{width:250},fullList:{width:"auto"},link:{color:"#222",textDecoration:"none"}}),_=function(){var e=A(),t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(b.a)(t,2),n=a[0],c=a[1],o=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&c(Object(g.a)(Object(g.a)({},n),{},Object(y.a)({},e,t)))}},l=function(e){};return r.a.createElement("div",null,["left"].map((function(t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(f.a,{onClick:o(t,!0)},r.a.createElement(C.a,{style:{fill:"white"}})),r.a.createElement(v.a,{anchor:t,open:n[t],onClose:o(t,!1)},function(t){return r.a.createElement("div",{className:Object(k.a)(e.list,Object(y.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:o(t,!1),onKeyDown:o(t,!1)},r.a.createElement(O.a,null,r.a.createElement(h.a,{className:e.link,href:"/",onClick:l},r.a.createElement(L.a,{button:!0,key:"home"},r.a.createElement(x.a,null,r.a.createElement(S.a,null)),r.a.createElement(j.a,{primary:"Home"}))),r.a.createElement(h.a,{className:e.link,href:"/types",onClick:l},r.a.createElement(L.a,{button:!0,key:"types"},r.a.createElement(x.a,null,r.a.createElement(P.a,null)),r.a.createElement(j.a,{primary:"Pokemon Types"})))),r.a.createElement(w.a,null),r.a.createElement(O.a,null,r.a.createElement(h.a,{className:e.link,href:"https://github.com/aelhani",onClick:l,target:"_blank"},r.a.createElement(L.a,{button:!0,key:"github"},r.a.createElement(x.a,null,r.a.createElement(E.a,null)),r.a.createElement(j.a,{primary:"Github"})))))}(t)))})))},R=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},link:{color:"#222",textDecoration:"none"}}})),D=function(e){var t=R();return r.a.createElement("div",{className:t.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(m.a,null,r.a.createElement(_,null),r.a.createElement(p.a,{variant:"h6",className:t.title},"HireMe Coding Challenge"),r.a.createElement(h.a,{className:t.link,href:"https://github.com/aelhani",onClick:function(e){},target:"_blank"},r.a.createElement(f.a,{color:"inherit"},r.a.createElement(E.a,{style:{fill:"white"}}))))))},U=Object(u.a)((function(e){return{root:{marginTop:20,flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"}}}));function B(){var e=U();return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(m.a,null,r.a.createElement(p.a,{variant:"caption",className:e.title},"2020 ",r.a.createElement("span",null,"\xa9")," Abderrazak Elhani"))))}var F=a(24),K=a(12),G=a.n(K),W=a(17),Y="LOAD_POKELIST_SUCCESS",M="LOAD_POKELIST_FAILURE",z="LOAD_POKEITEM_SUCCESS",H="LOAD_POKEITEM_FAILURE",J="LOAD_TYPELIST_SUCCESS",$="LOAD_TYPELIST_FAILURE",q="LOAD_POKELISTBYTYPE_SUCCESS",Q="LOAD_POKELISTBYTYPE_FAILURE",V=a(77),X=a.n(V).a.create({baseURL:"https://pokeapi.co/api/v2/",timeout:2e4,headers:{Accept:"application/json","Content-Type":"application/json"}});function Z(e,t){return ee.apply(this,arguments)}function ee(){return(ee=Object(W.a)(G.a.mark((function e(t,a){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/pokemon?limit=".concat(t,"&offset=").concat(a)).then((function(e){return e})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(W.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/pokemon/".concat(t)).then((function(e){return e})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return re.apply(this,arguments)}function re(){return(re=Object(W.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/type").then((function(e){return e})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(W.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/type/".concat(t)).then((function(e){return e})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=Object(u.a)({link:{color:"#222",textDecoration:"none"}}),ie=function(e){var t=e.list,a=e.byType,n=e.page,c=le();function o(e){var t=e.length,a=e.substring(0,t-1),n=a.lastIndexOf("/");return a.substring(n+1)}return r.a.createElement(O.a,{component:"nav"},void 0!==t&&function(){if(a){var e=[];return t.forEach((function(t,a){a>=20*n&&a<20*(n+1)&&e.push(t.pokemon)})),e}return t.results}().map((function(e,t){return r.a.createElement(r.a.Fragment,{key:"".concat(t,"-").concat(e.name)},r.a.createElement(w.a,null),r.a.createElement(h.a,{href:"/pokemon/".concat(o(e.url)),className:c.link},r.a.createElement(L.a,{button:!0},r.a.createElement(x.a,null,r.a.createElement(P.a,null)),r.a.createElement(j.a,{primary:e.name}))))})))},ue=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,marginTop:20,marginButtom:20,margin:"auto",backgroundColor:e.palette.background.paper},controls:{width:"100%",maxWidth:280,margin:"auto",display:"flex",flexDirection:"row"},page:{flex:1,textAlign:"center"}}})),se=Object(F.b)((function(e){return{pokeList:e.pokeListReducer.data,message:e.pokeListReducer.message}}),{loadPokeList:function(e,t){return function(){var a=Object(W.a)(G.a.mark((function a(n){var r;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Z(e,20*t);case 2:200===(r=a.sent).status?n({type:Y,payload:r.data}):n({type:M,payload:r});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},loadPokeListByType:function(e){return function(){var t=Object(W.a)(G.a.mark((function t(a){var n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce(e);case 2:200===(n=t.sent).status?a({type:q,payload:n.data}):a({type:Q,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=ue();function a(){var e=window.location.href;return new URL(e).searchParams.get("type")}var c=Object(n.useState)(0),o=Object(b.a)(c,2),l=o[0],i=o[1],u=Object(n.useState)(!1),s=Object(b.a)(u,2),m=s[0],d=s[1];Object(n.useEffect)((function(){null!==a()&&parseInt(a())>0?(e.loadPokeListByType(a()),d(!0)):(e.loadPokeList(20,l),d(!1))}),[l]);var E=function(e){l+e>=0&&i(l+e)};return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.controls},r.a.createElement(f.a,{color:"primary",variant:"contained",disabled:0===l,onClick:function(){return E(-1)}},"<"),r.a.createElement(p.a,{variant:"h6",className:t.page},"PAGE ".concat(l+1)),r.a.createElement(f.a,{color:"primary",variant:"contained",onClick:function(){return E(1)},disabled:function(){var t=0;return null!==e.pokeList&&(t=e.pokeList.length),20*(l+1)>=t}()&&m},">")),null!==e.pokeList&&r.a.createElement(ie,{page:l,byType:m,list:e.pokeList}))})),me=a(78),pe=a.n(me),fe=Object(u.a)({link:{color:"#222",textDecoration:"none"}}),de=function(e){var t=e.list,a=fe();function n(e){var t=e.length,a=e.substring(0,t-1),n=a.lastIndexOf("/");return a.substring(n+1)}return r.a.createElement(O.a,{component:"nav"},void 0!==t&&t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:"".concat(t,"-").concat(e.name)},r.a.createElement(w.a,null),r.a.createElement(h.a,{href:"/?type=".concat(n(e.url)),className:a.link},r.a.createElement(L.a,{button:!0},r.a.createElement(x.a,null,r.a.createElement(pe.a,null)),r.a.createElement(j.a,{primary:e.name}))))})))},Ee=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,marginTop:20,marginButtom:20,margin:"auto",backgroundColor:e.palette.background.paper},title:{marginBottom:10}}})),he=Object(F.b)((function(e){return{typeList:e.typeListReducer.data,message:e.typeListReducer.message}}),{loadTypeList:function(){return function(){var e=Object(W.a)(G.a.mark((function e(t){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:200===(a=e.sent).status?t({type:J,payload:a.data}):t({type:$,payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=Ee();return Object(n.useEffect)((function(){e.loadTypeList()}),[]),r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{variant:"h6",className:t.title},"Pokemon Types:"),null!==e.typeList&&r.a.createElement(de,{list:e.typeList.results}))})),ye=a(154),ge=a(155),be=a(158),ke=a(157),ve=a(156),Oe=Object(u.a)({root:{maxWidth:345,margin:"auto",marginTop:20,marginButtom:20},media:{height:320}}),we=function(e){var t=e.name,a=e.image,n=e.abilities,c=e.types,o=Oe();function l(e){var t=e.length,a=e.substring(0,t-1),n=a.lastIndexOf("/");return a.substring(n+1)}return r.a.createElement(ye.a,{className:o.root},r.a.createElement(ge.a,null,r.a.createElement(ve.a,{className:o.media,image:a,title:"Contemplative Reptile"}),r.a.createElement(ke.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},"Abilities :"),r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},n.map((function(e){return"".concat(e.ability.name,", ")}))))),r.a.createElement(be.a,null,c.map((function(e){return r.a.createElement(h.a,{key:e.type.name,href:"/?type=".concat(l(e.type.url))},r.a.createElement(f.a,{size:"small",color:"primary"},e.type.name))}))))},Le=Object(F.b)((function(e){return{pokeItem:e.pokeItemReducer.data,message:e.pokeItemReducer.message}}),{loadPokeItem:function(e){return function(){var t=Object(W.a)(G.a.mark((function t(a){var n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(e);case 2:200===(n=t.sent).status?a({type:z,payload:n.data}):a({type:H,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return Object(n.useEffect)((function(){!function(){var t=window.location.href,a=t.lastIndexOf("/"),n=t.substring(a+1);!isNaN(n)&&n>0&&e.loadPokeItem(n)}()}),[]),r.a.createElement("div",null,null!==e.pokeItem&&r.a.createElement(we,{name:e.pokeItem.name,image:e.pokeItem.sprites.front_default,abilities:e.pokeItem.abilities,types:e.pokeItem.types}))})),xe=function(){return r.a.createElement("div",{className:"App",title:"app-container"},r.a.createElement(D,null),r.a.createElement("div",{className:"container"},r.a.createElement(l.a,null,r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(i.a,{exact:!0,path:"/types",render:function(){return r.a.createElement(he,null)}}),r.a.createElement(i.a,{path:"/pokemon",render:function(){return r.a.createElement(Le,null)}}))),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=a(80),Ie=a(29),Se={data:null,message:""},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0,a=Object(g.a)({},e);switch(t.type){case Y:return a.data=t.payload,a.message="Loading Succesful",a;case M:return a.data=null,a.message="Unknown Error",a;case q:return a.data=t.payload.pokemon,a.message="Loading Succesful",a;case Q:return a.data=null,a.message="Unknown Error",a;default:return a}},Ce={data:null,message:""},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0,a=Object(g.a)({},e);switch(t.type){case z:return a.data=t.payload,a.message="Loading Succesful",a;case H:return a.data=null,a.message="Unknown Error",a;default:return a}},Pe={data:null,message:""},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0,a=Object(g.a)({},e);switch(t.type){case J:return a.data=t.payload,a.message="Loading Succesful",a;case $:return a.data=null,a.message="Unknown Error",a;default:return a}},_e=Object(Ie.c)({pokeListReducer:Te,pokeItemReducer:Ne,typeListReducer:Ae}),Re=Object(Ie.d)(_e,Object(Ie.a)(je.a)),De=function(){return r.a.createElement(F.a,{store:Re},r.a.createElement(xe,null))};"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),o.a.render(r.a.createElement(De,null),document.getElementById("root"))},87:function(e,t,a){e.exports=a(118)},92:function(e,t,a){},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.7ae38885.chunk.js.map