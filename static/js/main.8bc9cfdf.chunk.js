(this["webpackJsonpcovid-19-malaysia"]=this["webpackJsonpcovid-19-malaysia"]||[]).push([[0],{37:function(e,n,t){e.exports=t(65)},60:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(30),l=t.n(c),o=t(34),i=t(10),u=t(2),s=t(3);function d(){var e=Object(u.a)(["\n  color: black;\n  display: inline-block;\n"]);return d=function(){return e},e}function f(){var e=Object(u.a)(["\n  text-align: center;\n  padding: 0.5rem 2rem;\n  border-radius: 10px;\n  margin: auto;\n  /* background-color: #e5e5e5; */\n  border: 2px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n"]);return f=function(){return e},e}var p=s.a.div(f()),m=s.a.h2(d()),b=function(){var e=new Date,n="",t="";switch(e.getMonth()){case 0:n="Jan";break;case 1:n="Feb";break;case 2:n="Mar";break;case 3:n="Apr";break;case 4:n="May";break;case 5:n="Jun";break;case 6:n="Jul";break;case 7:n="Aug";break;case 8:n="Sep";break;case 9:n="Oct";break;case 10:n="Nov";break;default:n="Dec"}return t=1===e.getDate()?"st":2===e.getDate()?"nd":3===e.getDate()?"rd":"th",r.a.createElement(p,null,r.a.createElement(m,null,"".concat(e.getDate()).concat(t," ").concat(n," ").concat(e.getFullYear())))},g=t(9),v=t.n(g),x=t(12),h=t(7),E=t(13),k=t.n(E);function j(){var e=Object(u.a)(["\n  margin-top: 1.2rem;\n  height: 20rem;\n  border: 1px;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    background: #1e2022;\n    color: #fff;\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  div {\n    flex: 85%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 10px;\n    p {\n      font-size: 2rem;\n      font-weight: 400;\n    }\n  }\n"]);return j=function(){return e},e}var O=s.a.div(j()),y=function(){var e=Object(a.useState)(!0),n=Object(h.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(""),o=Object(h.a)(l,2),i=o[0],u=o[1],s=Object(a.useState)(0),d=Object(h.a)(s,2),f=d[0],p=d[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){var e=Object(x.a)(v.a.mark((function e(){var n,t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://coronavirus-tracker-api.herokuapp.com/all");case 2:n=e.sent,t=n.data.confirmed.locations[153].latest,a=n.data.confirmed.locations[153].country,c(!1),p(t),u(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(O,null,r.a.createElement("h2",null,"Total Cases in ",i),r.a.createElement("div",null,r.a.createElement("p",null,"Comfirmed cases : ",r.a.createElement("strong",null,t?"loading..":f))))};function w(){var e=Object(u.a)(["\n  margin-top: 1.2rem;\n  height: 10rem;\n  border: 1px;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    background: #384259;\n    color: #fff;\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  div {\n    flex: 85%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 10px;\n    p {\n      font-size: 2rem;\n      font-weight: 400;\n    }\n  }\n"]);return w=function(){return e},e}var N=s.a.div(w()),S=function(){var e=Object(a.useState)([]),n=Object(h.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(!0),o=Object(h.a)(l,2),i=(o[0],o[1]);Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(x.a)(v.a.mark((function e(){var n,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://coronavirus-tracker-api.herokuapp.com/all");case 2:n=e.sent,t=n.data.confirmed.locations[153].history,c(Object.entries(t)),i(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){var n=t[e-1],a=t[e-2],r=null!=n?Object.values(n):{},c=null!=n?Object.values(a):{};return parseInt(r[1])-parseInt(c[1])};return r.a.createElement(N,null,r.a.createElement("h2",null,"New Cases"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,isNaN(s(parseInt(t.length)))?"loading..":s(parseInt(t.length))))))};function D(){var e=Object(u.a)(["\n  margin-top: 1.2rem;\n  height: 9rem;\n  border: 1px;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    background: #f73859;\n    color: #fff;\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  div {\n    flex: 85%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 10px;\n    p {\n      font-size: 2rem;\n      font-weight: 400;\n    }\n  }\n"]);return D=function(){return e},e}var z=s.a.div(D()),C=function(){var e=Object(a.useState)(!0),n=Object(h.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(0),o=Object(h.a)(l,2),i=o[0],u=o[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(x.a)(v.a.mark((function e(){var n,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://coronavirus-tracker-api.herokuapp.com/all");case 2:n=e.sent,t=n.data.deaths.locations[153].latest,console.log(n.data),c(!1),u(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(z,null,r.a.createElement("h2",null,"Total Deaths"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,t?"loading..":i))))};function I(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1rem;\n"]);return I=function(){return e},e}var J=s.a.div(I()),M=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(b,null),r.a.createElement(J,null,r.a.createElement(y,null),r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(C,null))))};t(60);function A(){var e=Object(u.a)(["\n  background-color: #1e2022;\n  color: black;\n"]);return A=function(){return e},e}function F(){var e=Object(u.a)(["\n  max-width: 1100px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.7rem 2rem;\n  z-index: 1;\n  width: 100%;\n  opacity: 0.9;\n  margin-bottom: 1.5rem;\n\n  ul {\n    display: flex;\n  }\n\n  a {\n    color: #fff;\n    background: black;\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n    margin: 0 0.25rem;\n\n    &:hover {\n      background: #fff;\n      color: black;\n      transition: 1s;\n    }\n  }\n\n  .title-wrapper {\n    background: #fff;\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n\n    h2 {\n      font-size: 1.2rem;\n    }\n  }\n"]);return F=function(){return e},e}var T=function(e){var n=e.icon,t=e.title;return r.a.createElement(B,null,r.a.createElement(Y,null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("h2",null,r.a.createElement("i",{className:n})," ",t)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/firdausthedev",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("li",{className:"fab fa-github"})," Check out codes")))))};T.defaultProps={title:"Covid-19 MY Tracker",icon:"fas fa-virus"};var Y=s.a.nav(F()),B=s.a.div(A()),P=T;var _=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement("div",{className:"container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:M})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8bc9cfdf.chunk.js.map