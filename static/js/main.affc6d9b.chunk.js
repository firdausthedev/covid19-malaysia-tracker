(this["webpackJsonpcovid-19-malaysia"]=this["webpackJsonpcovid-19-malaysia"]||[]).push([[0],{43:function(e,n,a){e.exports=a(86)},68:function(e,n,a){},86:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(12),c=a.n(i),l=a(20),o=a.n(l),s=a(36),m=a(3),d=a(17),u=a(11),f=a(4),h=a(5);function g(){var e=Object(f.a)(["\n  color: var(--primary-color);\n  display: inline-block;\n"]);return g=function(){return e},e}function p(){var e=Object(f.a)(["\n  text-align: center;\n  padding: 0.7rem 0rem;\n  border-radius: 10px;\n  margin: auto;\n  background: var(--white-color);\n  box-shadow: var(--box);\n  position: relative;\n  span {\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    margin-top: 3px;\n    margin-right: 0.7rem;\n    text-align: right;\n    font-size: 1.4rem;\n    transition: 1.5s;\n\n    i:hover {\n      transform: scale(1.2);\n      cursor: pointer;\n    }\n  }\n"]);return p=function(){return e},e}var b=h.a.div(p()),v=h.a.h2(g()),E=function(e){var n=e.darkModeFunc,a=e.darkMode,t=new Date,i="",c="";switch(t.getMonth()){case 0:i="Jan";break;case 1:i="Feb";break;case 2:i="Mar";break;case 3:i="Apr";break;case 4:i="May";break;case 5:i="Jun";break;case 6:i="Jul";break;case 7:i="Aug";break;case 8:i="Sep";break;case 9:i="Oct";break;case 10:i="Nov";break;default:i="Dec"}return c=1===t.getDate()?"st":2===t.getDate()?"nd":3===t.getDate()?"rd":"th",r.a.createElement(b,{id:"today-date"},r.a.createElement(v,null,"".concat(t.getDate()).concat(c," ").concat(i," ").concat(t.getFullYear())),r.a.createElement("span",{onClick:function(){return n(a)}},a?r.a.createElement("i",{className:"fas fa-moon"}):r.a.createElement("i",{className:"fas fa-sun"})))};function x(){var e=Object(f.a)(["\n  display: block;\n  position: relative;\n  margin: auto;\n  width: 80px;\n  height: 40px;\n  div {\n    position: absolute;\n    top: 15px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n\n    &:nth-child(1) {\n      left: 8px;\n      animation: lds-ellipsis1 0.6s infinite;\n    }\n    &:nth-child(2) {\n      left: 8px;\n      animation: lds-ellipsis2 0.6s infinite;\n    }\n    &:nth-child(3) {\n      left: 32px;\n      animation: lds-ellipsis2 0.6s infinite;\n    }\n    &:nth-child(4) {\n      left: 56px;\n      animation: lds-ellipsis3 0.6s infinite;\n    }\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n"]);return x=function(){return e},e}var y=function(e){return r.a.createElement("p",{className:e.loading?"loading-para":e.className},e.children)},k=function(e){return r.a.createElement("h2",{className:e.loading?"loading-header":e.className},e.children)},j=function(){return r.a.createElement(O,{class:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},O=h.a.div(x());function w(){var e=Object(f.a)(["\n  #country-name {\n    font-size: 1.4rem;\n    text-align: center;\n    margin: 0.5rem 0;\n    position: relative;\n    span {\n      img {\n        width: 2.2rem;\n        margin: auto 0.4rem;\n        cursor: pointer;\n      }\n      i {\n        font-size: 1.5rem;\n        position: absolute;\n        right: 0;\n        margin-top: 3px;\n        margin-right: 0.9rem;\n        text-align: right;\n      }\n    }\n  }\n  #card-container {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 10px;\n    .card {\n      background: var(--white-color);\n      display: flex;\n      height: 10rem;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      text-align: center;\n      border-radius: 6px;\n      box-shadow: var(--box);\n      h2 {\n        color: var(--primary-color);\n        font-size: 2.2rem;\n        margin: 0rem 0;\n      }\n      p {\n        font-size: 1.2rem;\n        color: #606470;\n      }\n      .text-green {\n        color: #639a67;\n      }\n      .text-red {\n        color: #f73859;\n      }\n    }\n  }\n  @media (max-width: 680px) {\n    #card-container {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n  @media (max-width: 588px) {\n    #card-container {\n      grid-template-columns: repeat(2, 1fr);\n\n      .card {\n        height: 8rem;\n        h2 {\n          font-size: 2rem;\n          margin: 0rem 0;\n        }\n        p {\n          font-size: 1rem;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 420px) {\n    #country-name {\n      font-size: 1.1rem;\n    }\n    #card-container {\n      .card {\n        .loading-header {\n          width: 6rem;\n          height: 4rem;\n        }\n\n        height: 5rem;\n        h2 {\n          font-size: 1.3rem;\n        }\n      }\n    }\n  }\n"]);return w=function(){return e},e}var N=h.a.div(w()),D=function(e){var n=e.data,a=e.flag,t=e.history,i=e.loading,c=e.countryChange,l=(n.deaths/n.cases*100).toFixed(2),o=(n.recovered/n.cases*100).toFixed(2);return r.a.createElement(N,null,i?r.a.createElement(j,null):r.a.createElement("h2",{id:"country-name"},n.country,r.a.createElement("span",null,r.a.createElement("img",{src:a,alt:n.country,className:"img-flag",onClick:c}))),r.a.createElement("div",{id:"card-container"},r.a.createElement("div",{className:"card"},r.a.createElement(k,{loading:i},n.cases),r.a.createElement(y,{loading:i},"Confirmed Cases")),r.a.createElement("div",{className:"card"},r.a.createElement(k,{loading:i},0===n.todayCases?function(e){if(!i){var n=Object.values(t[e-1]),a=Object.values(t[e-2]);return n[1]-a[1]}}(t.length):n.todayCases),r.a.createElement(y,{loading:i},"New Cases")),r.a.createElement("div",{className:"card"},r.a.createElement(k,{loading:i},n.active),r.a.createElement(y,{loading:i},"Active cases")),r.a.createElement("div",{className:"card"},r.a.createElement(k,{loading:i},n.recovered),r.a.createElement(y,{loading:i,className:"text-green"},"Recovered")),r.a.createElement("div",{className:"card"},r.a.createElement(k,{loading:i},0===n.critical?n.tests:n.critical),r.a.createElement(y,{loading:i},0===n.critical?"Tests Conducted":"Criticals")),r.a.createElement("div",{className:"card"},r.a.createElement(k,{loading:i},n.deaths),r.a.createElement(y,{loading:i,className:"text-red"},"Total Deaths")),r.a.createElement("div",{className:"card"},r.a.createElement(k,{loading:i},l,"%"),r.a.createElement(y,{loading:i},"Fatality Rate")),r.a.createElement("div",{className:"card"},r.a.createElement(k,{loading:i},o,"%"),r.a.createElement(y,{loading:i},"Recovery Rate"))))},S=a(40);function C(){var e=Object(f.a)(["\n  border-radius: 10px;\n  box-shadow: var(--box);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.2rem;\n\n  h2 {\n    background: var(--darkish-color);\n    color: var(--white-color);\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n  }\n\n  div {\n    padding: 10px 0;\n    background: var(--white-color);\n    max-height: 20rem;\n    text-align: center;\n    li {\n      font-size: 1.2rem;\n      list-style-type: none;\n\n      span {\n        color: var(--danger-color);\n        margin-left: 10px;\n      }\n    }\n  }\n  @media (max-width: 480px) {\n    margin-bottom: 1.2rem;\n    h2 {\n      font-size: 1rem;\n    }\n    div li {\n      font-size: 1rem;\n    }\n  }\n"]);return C=function(){return e},e}var z=h.a.div(C()),T=function(e){var n=e.history,a=e.loading,t=e.title;return r.a.createElement(z,{id:"timeline"},r.a.createElement("h2",null,t),r.a.createElement("div",null,!a&&r.a.createElement(S.Scrollbars,{style:{height:300},autoHide:!0},n.map((function(e,a){return r.a.createElement("li",{key:e[0]},(t=e[0],new Date(t).toUTCString()).substr(5,12)," : ",r.a.createElement("strong",null,e[1]),r.a.createElement("span",null,function(e,n,a){return 0===a||e[1]-n[1]===0?"":"+".concat(e[1]-n[1])}(e,n[a-1],a)));var t})).reverse())))};function M(){var e=Object(f.a)(["\n  text-align: center;\n  display: inline-block;\n  text-decoration: none;\n  color: var(--primary-color);\n  font-size: 1.2rem;\n  font-weight: bold;\n  border-radius: 10px;\n  padding: 0.4rem 2rem;\n  background: var(--accent-color);\n  box-shadow: var(--box);\n  @media (max-width: 480px) {\n    font-size: 0.8rem;\n    padding: 0.3rem 1.8rem;\n    border-radius: 8px;\n  }\n"]);return M=function(){return e},e}var F=Object(h.a)(d.b)(M()),J=function(e){return r.a.createElement(F,e,e.children)};function I(){var e=Object(f.a)(["\n  padding: 1rem 0;\n  display: flex;\n  justify-content: space-between;\n\n  a:first-child {\n    background: var(--primary-color);\n    color: var(--white-color);\n    margin-right: 3px;\n  }\n"]);return I=function(){return e},e}var G=h.a.div(I()),R=function(e){var n=e.data,a=e.flag,t=e.history,i=e.loading,c=e.historyDeaths,l=e.showDeathsTimeline,o=e.setDeathTimeline,s=e.darkMode,m=e.darkModeFunc,d=e.countryChange;return r.a.createElement("div",{id:"total-cases"},r.a.createElement(E,{darkMode:s,darkModeFunc:m}),r.a.createElement(D,{data:n,flag:a,history:t,loading:i,countryChange:d}),r.a.createElement(G,{id:"btn-container"},r.a.createElement(J,{onClick:function(){return o(l)}},l?"Confirmed":"Deaths"," ",r.a.createElement("i",{className:"fas fa-sync-alt"})),r.a.createElement(J,{to:"/graph"},"Graphs ",r.a.createElement("i",{className:"fas fa-arrow-right"}))),!l&&r.a.createElement(T,{history:t,title:"Timeline: Confirmed Cases",loading:i}),l&&r.a.createElement(T,{title:"Timeline: Deaths",history:c,loading:i}))};a(68);function A(){var e=Object(f.a)(["\n  background-color: var(--darkish-color);\n  color: var(--primary-color);\n"]);return A=function(){return e},e}function P(){var e=Object(f.a)(["\n  max-width: 1100px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.7rem 2rem;\n  z-index: 1;\n  width: 100%;\n  opacity: 0.9;\n  margin-bottom: 1.5rem;\n\n  ul {\n    list-style: none;\n    display: flex;\n  }\n\n  a {\n    color: var(--white-color);\n    background-color: var(--darkish-color);\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n    margin: 0 0.25rem;\n    text-decoration: none;\n\n    &:hover {\n      background: var(--white-color);\n      color: var(--primary-color);\n      transition: 1s;\n    }\n  }\n\n  .title-wrapper {\n    background: var(--white-color);\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n\n    h2 {\n      font-size: 1.2rem;\n    }\n\n    i {\n      transform: scale(1);\n      animation: pulse 2s linear infinite;\n    }\n    @keyframes pulse {\n      0% {\n        transform: scale(1.3);\n      }\n\n      70% {\n        transform: scale(1);\n      }\n\n      100% {\n        transform: scale(1.3);\n      }\n    }\n  }\n\n  @media (max-width: 480px) {\n    flex-direction: column;\n    .title-wrapper {\n      border-radius: 10px;\n      margin-bottom: 1rem;\n      h2 {\n        font-size: 0.8rem;\n      }\n    }\n    a {\n      margin: 2rem 0.25rem;\n    }\n  }\n"]);return P=function(){return e},e}var Y=function(e){var n=e.icon,a=e.title;return r.a.createElement(H,{id:"navbar"},r.a.createElement(B,null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("h2",null,r.a.createElement("i",{className:n})," ",a)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/firdausthedev/covid19-malaysia-tracker",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("li",{className:"fab fa-github"})," Check out codes")))))};Y.defaultProps={title:"Covid-19 MY Tracker",icon:"fas fa-virus"};var B=h.a.nav(P()),H=h.a.div(A()),_=Y,U=a(14);function q(){var e=Object(f.a)(["\n  margin-bottom: 1.5rem;\n  #title {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 0.8rem 0;\n\n    div {\n      display: inline-block;\n      margin: auto 0;\n    }\n    h2 {\n      text-align: center;\n      display: inline-block;\n    }\n  }\n\n  #last-h2 {\n    text-align: center;\n    padding: 0.8rem 0;\n  }\n\n  @media (max-width: 480px) {\n    #title h2 {\n      font-size: 1rem;\n    }\n\n    #title div a {\n      font-size: 0.8rem;\n      padding: 0.3rem 1.8rem;\n      border-radius: 8px;\n    }\n\n    #last-h2 {\n      font-size: 1rem;\n    }\n  }\n"]);return q=function(){return e},e}var K=h.a.div(q()),L=function(e){var n=e.dataGraph,a=e.historyDeaths,i=Object(t.useState)([]),c=Object(m.a)(i,2),l=c[0],o=c[1],s=Object(t.useState)([]),d=Object(m.a)(s,2),u=d[0],f=d[1],h=Object(t.useState)([]),g=Object(m.a)(h,2),p=g[0],b=g[1],v=Object(t.useState)([]),E=Object(m.a)(v,2),x=E[0],y=E[1],k=Object(t.useState)({}),j=Object(m.a)(k,2),O=j[0],w=j[1],N=Object(t.useState)({}),D=Object(m.a)(N,2),S=D[0],C=D[1],z=Object(t.useState)({}),T=Object(m.a)(z,2),M=T[0],F=T[1],I=Object(t.useState)({}),G=Object(m.a)(I,2),R=G[0],A=G[1];Object(t.useEffect)((function(){Y(n,a)}),[]);var P=function(e,n,a){return 0===a||e[1]-n[1]===0?0:e[1]-n[1]},Y=function(e,n){var a=e.map((function(e){return e[1]})),t=e.map((function(n,a){return P(n,e[a-1],a)})),r=n.map((function(e){return e[1]})),i=n.map((function(e,a){return P(e,n[a-1],a)}));f(t),o(a),b(r),y(i),w({type:"line",series:[{values:a}]}),C({type:"bar",series:[{values:t}]}),F({type:"bar",series:[{values:r}]}),A({type:"bar",series:[{values:i}]})};return r.a.createElement(K,{id:"graph"},r.a.createElement("div",{id:"title"},r.a.createElement("div",null,r.a.createElement(J,{to:"/"},"Back")),r.a.createElement("h2",null,"Total Confirmed Cases by Day"),r.a.createElement("div",null)),l.length>0?r.a.createElement(U.a,{data:O}):"",r.a.createElement("h2",{id:"last-h2"},"Total New Cases by Day"),u.length>0?r.a.createElement(U.a,{data:S}):"",r.a.createElement("h2",{id:"last-h2"},"Total Deaths by Day"),p.length>0?r.a.createElement(U.a,{data:M}):"",r.a.createElement("h2",{id:"last-h2"},"Total New Deaths by Day"),x.length>0?r.a.createElement(U.a,{data:R}):"")},Q=a(23),V=a.n(Q),W=a(24);a(85);var X=function(){var e=Object(t.useState)({}),n=Object(m.a)(e,2),a=n[0],i=n[1],c=Object(t.useState)(""),l=Object(m.a)(c,2),f=l[0],h=l[1],g=Object(t.useState)(!0),p=Object(m.a)(g,2),b=p[0],v=p[1],E=Object(t.useState)([]),x=Object(m.a)(E,2),y=x[0],k=x[1],j=Object(t.useState)([]),O=Object(m.a)(j,2),w=O[0],N=O[1],D=Object(t.useState)(!1),S=Object(m.a)(D,2),C=S[0],z=S[1],T=Object(t.useState)(0),M=Object(m.a)(T,2),F=M[0],J=M[1],I=["MY","ID","SG","TH"],G=Object(t.useState)(I[F]),A=Object(m.a)(G,2),P=A[0],Y=A[1],B=Object(t.useState)(JSON.parse(localStorage.getItem("dark"))||!1),H=Object(m.a)(B,2),U=H[0],q=H[1];Object(t.useEffect)((function(){X(P),K()}),[U]);var K=function(){localStorage.setItem("dark",JSON.stringify(U))},Q=function(){v(!0),F<3?(J(F+=1),Y(I[F]),X(I[F])):(J(0),Y(I[0]),X(I[0]))},X=function(){var e=Object(s.a)(o.a.mark((function e(n){var a,t,r,c,l,s,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([V.a.get("https://corona.lmao.ninja/countries/"+n),V.a.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code="+n+"&timelines=true")]);case 3:a=e.sent,t=Object(m.a)(a,2),r=t[0],c=t[1],l=r.data.countryInfo.flag,h(l),i(r.data),s=c.data.locations[0].timelines.confirmed.timeline,d=c.data.locations[0].timelines.deaths.timeline,k(Object.entries(s)),N(Object.entries(d)),v(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0),W.b.error("Server Error. Please come back later..");case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(n){return e.apply(this,arguments)}}(),Z=function(e){z(!e)},$=function(e){q(!e)};return r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",{className:U?"app dark-mode":"app light-mode"},r.a.createElement(_,null),r.a.createElement("div",{className:"container"},r.a.createElement(W.a,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(R,Object.assign({},e,{data:a,flag:f,loading:b,history:y,historyDeaths:w,showDeathsTimeline:C,setDeathTimeline:Z,darkModeFunc:$,darkMode:U,countryChange:Q}))}}),r.a.createElement(u.a,{exact:!0,path:"/graph",render:function(e){return r.a.createElement(L,Object.assign({},e,{dataGraph:y,historyDeaths:w}))}}),r.a.createElement(u.a,{render:function(e){return r.a.createElement(R,Object.assign({},e,{data:a,flag:f,loading:b,history:y,historyDeaths:w,showDeathsTimeline:C,setDeathTimeline:Z,darkModeFunc:$,darkMode:U,countryChange:Q}))}})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.affc6d9b.chunk.js.map