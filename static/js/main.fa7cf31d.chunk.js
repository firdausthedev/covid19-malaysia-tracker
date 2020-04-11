(this["webpackJsonpcovid-19-malaysia"]=this["webpackJsonpcovid-19-malaysia"]||[]).push([[0],{43:function(e,n,a){e.exports=a(86)},68:function(e,n,a){},86:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(12),i=a.n(c),l=a(19),o=a.n(l),s=a(36),m=a(10),d=a(13),u=a(11),g=a(7),p=a(8);function f(){var e=Object(g.a)(["\n  color: black;\n  display: inline-block;\n"]);return f=function(){return e},e}function b(){var e=Object(g.a)(["\n  text-align: center;\n  padding: 0.7rem 0rem;\n  border-radius: 10px;\n  margin: auto;\n  /* background-color: #e5e5e5; */\n  background: white;\n  /* border: 2px solid #e5e5e5; */\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n"]);return b=function(){return e},e}var h=p.a.div(b()),E=p.a.h2(f()),v=function(){var e=new Date,n="",a="";switch(e.getMonth()){case 0:n="Jan";break;case 1:n="Feb";break;case 2:n="Mar";break;case 3:n="Apr";break;case 4:n="May";break;case 5:n="Jun";break;case 6:n="Jul";break;case 7:n="Aug";break;case 8:n="Sep";break;case 9:n="Oct";break;case 10:n="Nov";break;default:n="Dec"}return a=1===e.getDate()?"st":2===e.getDate()?"nd":3===e.getDate()?"rd":"th",r.a.createElement(h,null,r.a.createElement(E,null,"".concat(e.getDate()).concat(a," ").concat(n," ").concat(e.getFullYear())))},x=function(e){return r.a.createElement("h2",{style:e.loading?{background:"#eeeef3",color:"#eeeef3",width:"10rem",height:"5rem",marginBottom:"10px"}:{}},e.children)},y=function(e){return r.a.createElement("p",{className:e.className,style:e.loading?{background:"#eeeef3",color:"#eeeef3"}:{}},e.children)};function k(){var e=Object(g.a)(["\n  h2 {\n    font-size: 1.4rem;\n    text-align: center;\n    margin: 0.5rem 0;\n    span img {\n      width: 2.2rem;\n      margin: auto 0.4rem;\n    }\n  }\n  #card-container {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 10px;\n    .card {\n      background: white;\n      display: flex;\n      height: 10rem;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      text-align: center;\n      border-radius: 6px;\n      box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n      h2 {\n        color: black;\n        font-size: 2.2rem;\n        margin: 0rem 0;\n      }\n      p {\n        font-size: 1.2rem;\n        color: #333;\n      }\n      .green {\n        color: #639a67;\n      }\n      .red {\n        color: #f73859;\n      }\n    }\n  }\n  @media (max-width: 680px) {\n    #card-container {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n  @media (max-width: 588px) {\n    #card-container {\n      grid-template-columns: repeat(2, 1fr);\n      two-infos {\n        grid-template-columns: repeat(1, 1fr);\n      }\n      .card {\n        height: 8rem;\n        h2 {\n          font-size: 2rem;\n          margin: 0rem 0;\n        }\n        p {\n          font-size: 1rem;\n          text-align: center;\n          color: #333;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 420px) {\n    h2 {\n      font-size: 1.1rem;\n    }\n    #card-container {\n      grid-template-columns: repeat(2, 1fr);\n      .card {\n        height: 5rem;\n        h2 {\n          font-size: 1.3rem;\n          margin: 0rem 0;\n        }\n      }\n    }\n  }\n"]);return k=function(){return e},e}var j=p.a.div(k()),w=function(e){var n=e.data,a=e.flag,t=e.history,c=e.loading,i=(n.deaths/n.cases*100).toFixed(2),l=(n.recovered/n.cases*100).toFixed(2);return r.a.createElement(j,null,r.a.createElement("h2",null,!c&&n.country,!c&&r.a.createElement("span",null,r.a.createElement("img",{src:a,alt:n.country,className:"img-flag"}))),r.a.createElement("div",{id:"card-container"},r.a.createElement("div",{className:"card"},r.a.createElement(x,{loading:c},n.cases),r.a.createElement(y,{loading:c},"Confirmed Cases")),r.a.createElement("div",{className:"card"},r.a.createElement(x,{loading:c},0===n.todayCases?function(e){var n=t[e-1],a=t[e-2],r=null!=n?Object.values(n):{},i=null!=a?Object.values(a):{},l=parseInt(r[1])-parseInt(i[1]);return c?"":l}(parseInt(t.length)):n.todayCases),r.a.createElement(y,{loading:c},"New Cases")),r.a.createElement("div",{className:"card"},r.a.createElement(x,{loading:c},n.active),r.a.createElement(y,{loading:c},"Active cases")),r.a.createElement("div",{className:"card"},r.a.createElement(x,{loading:c},n.recovered),r.a.createElement(y,{loading:c,className:"green"},"Recovered")),r.a.createElement("div",{className:"card"},r.a.createElement(x,{loading:c},n.critical),r.a.createElement(y,{loading:c},"Critical")),r.a.createElement("div",{className:"card"},r.a.createElement(x,{loading:c},n.deaths),r.a.createElement(y,{loading:c,className:"red"},"Total Deaths")),r.a.createElement("div",{className:"card"},r.a.createElement(x,{loading:c},i,"%"),r.a.createElement(y,{loading:c},"Fatality Rate")),r.a.createElement("div",{className:"card"},r.a.createElement(x,{loading:c},l,"%"),r.a.createElement(y,{loading:c},"Recovery Rate"))))},O=a(40);function N(){var e=Object(g.a)(["\n  margin-top: 1.2rem;\n  border-radius: 10px;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n  overflow: hidden;\n  display: flex;\n\n  flex-direction: column;\n  margin-bottom: 1.2rem;\n\n  h2 {\n    background: #1e2022;\n    color: #fff;\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n  }\n  #graph-btn-container {\n    padding-top: 5px;\n\n    a {\n      text-align: center;\n      display: inline-block;\n      text-decoration: none;\n      color: black;\n      font-size: 1.2rem;\n      font-weight: bold;\n      border-radius: 10px;\n      padding: 0.4rem 2rem;\n      background: #f4e04d;\n      box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n    }\n  }\n\n  div {\n    padding-bottom: 10px;\n    background: white;\n    max-height: 20rem;\n    /* background: red; */\n    text-align: center;\n    li {\n      font-size: 1.2rem;\n      list-style-type: none;\n\n      span {\n        color: #f73859;\n        margin-left: 10px;\n      }\n    }\n  }\n  @media (max-width: 480px) {\n    margin-bottom: 1.2rem;\n    h2 {\n      font-size: 1rem;\n    }\n    div li {\n      font-size: 1rem;\n    }\n    #graph-btn-container a {\n      font-size: 0.8rem;\n      padding: 0.3rem 1.8rem;\n      border-radius: 8px;\n    }\n  }\n"]);return N=function(){return e},e}var z=p.a.div(N()),C=function(e){var n=e.history,a=e.loading;return r.a.createElement(z,null,r.a.createElement("h2",null,"History : Confirmed Cases"),r.a.createElement("div",{id:"graph-btn-container"},r.a.createElement(d.b,{to:"/graph"},"Graphs")),r.a.createElement("div",null,!a&&r.a.createElement(O.Scrollbars,{style:{height:300},autoHide:!0},n.map((function(e,a){return r.a.createElement("li",{key:e[0]},(t=e[0],new Date(t).toUTCString()).substr(5,12)," : ",r.a.createElement("strong",null,e[1]),r.a.createElement("span",null,function(e,n,a){return 0===a||e[1]-n[1]===0?"":"+".concat(e[1]-n[1])}(e,n[a-1],a)));var t})).reverse())))},S=function(e){return r.a.createElement(t.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",null,r.a.createElement(w,{data:e.data,flag:e.flag,history:e.history,loading:e.loading})),r.a.createElement(C,{history:e.history,loading:e.loading}))};a(68);function D(){var e=Object(g.a)(["\n  background-color: #1e2022;\n  color: black;\n"]);return D=function(){return e},e}function F(){var e=Object(g.a)(["\n  max-width: 1100px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.7rem 2rem;\n  z-index: 1;\n  width: 100%;\n  opacity: 0.9;\n  margin-bottom: 1.5rem;\n\n  ul {\n    display: flex;\n  }\n\n  a {\n    color: #fff;\n    background: #1e2022;\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n    margin: 0 0.25rem;\n\n    &:hover {\n      background: #fff;\n      color: black;\n      transition: 1s;\n    }\n  }\n\n  .title-wrapper {\n    background: white;\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n\n    h2 {\n      font-size: 1.2rem;\n    }\n\n    i {\n      transform: scale(1);\n      animation: pulse 2s linear infinite;\n    }\n    @keyframes pulse {\n      0% {\n        transform: scale(1.3);\n      }\n\n      70% {\n        transform: scale(1);\n      }\n\n      100% {\n        transform: scale(1.3);\n      }\n    }\n  }\n\n  @media (max-width: 480px) {\n    flex-direction: column;\n    .title-wrapper {\n      border-radius: 10px;\n      margin-bottom: 1rem;\n      h2 {\n        font-size: 0.8rem;\n      }\n    }\n    a {\n      margin: 2rem 0.25rem;\n    }\n  }\n"]);return F=function(){return e},e}var I=function(e){var n=e.icon,a=e.title;return r.a.createElement(M,null,r.a.createElement(J,null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("h2",null,r.a.createElement("i",{className:n})," ",a)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/firdausthedev/covid19-malaysia-tracker",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("li",{className:"fab fa-github"})," Check out codes")))))};I.defaultProps={title:"Covid-19 MY Tracker",icon:"fas fa-virus"};var J=p.a.nav(F()),M=p.a.div(D()),T=I,A=a(22);function R(){var e=Object(g.a)(["\n  margin-bottom: 1.5rem;\n  #title {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 0.8rem 0;\n\n    div {\n      display: inline-block;\n      margin: auto 0;\n      a {\n        text-align: center;\n        display: inline-block;\n        text-decoration: none;\n        color: black;\n        font-size: 1.2rem;\n        font-weight: bold;\n        border-radius: 10px;\n        padding: 0.4rem 2rem;\n        background: #f4e04d;\n        box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n      }\n    }\n    h2 {\n      text-align: center;\n      display: inline-block;\n    }\n  }\n\n  #last-h2 {\n    text-align: center;\n    padding: 0.8rem 0;\n  }\n\n  @media (max-width: 480px) {\n    #title h2 {\n      font-size: 1rem;\n    }\n\n    #title div a {\n      font-size: 0.8rem;\n      padding: 0.3rem 1.8rem;\n      border-radius: 8px;\n    }\n\n    #last-h2 {\n      font-size: 1rem;\n    }\n  }\n"]);return R=function(){return e},e}var B=p.a.div(R()),G=function(e){var n=e.dataGraph,a=Object(t.useState)([]),c=Object(m.a)(a,2),i=c[0],l=c[1],o=Object(t.useState)([]),s=Object(m.a)(o,2),u=s[0],g=s[1],p=Object(t.useState)({}),f=Object(m.a)(p,2),b=f[0],h=f[1],E=Object(t.useState)({}),v=Object(m.a)(E,2),x=v[0],y=v[1];Object(t.useEffect)((function(){k(n)}),[]);var k=function(e){var n=e.map((function(e){return e[1]})),a=e.map((function(n,a){return function(e,n,a){return 0===a||e[1]-n[1]===0?0:e[1]-n[1]}(n,e[a-1],a)}));g(a),l(n),h({type:"line",series:[{values:n}]}),y({type:"bar",series:[{values:a}]})};return r.a.createElement(B,null,r.a.createElement("div",{id:"title"},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/"},"Back")),r.a.createElement("h2",null,"Total Confirmed Cases by Day"),r.a.createElement("div",null)),i.length>0?r.a.createElement(A.a,{data:b}):"",r.a.createElement("h2",{id:"last-h2"},"Total New Cases by Day"),u.length>0?r.a.createElement(A.a,{data:x}):"")},H=a(23),P=a.n(H),Y=a(24);a(85);var U=function(){var e=Object(t.useState)({}),n=Object(m.a)(e,2),a=n[0],c=n[1],i=Object(t.useState)(""),l=Object(m.a)(i,2),g=l[0],p=l[1],f=Object(t.useState)(!0),b=Object(m.a)(f,2),h=b[0],E=b[1],v=Object(t.useState)([]),x=Object(m.a)(v,2),y=x[0],k=x[1];Object(t.useEffect)((function(){j()}),[]);var j=function(){var e=Object(s.a)(o.a.mark((function e(){var n,a,t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://corona.lmao.ninja/countries/458");case 3:return n=e.sent,a=n.data.countryInfo.flag,p(a),c(n.data),e.next=9,P.a.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations/153");case 9:t=e.sent,r=t.data.location.timelines.confirmed.timeline,k(Object.entries(r)),E(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),Y.b.error("Server Error. Please come back later..");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement("div",{className:"container"},r.a.createElement(Y.a,{autoClose:!1}),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(S,Object.assign({},e,{data:a,flag:g,loading:h,history:y}))}}),r.a.createElement(u.a,{exact:!0,path:"/graph",render:function(e){return r.a.createElement(G,Object.assign({},e,{dataGraph:y}))}}),r.a.createElement(u.a,{render:function(e){return r.a.createElement(S,Object.assign({},e,{data:a,flag:g,loading:h,history:y}))}})))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.fa7cf31d.chunk.js.map