(this["webpackJsonpcovid-19-malaysia"]=this["webpackJsonpcovid-19-malaysia"]||[]).push([[0],{47:function(e,n,t){e.exports=t(92)},74:function(e,n,t){},92:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(14),c=t.n(i),o=t(23),l=t.n(o),s=t(39),m=t(5),d=t(21),u=t(13),f=t(3),b=t(4),g=t(11),h=t(12);function p(){var e=Object(f.a)(["\n  animation: "," 1.5s;\n"]);return p=function(){return e},e}function v(){var e=Object(f.a)(["\n  animation: "," 2s linear infinite;\n"]);return v=function(){return e},e}function E(){var e=Object(f.a)(["\n  animation: "," 2s linear infinite;\n"]);return E=function(){return e},e}function y(){var e=Object(f.a)(["\n  animation: "," 1.5s;\n"]);return y=function(){return e},e}function x(){var e=Object(f.a)(["\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }"]);return x=function(){return e},e}function j(){var e=Object(f.a)(["\n 0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  14% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  28% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  42% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  70% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }"]);return j=function(){return e},e}function k(){var e=Object(f.a)(["\n0% {\n  transform: scale(1.3);\n}\n\n70% {\n  transform: scale(1);\n}\n\n100% {\n  transform: scale(1.3);\n}\n"]);return k=function(){return e},e}function O(){var e=Object(f.a)(["\nfrom {\n  transform: rotate(0deg);\n}\nto {\n  transform: rotate(360deg);\n}\n"]);return O=function(){return e},e}var w=Object(b.c)(O()),D=Object(b.c)(k()),S=Object(b.c)(j()),N=Object(b.c)(x()),C=Object(b.a)(y(),N),z=(Object(b.a)(E(),w),Object(b.a)(v(),D)),M=Object(b.a)(p(),S);function T(){var e=Object(f.a)(["\n  color: var(--primary-color);\n  display: inline-block;\n  @media (max-width: 420px) {\n    font-size: 1.3rem;\n  }\n"]);return T=function(){return e},e}function F(){var e=Object(f.a)(["\n  text-align: center;\n  padding: 0.7rem 0rem;\n  border-radius: 10px;\n  margin: auto;\n  background: var(--white-color);\n  box-shadow: var(--box);\n  position: relative;\n\n  #today-date-theme-icon {\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    margin-right: 0.7rem;\n    text-align: right;\n    font-size: 1.4rem;\n    transition: 1.5s;\n    ","\n    span svg {\n      :hover {\n        cursor: pointer;\n        ","\n      }\n    }\n  }\n"]);return F=function(){return e},e}var J=b.b.div(F(),C,M),I=b.b.h2(T()),G=function(e){var n=e.darkModeFunc,t=e.darkMode,a=new Date,i="",c="";switch(a.getMonth()){case 0:i="Jan";break;case 1:i="Feb";break;case 2:i="Mar";break;case 3:i="Apr";break;case 4:i="May";break;case 5:i="Jun";break;case 6:i="Jul";break;case 7:i="Aug";break;case 8:i="Sep";break;case 9:i="Oct";break;case 10:i="Nov";break;default:i="Dec"}return c=1===a.getDate()?"st":2===a.getDate()?"nd":3===a.getDate()?"rd":"th",r.a.createElement(J,{id:"today-date"},r.a.createElement(I,null,"".concat(a.getDate()).concat(c," ").concat(i," ").concat(a.getFullYear())),r.a.createElement("div",{id:"today-date-theme-icon"},r.a.createElement("span",{onClick:function(){return n(t)}},t?r.a.createElement(g.a,{icon:h.b}):r.a.createElement(g.a,{icon:h.c}))))};function R(){var e=Object(f.a)(["\n  display: block;\n  position: relative;\n  margin: auto;\n  width: 80px;\n  height: 40px;\n  div {\n    position: absolute;\n    top: 15px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n\n    &:nth-child(1) {\n      left: 8px;\n      animation: lds-ellipsis1 0.6s infinite;\n    }\n    &:nth-child(2) {\n      left: 8px;\n      animation: lds-ellipsis2 0.6s infinite;\n    }\n    &:nth-child(3) {\n      left: 32px;\n      animation: lds-ellipsis2 0.6s infinite;\n    }\n    &:nth-child(4) {\n      left: 56px;\n      animation: lds-ellipsis3 0.6s infinite;\n    }\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n"]);return R=function(){return e},e}var A=function(e){return r.a.createElement("p",{className:e.loading?"loading-para":e.className},e.children)},P=function(e){return r.a.createElement("h2",{className:e.loading?"loading-header":e.className},e.children)},Y=function(){return r.a.createElement(B,{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},B=b.b.div(R());function H(){var e=Object(f.a)(["\n  #country-name {\n    font-size: 1.4rem;\n    text-align: center;\n    margin: 0.5rem 0;\n    position: relative;\n    span {\n      img {\n        width: 2.2rem;\n        margin: auto 0.4rem;\n        cursor: pointer;\n      }\n      i {\n        font-size: 1.5rem;\n        position: absolute;\n        right: 0;\n        margin-top: 3px;\n        margin-right: 0.9rem;\n        text-align: right;\n      }\n    }\n  }\n  #card-container {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 10px;\n    .card {\n      background: var(--white-color);\n      display: flex;\n      height: 10rem;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      text-align: center;\n      border-radius: 6px;\n      box-shadow: var(--box);\n      padding: 0 0.4rem;\n      h2 {\n        color: var(--primary-color);\n        font-size: 2.2rem;\n        margin: 0rem 0;\n      }\n      p {\n        font-size: 1.2rem;\n        color: #606470;\n      }\n      .text-green {\n        color: #639a67;\n      }\n      .text-red {\n        color: #f73859;\n      }\n    }\n  }\n  @media (max-width: 680px) {\n    #card-container {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n  @media (max-width: 588px) {\n    #card-container {\n      grid-template-columns: repeat(2, 1fr);\n\n      .card {\n        height: 8rem;\n        h2 {\n          font-size: 2rem;\n          margin: 0rem 0;\n        }\n        p {\n          font-size: 1rem;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 420px) {\n    #country-name {\n      font-size: 1.1rem;\n    }\n    #card-container {\n      .card {\n        .loading-header {\n          width: 6rem;\n          height: 4rem;\n        }\n\n        height: 5rem;\n        h2 {\n          font-size: 1.3rem;\n        }\n      }\n    }\n  }\n"]);return H=function(){return e},e}var _=b.b.div(H()),U=function(e){var n=e.data,t=e.flag,a=e.history,i=e.loading,c=e.countryChange,o=(n.deaths/n.cases*100).toFixed(2),l=(n.recovered/n.cases*100).toFixed(2);return r.a.createElement(_,null,i?r.a.createElement(Y,null):r.a.createElement("h2",{id:"country-name"},n.country,r.a.createElement("span",null,r.a.createElement("img",{src:t,alt:n.country,className:"img-flag",onClick:c}))),r.a.createElement("div",{id:"card-container"},r.a.createElement("div",{className:"card"},r.a.createElement(P,{loading:i},n.cases),r.a.createElement(A,{loading:i},"Confirmed Cases")),r.a.createElement("div",{className:"card"},r.a.createElement(P,{loading:i},0===n.todayCases?function(e){if(!i){var n=Object.values(a[e-1]),t=Object.values(a[e-2]);return n[1]-t[1]}}(a.length):n.todayCases),r.a.createElement(A,{loading:i},"New Cases")),r.a.createElement("div",{className:"card"},r.a.createElement(P,{loading:i},n.active),r.a.createElement(A,{loading:i},"Active cases")),r.a.createElement("div",{className:"card"},r.a.createElement(P,{loading:i},n.recovered),r.a.createElement(A,{loading:i,className:"text-green"},"Recovered")),r.a.createElement("div",{className:"card"},r.a.createElement(P,{loading:i},0===n.critical?n.tests:n.critical),r.a.createElement(A,{loading:i},0===n.critical?"Tests Conducted":"Criticals")),r.a.createElement("div",{className:"card"},r.a.createElement(P,{loading:i},n.deaths),r.a.createElement(A,{loading:i,className:"text-red"},"Total Deaths")),r.a.createElement("div",{className:"card"},r.a.createElement(P,{loading:i},o,"%"),r.a.createElement(A,{loading:i},"Fatality Rate")),r.a.createElement("div",{className:"card"},r.a.createElement(P,{loading:i},l,"%"),r.a.createElement(A,{loading:i},"Recovery Rate"))))},q=t(43);function K(){var e=Object(f.a)(["\n  border-radius: 10px;\n  box-shadow: var(--box);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.2rem;\n\n  h2 {\n    background: var(--darkish-color);\n    color: var(--white-color);\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n  }\n\n  div {\n    padding: 10px 0;\n    background: var(--white-color);\n    max-height: 20rem;\n    text-align: center;\n    li {\n      font-size: 1.2rem;\n      list-style-type: none;\n\n      span {\n        color: var(--danger-color);\n        margin-left: 10px;\n      }\n    }\n  }\n  @media (max-width: 480px) {\n    margin-bottom: 1.2rem;\n    h2 {\n      font-size: 1rem;\n    }\n    div li {\n      font-size: 1rem;\n    }\n  }\n"]);return K=function(){return e},e}var L=b.b.div(K()),Q=function(e){var n=e.history,t=e.loading,a=e.title;return r.a.createElement(L,{id:"timeline"},r.a.createElement("h2",null,a),r.a.createElement("div",null,!t&&r.a.createElement(q.Scrollbars,{style:{height:300},autoHide:!0},n.map((function(e,t){return r.a.createElement("li",{key:e[0]},(a=e[0],new Date(a).toUTCString()).substr(5,12)," : ",r.a.createElement("strong",null,e[1]),r.a.createElement("span",null,function(e,n,t){return 0===t||e[1]-n[1]===0?"":"+".concat(e[1]-n[1])}(e,n[t-1],t)));var a})).reverse())))};function V(){var e=Object(f.a)(["\n      background: var(--primary-color);\n      color: var(--white-color);\n\n      svg {\n        animation-play-state: paused;\n      }\n      &:hover {\n        svg {\n          animation-play-state: running;\n        }\n      }\n    "]);return V=function(){return e},e}function W(){var e=Object(f.a)(["\n  text-align: center;\n  display: inline-block;\n  text-decoration: none;\n  color: var(--primary-color);\n  font-size: 1.2rem;\n  font-weight: bold;\n  border-radius: 10px;\n  padding: 0.4rem 2rem;\n  background: var(--accent-color);\n  box-shadow: var(--box);\n\n  @media (max-width: 480px) {\n    font-size: 0.8rem;\n    padding: 0.3rem 1.8rem;\n    border-radius: 8px;\n  }\n\n  ","\n"]);return W=function(){return e},e}var X=Object(b.b)(d.b)(W(),(function(e){return e.black&&Object(b.a)(V())})),Z=function(e){return r.a.createElement(X,e,e.children)};function $(){var e=Object(f.a)(["\n  padding: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n"]);return $=function(){return e},e}var ee=b.b.div($()),ne=function(e){var n=e.data,t=e.flag,a=e.history,i=e.loading,c=e.historyDeaths,o=e.showDeathsTimeline,l=e.setDeathTimeline,s=e.darkMode,m=e.darkModeFunc,d=e.countryChange;return r.a.createElement("div",{id:"total-cases"},r.a.createElement(G,{darkMode:s,darkModeFunc:m}),r.a.createElement(U,{data:n,flag:t,history:a,loading:i,countryChange:d}),r.a.createElement(ee,{id:"btn-container"},r.a.createElement(Z,{onClick:function(){return l(o)},black:!0},o?"Confirmed":"Deaths"," ",r.a.createElement(g.a,{icon:h.d})),r.a.createElement(Z,{to:"/graph"},"Graphs ",r.a.createElement(g.a,{icon:h.a}))),!o&&r.a.createElement(Q,{history:a,title:"Timeline: Confirmed Cases",loading:i}),o&&r.a.createElement(Q,{title:"Timeline: Deaths",history:c,loading:i}))},te=(t(74),t(45));function ae(){var e=Object(f.a)(["\n  background-color: var(--darkish-color);\n  color: var(--primary-color);\n"]);return ae=function(){return e},e}function re(){var e=Object(f.a)(["\n  max-width: 1100px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.7rem 2rem;\n  z-index: 1;\n  width: 100%;\n  opacity: 0.9;\n  margin-bottom: 1.5rem;\n\n  ul {\n    list-style: none;\n    display: flex;\n  }\n\n  a {\n    color: var(--white-color);\n    background-color: var(--darkish-color);\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n    margin: 0 0.25rem;\n    text-decoration: none;\n\n    &:hover {\n      background: var(--white-color);\n      color: var(--primary-color);\n      transition: 1s;\n    }\n  }\n\n  .title-wrapper {\n    background: var(--white-color);\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n\n    h2 {\n      font-size: 1.2rem;\n    }\n\n    svg {\n      transform: scale(1);\n      ","\n\n      &:hover {\n        animation-play-state: paused;\n      }\n    }\n  }\n\n  @media (max-width: 480px) {\n    flex-direction: column;\n    .title-wrapper {\n      border-radius: 10px;\n      margin-bottom: 1rem;\n      h2 {\n        font-size: 0.8rem;\n      }\n    }\n    a {\n      margin: 2rem 0.25rem;\n    }\n  }\n"]);return re=function(){return e},e}var ie=function(e){e.icon;var n=e.title;return r.a.createElement(oe,{id:"navbar"},r.a.createElement(ce,null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("h2",null,r.a.createElement(g.a,{icon:h.e})," ",n)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/firdausthedev/covid19-malaysia-tracker",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(g.a,{icon:te.a})," Check out codes")))))};ie.defaultProps={title:"Covid-19 MY Tracker",icon:"fas fa-virus"};var ce=b.b.nav(re(),z),oe=b.b.div(ae()),le=ie,se=t(17);function me(){var e=Object(f.a)(["\n  margin-bottom: 1.5rem;\n  #title {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 0 0 0.8rem 0;\n\n    div {\n      display: inline-block;\n      margin: auto 0;\n    }\n  }\n\n  h2 {\n    text-align: center;\n    padding: 0.8rem 0;\n  }\n\n  @media (max-width: 480px) {\n    #title h2 {\n      font-size: 1rem;\n    }\n\n    #title div a {\n      font-size: 0.8rem;\n      padding: 0.3rem 1.8rem;\n      border-radius: 8px;\n    }\n\n    h2 {\n      font-size: 1rem;\n    }\n  }\n"]);return me=function(){return e},e}var de=b.b.div(me()),ue=function(e){var n=e.dataGraph,t=e.historyDeaths,i=e.darkMode,c=Object(a.useState)([]),o=Object(m.a)(c,2),l=o[0],s=o[1],d=Object(a.useState)([]),u=Object(m.a)(d,2),f=u[0],b=u[1],g=Object(a.useState)([]),h=Object(m.a)(g,2),p=h[0],v=h[1],E=Object(a.useState)([]),y=Object(m.a)(E,2),x=y[0],j=y[1],k=Object(a.useState)({}),O=Object(m.a)(k,2),w=O[0],D=O[1],S=Object(a.useState)({}),N=Object(m.a)(S,2),C=N[0],z=N[1],M=Object(a.useState)({}),T=Object(m.a)(M,2),F=T[0],J=T[1],I=Object(a.useState)({}),G=Object(m.a)(I,2),R=G[0],A=G[1];Object(a.useEffect)((function(){Y(n,t)}),[]);var P=function(e,n,t){return 0===t||e[1]-n[1]===0?0:e[1]-n[1]},Y=function(e,n){var t=e.map((function(e){return e[1]})),a=e.map((function(n,t){return P(n,e[t-1],t)})),r=n.map((function(e){return e[1]})),c=n.map((function(e,t){return P(e,n[t-1],t)}));b(a),s(t),v(r),j(c),D({theme:i?"dark":"light",type:"line",series:[{values:t}]}),z({theme:i?"dark":"light",type:"bar",series:[{values:a}]}),J({theme:i?"dark":"light",type:"bar",series:[{values:r}]}),A({theme:i?"dark":"light",type:"bar",series:[{values:c}]})};return r.a.createElement(de,{id:"graph"},r.a.createElement("div",{id:"title"},r.a.createElement("div",null,r.a.createElement(Z,{to:"/"},"Back")),r.a.createElement("h2",null,"Total Confirmed Cases by Day")),l.length>0?r.a.createElement(se.a,{data:w}):"",r.a.createElement("h2",null,"Total New Cases by Day"),f.length>0?r.a.createElement(se.a,{data:C}):"",r.a.createElement("h2",null,"Total Deaths by Day"),p.length>0?r.a.createElement(se.a,{data:F}):"",r.a.createElement("h2",null,"Total New Deaths by Day"),x.length>0?r.a.createElement(se.a,{data:R}):"")},fe=t(27),be=t.n(fe),ge=t(28);t(91);var he=function(){var e=Object(a.useState)({}),n=Object(m.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)(""),o=Object(m.a)(c,2),f=o[0],b=o[1],g=Object(a.useState)(!0),h=Object(m.a)(g,2),p=h[0],v=h[1],E=Object(a.useState)([]),y=Object(m.a)(E,2),x=y[0],j=y[1],k=Object(a.useState)([]),O=Object(m.a)(k,2),w=O[0],D=O[1],S=Object(a.useState)(!1),N=Object(m.a)(S,2),C=N[0],z=N[1],M=Object(a.useState)(0),T=Object(m.a)(M,2),F=T[0],J=T[1],I=["MY","ID","SG","TH"],G=Object(a.useState)(I[F]),R=Object(m.a)(G,2),A=R[0],P=R[1],Y=Object(a.useState)(JSON.parse(localStorage.getItem("dark"))||!1),B=Object(m.a)(Y,2),H=B[0],_=B[1];Object(a.useEffect)((function(){K(A),U()}),[H]);var U=function(){localStorage.setItem("dark",JSON.stringify(H))},q=function(){v(!0),F<3?(J(F+=1),P(I[F]),K(I[F])):(J(0),P(I[0]),K(I[0]))},K=function(){var e=Object(s.a)(l.a.mark((function e(n){var t,a,r,c,o,s,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([be.a.get("https://corona.lmao.ninja/v2/countries/"+n),be.a.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code="+n+"&timelines=true")]);case 3:t=e.sent,a=Object(m.a)(t,2),r=a[0],c=a[1],o=r.data.countryInfo.flag,b(o),i(r.data),s=c.data.locations[0].timelines.confirmed.timeline,d=c.data.locations[0].timelines.deaths.timeline,j(Object.entries(s)),D(Object.entries(d)),v(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0),ge.b.error("Server Error. Please come back later..");case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(n){return e.apply(this,arguments)}}(),L=function(e){z(!e)},Q=function(e){_(!e)};return r.a.createElement(d.a,{basename:"/covid19-malaysia-tracker"},r.a.createElement("div",{className:H?"dark-mode":"light-mode"},r.a.createElement(le,null),r.a.createElement("div",{className:"container"},r.a.createElement(ge.a,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(ne,Object.assign({},e,{data:t,flag:f,loading:p,history:x,historyDeaths:w,showDeathsTimeline:C,setDeathTimeline:L,darkModeFunc:Q,darkMode:H,countryChange:q}))}}),r.a.createElement(u.a,{exact:!0,path:"/graph",render:function(e){return r.a.createElement(ue,Object.assign({},e,{dataGraph:x,historyDeaths:w,darkMode:H}))}}),r.a.createElement(u.a,{render:function(e){return r.a.createElement(ne,Object.assign({},e,{data:t,flag:f,loading:p,history:x,historyDeaths:w,showDeathsTimeline:C,setDeathTimeline:L,darkModeFunc:Q,darkMode:H,countryChange:q}))}})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.790ef179.chunk.js.map