(this["webpackJsonpcovid-19-malaysia"]=this["webpackJsonpcovid-19-malaysia"]||[]).push([[0],{31:function(e,n,t){e.exports=t(59)},54:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(24),l=t.n(c),i=t(29),o=t(1),u=t(2);function s(){var e=Object(o.a)(["\n  color: black;\n  display: inline-block;\n"]);return s=function(){return e},e}function d(){var e=Object(o.a)(["\n  text-align: center;\n  padding: 0.5rem 2rem;\n  border-radius: 10px;\n  margin: auto;\n  /* background-color: #e5e5e5; */\n  border: 2px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n"]);return d=function(){return e},e}var m=u.a.div(d()),f=u.a.h2(s()),p=function(){var e=new Date,n="",t="";switch(e.getMonth()){case 0:n="Jan";break;case 1:n="Feb";break;case 2:n="Mar";break;case 3:n="Apr";break;case 4:n="May";break;case 5:n="Jun";break;case 6:n="Jul";break;case 7:n="Aug";break;case 8:n="Sep";break;case 9:n="Oct";break;case 10:n="Nov";break;default:n="Dec"}return t=1===e.getDate()?"st":2===e.getDate()?"nd":3===e.getDate()?"rd":"th",r.a.createElement(m,null,r.a.createElement(f,null,"".concat(e.getDate()).concat(t," ").concat(n," ").concat(e.getFullYear())))},b=t(5),g=t.n(b),x=t(6),v=t(4),h=t(7),E=t.n(h);function j(){var e=Object(o.a)(["\n  margin-top: 1.2rem;\n  height: 20rem;\n  border: 1px;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    background: #1e2022;\n    color: #fff;\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  div {\n    flex: 85%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 10px;\n\n    #last-update {\n      font-size: 1.2rem;\n    }\n    p {\n      font-size: 2rem;\n      font-weight: 400;\n    }\n  }\n\n  @media (max-width: 480px) {\n    height: 10rem;\n    h2 {\n      font-size: 1rem;\n    }\n    div #last-update {\n      font-size: 0.8rem;\n    }\n    div p {\n      font-size: 1rem;\n    }\n  }\n"]);return j=function(){return e},e}var k=u.a.div(j()),O=function(){var e=Object(a.useState)(!0),n=Object(v.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(""),i=Object(v.a)(l,2),o=i[0],u=i[1],s=Object(a.useState)(""),d=Object(v.a)(s,2),m=d[0],f=d[1],p=Object(a.useState)(0),b=Object(v.a)(p,2),h=b[0],j=b[1];Object(a.useEffect)((function(){O()}),[]);var O=function(){var e=Object(x.a)(g.a.mark((function e(){var n,t,a,r,l,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://coronavirus-tracker-api.herokuapp.com/all");case 2:n=e.sent,t=n.data.confirmed.locations[153].latest,a=n.data.confirmed.locations[153].country,r=n.data.confirmed.last_updated,console.log(n.data.confirmed.last_updated),l=new Date(r),i=l.toUTCString(),u(i),c(!1),j(t),f(a);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(k,null,r.a.createElement("h2",null,"Total Cases in ",m),r.a.createElement("div",null,r.a.createElement("p",null,"Comfirmed cases :"," ",r.a.createElement("strong",null,t?"loading..":h,console.log(o.substring(0,24)))),r.a.createElement("p",{id:"last-update"},"Last updated: ",r.a.createElement("strong",null,o.substring(4,22)))))};function w(){var e=Object(o.a)(["\n  margin-top: 1.2rem;\n  height: 10rem;\n  border: 1px;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    background: #384259;\n    color: #fff;\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  div {\n    flex: 85%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 10px;\n    p {\n      font-size: 2rem;\n      font-weight: 400;\n    }\n  }\n  @media (max-width: 480px) {\n    h2 {\n      font-size: 1rem;\n    }\n    div p {\n      font-size: 1rem;\n    }\n  }\n"]);return w=function(){return e},e}var y=u.a.div(w()),z=function(){var e=Object(a.useState)([]),n=Object(v.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(!0),i=Object(v.a)(l,2),o=(i[0],i[1]);Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(x.a)(g.a.mark((function e(){var n,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://coronavirus-tracker-api.herokuapp.com/all");case 2:n=e.sent,t=n.data.confirmed.locations[153].history,c(Object.entries(t)),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){var n=t[e-1],a=t[e-2],r=null!=n?Object.values(n):{},c=null!=n?Object.values(a):{};return parseInt(r[1])-parseInt(c[1])};return r.a.createElement(y,null,r.a.createElement("h2",null,"New Cases"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,isNaN(s(parseInt(t.length)))?"loading..":s(parseInt(t.length))))))};function S(){var e=Object(o.a)(["\n  margin-top: 1.2rem;\n  height: 9rem;\n  border: 1px;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    background: #f73859;\n    color: #fff;\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  div {\n    flex: 85%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 10px;\n    p {\n      font-size: 2rem;\n      font-weight: 400;\n    }\n  }\n  @media (max-width: 480px) {\n    h2 {\n      font-size: 1rem;\n    }\n    div p {\n      font-size: 1rem;\n    }\n  }\n"]);return S=function(){return e},e}var N=u.a.div(S()),D=function(){var e=Object(a.useState)(!0),n=Object(v.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(0),i=Object(v.a)(l,2),o=i[0],u=i[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(x.a)(g.a.mark((function e(){var n,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://coronavirus-tracker-api.herokuapp.com/all");case 2:n=e.sent,t=n.data.deaths.locations[153].latest,c(!1),u(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(N,null,r.a.createElement("h2",null,"Total Deaths"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,t?"loading..":o))))};function C(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1rem;\n\n  @media (max-width: 480px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return C=function(){return e},e}var I=u.a.div(C()),J=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(p,null),r.a.createElement(I,null,r.a.createElement(O,null),r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(D,null))))};t(54);function M(){var e=Object(o.a)(["\n  background-color: #1e2022;\n  color: black;\n"]);return M=function(){return e},e}function T(){var e=Object(o.a)(["\n  max-width: 1100px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.7rem 2rem;\n  z-index: 1;\n  width: 100%;\n  opacity: 0.9;\n  margin-bottom: 1.5rem;\n\n  ul {\n    display: flex;\n  }\n\n  a {\n    color: #fff;\n    background: #1e2022;\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n    margin: 0 0.25rem;\n\n    &:hover {\n      background: #fff;\n      color: black;\n      transition: 1s;\n    }\n  }\n\n  .title-wrapper {\n    background: #fff;\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n\n    h2 {\n      font-size: 1.2rem;\n    }\n  }\n\n  @media (max-width: 480px) {\n    flex-direction: column;\n    .title-wrapper {\n      border-radius: 10px;\n      margin-bottom: 1rem;\n      h2 {\n        font-size: 0.8rem;\n      }\n    }\n    a {\n      margin: 2rem 0.25rem;\n    }\n  }\n"]);return T=function(){return e},e}var A=function(e){var n=e.icon,t=e.title;return r.a.createElement(_,null,r.a.createElement(F,null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("h2",null,r.a.createElement("i",{className:n})," ",t)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/firdausthedev",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("li",{className:"fab fa-github"})," Check out codes")))))};A.defaultProps={title:"Covid-19 MY Tracker",icon:"fas fa-virus"};var F=u.a.nav(T()),_=u.a.div(M()),Y=A;var B=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Y,null),r.a.createElement("div",{className:"container"},r.a.createElement(J,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b1364a1a.chunk.js.map