(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(25)},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=t(9),l=t(3),u=t(2),m=t(5),g=function(e){for(var n=new Array(e.length).fill(!1),t=0;t<n.length;t++){var r=n.reduce(function(e,n,t){return n||e.push(t),e},[]);n[r[Math.floor(Math.random()*r.length)]]=e[t]}return n},f=t(1);function d(){var e=Object(u.a)(["\n  text-align: right;\n  font-size: 2rem;\n  padding-right: 10%\n"]);return d=function(){return e},e}function s(){var e=Object(u.a)(["\n  font-size: 3rem;\n  text-align: center;\n  color: ",";\n  border-left: 2px solid ",";\n  border-right: 2px solid ",";\n"]);return s=function(){return e},e}function p(){var e=Object(u.a)(["\n  font-size: 5rem;\n  transform: skew(-20deg);\n  text-align: center;\n"]);return p=function(){return e},e}function h(){var e=Object(u.a)(["\n  background-color: ",";\n  margin: 0;\n  padding: 0;\n  color: ",";\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n  border-bottom: 4px solid ",";\n"]);return h=function(){return e},e}var b=f.c.header(h(),function(e){return e.theme.red},function(e){return e.theme.white},function(e){return e.theme.black}),j=f.c.h1(p()),v=f.c.span(s(),function(e){return e.theme.offWhite},function(e){return e.theme.grey},function(e){return e.theme.grey}),x=f.c.span(d()),k=function(e){var n=e.children,t=e.score,r=e.topScore;return a.a.createElement(b,null,a.a.createElement(j,null,"Clicky Game"),a.a.createElement(v,null,n),a.a.createElement(x,null,"Score: ",t," | Top Score: ",r))};function y(){var e=Object(u.a)(["\n  margin: 0;\n  padding: 1rem;\n  background-color: ",";\n  color: ","\n  text-align: center;\n  border-bottom: 3px solid ",";\n  h1 {\n    font-size: 4rem;\n  }\n  p {\n    font-size: 3rem;\n  }\n"]);return y=function(){return e},e}var E=f.c.div(y(),function(e){return e.theme.grey},function(e){return e.theme.offWhite},function(e){return e.theme.black}),w=function(){return a.a.createElement(E,null,a.a.createElement("h1",null,"Clicky Game!"),a.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!"))};function O(){var e=Object(u.a)(["\n  max-width: 100%;\n  max-height: 30rem;\n"]);return O=function(){return e},e}function C(){var e=Object(u.a)(["\n  box-shadow: ",";\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background-color: white;\n  margin: 2rem;\n  height: 100%;\n  border: 4px solid ",";\n  border-radius: 3%;\n  transform: scale(1);\n  transition: .15s all ease-in-out;\n  &:hover {\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);\n    transform: scale(1.03);\n  }\n"]);return C=function(){return e},e}var z=f.c.div(C(),function(e){return e.theme.bs},function(e){return e.theme.lightGrey}),S=f.c.img(O()),W=function(e){var n=e.image,t=n.name,r=n.id,i=n.image;return a.a.createElement(z,{onClick:function(){return e.handleClick(r)}},a.a.createElement(S,{alt:t,"img-id":r,src:i}))};function A(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 1rem;\n  align-items: center;\n  max-width: ",";\n  margin: 5rem auto;\n"]);return A=function(){return e},e}var G=f.c.div(A(),function(e){return e.theme.maxWidth}),D=function(e){return a.a.createElement(G,null,e.images.map(function(n){return a.a.createElement(W,{key:n.id,image:n,handleClick:e.handleClick})}))};function Y(){var e=Object(u.a)(["\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.5rem;\n    line-height: 2;\n    font-family: 'arial';\n    background-color: ","\n  }\n"]);return Y=function(){return e},e}var F={red:"#FF0000",white:"#f0f0f0",black:"#1b1b1b",grey:"#3A3A3A",lightGrey:"#E1E1E1",offWhite:"#EDEDED",maxWidth:"1000px",bs:"0 12px 24px 0 rgba(0, 0, 0, 0.09)"},I=Object(f.b)(Y(),F.offWhite);var J=function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],i=n[1],o=Object(r.useState)(0),u=Object(l.a)(o,2),d=u[0],s=u[1],p=Object(r.useState)("Click an image to begin"),h=Object(l.a)(p,2),b=h[0],j=h[1],v=Object(r.useState)(g(Object(c.a)(m))),x=Object(l.a)(v,2),y=x[0],E=x[1],O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t.length;j(e?"You won! Play again by clicking an image.":"You lost. Your score was ".concat(n,". Click an image to play again.")),n>d&&s(n),i([])};return a.a.createElement(f.a,{theme:F},a.a.createElement("div",{className:"App"},a.a.createElement(k,{score:t.length,topScore:d},b),a.a.createElement(w,null),a.a.createElement(D,{images:y,pickedImages:t,handleClick:function(e){E(g(m)),t.includes(e)?O():function(e){i([].concat(Object(c.a)(t),[e]));var n=t.length;0===n?j("Good luck!"):n===y.length-1?O(!0):j("Correct! Pick another image.")}(e)}}),a.a.createElement(I,null)))};o.a.render(a.a.createElement(J,null),document.getElementById("root"))},5:function(e){e.exports=[{id:1,image:"/images/apple.jpg",name:"apple"},{id:2,image:"/images/blueberry.jpg",name:"blueberry"},{id:3,image:"/images/grape.jpg",name:"grape"},{id:4,image:"/images/lemon.jpg",name:"lemon"},{id:5,image:"/images/orange.jpg",name:"orange"},{id:6,image:"/images/pear.jpg",name:"pear"},{id:7,image:"/images/pineapple.jpg",name:"pineapple"},{id:8,image:"/images/strawberry.jpg",name:"strawberry"},{id:9,image:"/images/watermelon.jpg",name:"watermelon"}]}},[[14,1,2]]]);
//# sourceMappingURL=main.61dcd2f1.chunk.js.map