(this["webpackJsonpcovid-19-malaysia"]=this["webpackJsonpcovid-19-malaysia"]||[]).push([[0],{31:function(e,n,t){e.exports=t(59)},54:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(24),l=t.n(c),o=t(29),i=t(1),u=t(2);function s(){var e=Object(i.a)(["\n  color: black;\n  display: inline-block;\n"]);return s=function(){return e},e}function d(){var e=Object(i.a)(["\n  text-align: center;\n  padding: 0.5rem 2rem;\n  border-radius: 10px;\n  margin: auto;\n  /* background-color: #e5e5e5; */\n  border: 2px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n"]);return d=function(){return e},e}var f=u.a.div(d()),p=u.a.h2(s()),m=function(){var e=new Date,n="",t="";switch(e.getMonth()){case 0:n="Jan";break;case 1:n="Feb";break;case 2:n="Mar";break;case 3:n="Apr";break;case 4:n="May";break;case 5:n="Jun";break;case 6:n="Jul";break;case 7:n="Aug";break;case 8:n="Sep";break;case 9:n="Oct";break;case 10:n="Nov";break;default:n="Dec"}return t=1===e.getDate()?"st":2===e.getDate()?"nd":3===e.getDate()?"rd":"th",r.a.createElement(f,null,r.a.createElement(p,null,"".concat(e.getDate()).concat(t," ").concat(n," ").concat(e.getFullYear())))},b=t(5),g=t.n(b),v=t(6),x=t(4),h=t(7),E=t.n(h);function k(){var e=Object(i.a)(["\n  margin-top: 1.2rem;\n  height: 20rem;\n  border: 1px;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    background: #1e2022;\n    color: #fff;\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  div {\n    flex: 85%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 10px;\n    p {\n      font-size: 2rem;\n      font-weight: 400;\n    }\n  }\n"]);return k=function(){return e},e}var j=u.a.div(k()),O=function(){var e=Object(a.useState)(!0),n=Object(x.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(""),o=Object(x.a)(l,2),i=o[0],u=o[1],s=Object(a.useState)(0),d=Object(x.a)(s,2),f=d[0],p=d[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){var e=Object(v.a)(g.a.mark((function e(){var n,t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://coronavirus-tracker-api.herokuapp.com/all");case 2:n=e.sent,t=n.data.confirmed.locations[153].latest,a=n.data.confirmed.locations[153].country,c(!1),p(t),u(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(j,null,r.a.createElement("h2",null,"Total Cases in ",i),r.a.createElement("div",null,r.a.createElement("p",null,"Comfirmed cases : ",r.a.createElement("strong",null,t?"loading..":f))))};function y(){var e=Object(i.a)(["\n  margin-top: 1.2rem;\n  height: 10rem;\n  border: 1px;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    background: #384259;\n    color: #fff;\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  div {\n    flex: 85%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 10px;\n    p {\n      font-size: 2rem;\n      font-weight: 400;\n    }\n  }\n"]);return y=function(){return e},e}var w=u.a.div(y()),N=function(){var e=Object(a.useState)([]),n=Object(x.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(!0),o=Object(x.a)(l,2),i=(o[0],o[1]);Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(v.a)(g.a.mark((function e(){var n,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://coronavirus-tracker-api.herokuapp.com/all");case 2:n=e.sent,t=n.data.confirmed.locations[153].history,c(Object.entries(t)),i(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){var n=t[e-1],a=t[e-2],r=null!=n?Object.values(n):{},c=null!=n?Object.values(a):{};return parseInt(r[1])-parseInt(c[1])};return r.a.createElement(w,null,r.a.createElement("h2",null,"New Cases"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,isNaN(s(parseInt(t.length)))?"loading..":s(parseInt(t.length))))))};function S(){var e=Object(i.a)(["\n  margin-top: 1.2rem;\n  height: 9rem;\n  border: 1px;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 5px 10px 0 rgba(228, 217, 205, 0.6);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    background: #f73859;\n    color: #fff;\n    flex: 15%;\n    align-content: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  div {\n    flex: 85%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 10px;\n    p {\n      font-size: 2rem;\n      font-weight: 400;\n    }\n  }\n"]);return S=function(){return e},e}var D=u.a.div(S()),z=function(){var e=Object(a.useState)(!0),n=Object(x.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(0),o=Object(x.a)(l,2),i=o[0],u=o[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(v.a)(g.a.mark((function e(){var n,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://coronavirus-tracker-api.herokuapp.com/all");case 2:n=e.sent,t=n.data.deaths.locations[153].latest,console.log(n.data),c(!1),u(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(D,null,r.a.createElement("h2",null,"Total Deaths"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,t?"loading..":i))))};function C(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1rem;\n"]);return C=function(){return e},e}var I=u.a.div(C()),J=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(m,null),r.a.createElement(I,null,r.a.createElement(O,null),r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(z,null))))};t(54);function M(){var e=Object(i.a)(["\n  background-color: #1e2022;\n  color: black;\n"]);return M=function(){return e},e}function A(){var e=Object(i.a)(["\n  max-width: 1100px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.7rem 2rem;\n  z-index: 1;\n  width: 100%;\n  opacity: 0.9;\n  margin-bottom: 1.5rem;\n\n  ul {\n    display: flex;\n  }\n\n  a {\n    color: #fff;\n    background: black;\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n    margin: 0 0.25rem;\n\n    &:hover {\n      background: #fff;\n      color: black;\n      transition: 1s;\n    }\n  }\n\n  .title-wrapper {\n    background: #fff;\n    padding: 0.5rem 1rem;\n    border-radius: 10px;\n\n    h2 {\n      font-size: 1.2rem;\n    }\n  }\n"]);return A=function(){return e},e}var F=function(e){var n=e.icon,t=e.title;return r.a.createElement(Y,null,r.a.createElement(T,null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("h2",null,r.a.createElement("i",{className:n})," ",t)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/firdausthedev",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("li",{className:"fab fa-github"})," Check out codes")))))};F.defaultProps={title:"Covid-19 MY Tracker",icon:"fas fa-virus"};var T=u.a.nav(A()),Y=u.a.div(M()),B=F;var P=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement("div",{className:"container"},r.a.createElement(J,null),">")))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d3d82e96.chunk.js.map