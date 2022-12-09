(()=>{"use strict";var a={};function l(){for(var a=[],l="ABCDEFGHIJ",e=0;e<=l.length-1;e++)for(var t=0;t<=9;t++)a.push("".concat(l[e]).concat(t));return a=function(a){for(var l,e,t=a.length;0!==t;)e=Math.floor(Math.random()*t),l=a[t-=1],a[t]=a[e],a[e]=l;return a}(a)}function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=a.name,t=a.isAI,d=void 0!==t&&t,s=l();function i(){return s.pop()}return{get name(){return e},get isAI(){return d},generateCoord:i}}function t(a){return function(a){if(Array.isArray(a))return d(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function(a,l){if(!a)return;if("string"==typeof a)return d(a,l);var e=Object.prototype.toString.call(a).slice(8,-1);"Object"===e&&a.constructor&&(e=a.constructor.name);if("Map"===e||"Set"===e)return Array.from(a);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(a,l)}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(a,l){(null==l||l>a.length)&&(l=a.length);for(var e=0,t=new Array(l);e<l;e++)t[e]=a[e];return t}function s(a,l){return function(a){if(Array.isArray(a))return a}(a)||function(a,l){var e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null==e)return;var t,d,s=[],i=!0,c=!1;try{for(e=e.call(a);!(i=(t=e.next()).done)&&(s.push(t.value),!l||s.length!==l);i=!0);}catch(a){c=!0,d=a}finally{try{i||null==e.return||e.return()}finally{if(c)throw d}}return s}(a,l)||function(a,l){if(!a)return;if("string"==typeof a)return i(a,l);var e=Object.prototype.toString.call(a).slice(8,-1);"Object"===e&&a.constructor&&(e=a.constructor.name);if("Map"===e||"Set"===e)return Array.from(a);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(a,l)}(a,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(a,l){(null==l||l>a.length)&&(l=a.length);for(var e=0,t=new Array(l);e<l;e++)t[e]=a[e];return t}function c(){var a=Array(10).fill(null).map((function(){return Array(10).fill(null)}));function l(a){var l=s(a,2),e=l[0],t=l[1];return{column:"ABCDEFGHIJ".indexOf(e),row:Number(t)}}return{get grid(){return a},toXY:l,isFit:function(a,l,e){var d,s,i=a.slice(l);return(d=function(a){return null===a},s=function(a){return null!==a},i.reduce((function(a,l){var e=a.result,i=a.isStopped;return{result:!(i=i||s(l))&&d(l)?[].concat(t(e),[l]):e,isStopped:i}}),{result:[],isStopped:!1}).result).length-e>=0},placeAxis:function(e){return function(t){var d=t.type,s=t.size;return function(t){var i=l(t),c=i.column,o=i.row;switch(e){case"horizontal":!function(l,e,t,d){var s=e,i=e+t;a[l].fill(d,s,i)}(o,c,s,d);break;case"vertical":!function(l,e,t,d){a.forEach((function(a,s){l<=s&&s<l+t&&a.splice(e,1,d)}))}(o,c,s,d);break;default:throw new Error("error in switch axis")}}}},receiveAttack:function(e){var t,d=l(e),s=d.column,i=d.row;switch(a[i][s]){case 0:t={message:"hit",shipType:0},a[i][s]="hit";break;case 1:t={message:"hit",shipType:1},a[i][s]="hit";break;case 2:t={message:"hit",shipType:2},a[i][s]="hit";break;case 3:t={message:"hit",shipType:3},a[i][s]="hit";break;case 4:t={message:"hit",shipType:4},a[i][s]="hit";break;default:t={message:"miss",shipType:null},a[i][s]="miss"}return t},restoreGrid:function(){a=Array(10).fill(null).map((function(){return Array(10).fill(null)}))}}}function o(a){var l=a.name,e=a.type,t=a.size,d=0;return{get name(){return l},get type(){return e},get size(){return t},hit:function(){d+=1},isSunk:function(){return t-d<=0}}}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"==typeof window)return window}}(),(()=>{var l;a.g.importScripts&&(l=a.g.location+"");var e=a.g.document;if(!l&&e&&(e.currentScript&&(l=e.currentScript.src),!l)){var t=e.getElementsByTagName("script");t.length&&(l=t[t.length-1].src)}if(!l)throw new Error("Automatic publicPath is not supported in this browser");l=l.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=l})();const n={get grid1(){return u},get fleet1(){return p},get player1(){return r},get cpuPlayer(){return v},isCpuWin:function(){return!0===p.every((function(a){return!0===a.isSunk()}))},isPlayerWin:function(){return!0===P.every((function(a){return!0===a.isSunk()}))},createPlayer:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r=e({name:a.trim()})},init:function(){v=e({name:"cpu",isAI:!0}),u=c(),f=c(),p=[o({name:"carrier",type:0,size:5}),o({name:"battle ship",type:1,size:4}),o({name:"destroyer",type:2,size:3}),o({name:"submarine",type:3,size:3}),o({name:"patrol boat",type:4,size:2})],P=[o({name:"carrier",type:0,size:5}),o({name:"battle ship",type:1,size:4}),o({name:"destroyer",type:2,size:3}),o({name:"submarine",type:3,size:3}),o({name:"patrol boat",type:4,size:2})],f.placeAxis("horizontal")({type:P[2].type,size:P[2].size})("G0"),f.placeAxis("vertical")({type:P[0].type,size:P[0].size})("F2"),f.placeAxis("horizontal")({type:P[1].type,size:P[1].size})("B4"),f.placeAxis("vertical")({type:P[4].type,size:P[4].size})("B7"),f.placeAxis("horizontal")({type:P[3].type,size:P[3].size})("F9")},playerPlay:function(a){var l={isWin:!1,isHit:!1,isMiss:!1,isSunk:!1,ship:void 0};try{var e=f.receiveAttack(a);if("miss"===e.message)return l.isMiss=!0,l;"hit"===e.message&&(P[e.shipType].hit(),l.isHit=!0),!0===P[e.shipType].isSunk()&&(l.isSunk=!0,l.ship=P[e.shipType])}catch(a){return a}return l},cpuPlay:function(){var a={isWin:!1,isHit:!1,isMiss:!1,isSunk:!1,ship:void 0,coord:""},l=v.generateCoord();a.coord=l;try{var e=u.receiveAttack(l);if("miss"===e.message)return a.isMiss=!0,a;"hit"===e.message&&(p[e.shipType].hit(),a.isHit=!0),!0===p[e.shipType].isSunk()&&(a.isSunk=!0,a.ship=p[e.shipType])}catch(a){return a}return a},reset:function(){f.restoreGrid(),u.restoreGrid(),p=[],P=[]}};var r,v,u,f,p,P;const y=a.p+"images/d64eb9f8f386277d0ce2..svg",m=a.p+"images/fc9148baa20a38d8b056..svg",g={render:function(a){var l=a.player,e=a.domElement,t=document.querySelector(".modal");t.innerHTML='\n    <div class="modal-info">'.concat(l.name,' TAKES THE ROUND</div>\n    <div class="modal-action">\n        <button class="btn">REPLAY</button>\n    </div>\n    '),t.showModal(),t.classList.remove("disabled"),function(a,l,e){a.addEventListener("click",(function(){var a=document.querySelector(".welcome");n.reset(),n.init(),l.close(),e.classList.add("disabled"),l.classList.add("disabled"),a.classList.remove("disabled")}))}(t.querySelector(".btn"),t,e)}},h={render:function(a){var l=a.domArray,e=document.querySelector(".play-ground");e.innerHTML='\n    <div class="play-status">\n    <p>Awaiting orders, Admiral '.concat(n.player1.name,'</p>\n  </div>\n  <div class="play-grid">\n    <div class="friendly-water">\n      <h2 class="title">FRIENDLY WATER</h2>\n      <div class="grid">\n      <div class="cell" local-data="A0" isPopulated-data="false"></div>\n      <div class="cell" local-data="B0" isPopulated-data="false"></div>\n      <div class="cell" local-data="C0" isPopulated-data="false"></div>\n      <div class="cell" local-data="D0" isPopulated-data="false"></div>\n      <div class="cell" local-data="E0" isPopulated-data="false"></div>\n      <div class="cell" local-data="F0" isPopulated-data="false"></div>\n      <div class="cell" local-data="G0" isPopulated-data="false"></div>\n      <div class="cell" local-data="H0" isPopulated-data="false"></div>\n      <div class="cell" local-data="I0" isPopulated-data="false"></div>\n      <div class="cell" local-data="J0" isPopulated-data="false"></div>\n      <div class="cell" local-data="A1" isPopulated-data="false"></div>\n      <div class="cell" local-data="B1" isPopulated-data="false"></div>\n      <div class="cell" local-data="C1" isPopulated-data="false"></div>\n      <div class="cell" local-data="D1" isPopulated-data="false"></div>\n      <div class="cell" local-data="E1" isPopulated-data="false"></div>\n      <div class="cell" local-data="F1" isPopulated-data="false"></div>\n      <div class="cell" local-data="G1" isPopulated-data="false"></div>\n      <div class="cell" local-data="H1" isPopulated-data="false"></div>\n      <div class="cell" local-data="I1" isPopulated-data="false"></div>\n      <div class="cell" local-data="J1" isPopulated-data="false"></div>\n      <div class="cell" local-data="A2" isPopulated-data="false"></div>\n      <div class="cell" local-data="B2" isPopulated-data="false"></div>\n      <div class="cell" local-data="C2" isPopulated-data="false"></div>\n      <div class="cell" local-data="D2" isPopulated-data="false"></div>\n      <div class="cell" local-data="E2" isPopulated-data="false"></div>\n      <div class="cell" local-data="F2" isPopulated-data="false"></div>\n      <div class="cell" local-data="G2" isPopulated-data="false"></div>\n      <div class="cell" local-data="H2" isPopulated-data="false"></div>\n      <div class="cell" local-data="I2" isPopulated-data="false"></div>\n      <div class="cell" local-data="J2" isPopulated-data="false"></div>\n      <div class="cell" local-data="A3" isPopulated-data="false"></div>\n      <div class="cell" local-data="B3" isPopulated-data="false"></div>\n      <div class="cell" local-data="C3" isPopulated-data="false"></div>\n      <div class="cell" local-data="D3" isPopulated-data="false"></div>\n      <div class="cell" local-data="E3" isPopulated-data="false"></div>\n      <div class="cell" local-data="F3" isPopulated-data="false"></div>\n      <div class="cell" local-data="G3" isPopulated-data="false"></div>\n      <div class="cell" local-data="H3" isPopulated-data="false"></div>\n      <div class="cell" local-data="I3" isPopulated-data="false"></div>\n      <div class="cell" local-data="J3" isPopulated-data="false"></div>\n      <div class="cell" local-data="A4" isPopulated-data="false"></div>\n      <div class="cell" local-data="B4" isPopulated-data="false"></div>\n      <div class="cell" local-data="C4" isPopulated-data="false"></div>\n      <div class="cell" local-data="D4" isPopulated-data="false"></div>\n      <div class="cell" local-data="E4" isPopulated-data="false"></div>\n      <div class="cell" local-data="F4" isPopulated-data="false"></div>\n      <div class="cell" local-data="G4" isPopulated-data="false"></div>\n      <div class="cell" local-data="H4" isPopulated-data="false"></div>\n      <div class="cell" local-data="I4" isPopulated-data="false"></div>\n      <div class="cell" local-data="J4" isPopulated-data="false"></div>\n      <div class="cell" local-data="A5" isPopulated-data="false"></div>\n      <div class="cell" local-data="B5" isPopulated-data="false"></div>\n      <div class="cell" local-data="C5" isPopulated-data="false"></div>\n      <div class="cell" local-data="D5" isPopulated-data="false"></div>\n      <div class="cell" local-data="E5" isPopulated-data="false"></div>\n      <div class="cell" local-data="F5" isPopulated-data="false"></div>\n      <div class="cell" local-data="G5" isPopulated-data="false"></div>\n      <div class="cell" local-data="H5" isPopulated-data="false"></div>\n      <div class="cell" local-data="I5" isPopulated-data="false"></div>\n      <div class="cell" local-data="J5" isPopulated-data="false"></div>\n      <div class="cell" local-data="A6" isPopulated-data="false"></div>\n      <div class="cell" local-data="B6" isPopulated-data="false"></div>\n      <div class="cell" local-data="C6" isPopulated-data="false"></div>\n      <div class="cell" local-data="D6" isPopulated-data="false"></div>\n      <div class="cell" local-data="E6" isPopulated-data="false"></div>\n      <div class="cell" local-data="F6" isPopulated-data="false"></div>\n      <div class="cell" local-data="G6" isPopulated-data="false"></div>\n      <div class="cell" local-data="H6" isPopulated-data="false"></div>\n      <div class="cell" local-data="I6" isPopulated-data="false"></div>\n      <div class="cell" local-data="J6" isPopulated-data="false"></div>\n      <div class="cell" local-data="A7" isPopulated-data="false"></div>\n      <div class="cell" local-data="B7" isPopulated-data="false"></div>\n      <div class="cell" local-data="C7" isPopulated-data="false"></div>\n      <div class="cell" local-data="D7" isPopulated-data="false"></div>\n      <div class="cell" local-data="E7" isPopulated-data="false"></div>\n      <div class="cell" local-data="F7" isPopulated-data="false"></div>\n      <div class="cell" local-data="G7" isPopulated-data="false"></div>\n      <div class="cell" local-data="H7" isPopulated-data="false"></div>\n      <div class="cell" local-data="I7" isPopulated-data="false"></div>\n      <div class="cell" local-data="J7" isPopulated-data="false"></div>\n      <div class="cell" local-data="A8" isPopulated-data="false"></div>\n      <div class="cell" local-data="B8" isPopulated-data="false"></div>\n      <div class="cell" local-data="C8" isPopulated-data="false"></div>\n      <div class="cell" local-data="D8" isPopulated-data="false"></div>\n      <div class="cell" local-data="E8" isPopulated-data="false"></div>\n      <div class="cell" local-data="F8" isPopulated-data="false"></div>\n      <div class="cell" local-data="G8" isPopulated-data="false"></div>\n      <div class="cell" local-data="H8" isPopulated-data="false"></div>\n      <div class="cell" local-data="I8" isPopulated-data="false"></div>\n      <div class="cell" local-data="J8" isPopulated-data="false"></div>\n      <div class="cell" local-data="A9" isPopulated-data="false"></div>\n      <div class="cell" local-data="B9" isPopulated-data="false"></div>\n      <div class="cell" local-data="C9" isPopulated-data="false"></div>\n      <div class="cell" local-data="D9" isPopulated-data="false"></div>\n      <div class="cell" local-data="E9" isPopulated-data="false"></div>\n      <div class="cell" local-data="F9" isPopulated-data="false"></div>\n      <div class="cell" local-data="G9" isPopulated-data="false"></div>\n      <div class="cell" local-data="H9" isPopulated-data="false"></div>\n      <div class="cell" local-data="I9" isPopulated-data="false"></div>\n      <div class="cell" local-data="J9" isPopulated-data="false"></div>\n      </div>\n    </div>\n    <div class="enemy-water">\n      <h2 class="title">ENEMY WATER</h2>\n      <div class="grid">\n        <div class="cell" local-data="A0" isPopulated-data="false"></div>\n        <div class="cell" local-data="B0" isPopulated-data="false"></div>\n        <div class="cell" local-data="C0" isPopulated-data="false"></div>\n        <div class="cell" local-data="D0" isPopulated-data="false"></div>\n        <div class="cell" local-data="E0" isPopulated-data="false"></div>\n        <div class="cell" local-data="F0" isPopulated-data="false"></div>\n        <div class="cell" local-data="G0" isPopulated-data="false"></div>\n        <div class="cell" local-data="H0" isPopulated-data="false"></div>\n        <div class="cell" local-data="I0" isPopulated-data="false"></div>\n        <div class="cell" local-data="J0" isPopulated-data="false"></div>\n        <div class="cell" local-data="A1" isPopulated-data="false"></div>\n        <div class="cell" local-data="B1" isPopulated-data="false"></div>\n        <div class="cell" local-data="C1" isPopulated-data="false"></div>\n        <div class="cell" local-data="D1" isPopulated-data="false"></div>\n        <div class="cell" local-data="E1" isPopulated-data="false"></div>\n        <div class="cell" local-data="F1" isPopulated-data="false"></div>\n        <div class="cell" local-data="G1" isPopulated-data="false"></div>\n        <div class="cell" local-data="H1" isPopulated-data="false"></div>\n        <div class="cell" local-data="I1" isPopulated-data="false"></div>\n        <div class="cell" local-data="J1" isPopulated-data="false"></div>\n        <div class="cell" local-data="A2" isPopulated-data="false"></div>\n        <div class="cell" local-data="B2" isPopulated-data="false"></div>\n        <div class="cell" local-data="C2" isPopulated-data="false"></div>\n        <div class="cell" local-data="D2" isPopulated-data="false"></div>\n        <div class="cell" local-data="E2" isPopulated-data="false"></div>\n        <div class="cell" local-data="F2" isPopulated-data="false"></div>\n        <div class="cell" local-data="G2" isPopulated-data="false"></div>\n        <div class="cell" local-data="H2" isPopulated-data="false"></div>\n        <div class="cell" local-data="I2" isPopulated-data="false"></div>\n        <div class="cell" local-data="J2" isPopulated-data="false"></div>\n        <div class="cell" local-data="A3" isPopulated-data="false"></div>\n        <div class="cell" local-data="B3" isPopulated-data="false"></div>\n        <div class="cell" local-data="C3" isPopulated-data="false"></div>\n        <div class="cell" local-data="D3" isPopulated-data="false"></div>\n        <div class="cell" local-data="E3" isPopulated-data="false"></div>\n        <div class="cell" local-data="F3" isPopulated-data="false"></div>\n        <div class="cell" local-data="G3" isPopulated-data="false"></div>\n        <div class="cell" local-data="H3" isPopulated-data="false"></div>\n        <div class="cell" local-data="I3" isPopulated-data="false"></div>\n        <div class="cell" local-data="J3" isPopulated-data="false"></div>\n        <div class="cell" local-data="A4" isPopulated-data="false"></div>\n        <div class="cell" local-data="B4" isPopulated-data="false"></div>\n        <div class="cell" local-data="C4" isPopulated-data="false"></div>\n        <div class="cell" local-data="D4" isPopulated-data="false"></div>\n        <div class="cell" local-data="E4" isPopulated-data="false"></div>\n        <div class="cell" local-data="F4" isPopulated-data="false"></div>\n        <div class="cell" local-data="G4" isPopulated-data="false"></div>\n        <div class="cell" local-data="H4" isPopulated-data="false"></div>\n        <div class="cell" local-data="I4" isPopulated-data="false"></div>\n        <div class="cell" local-data="J4" isPopulated-data="false"></div>\n        <div class="cell" local-data="A5" isPopulated-data="false"></div>\n        <div class="cell" local-data="B5" isPopulated-data="false"></div>\n        <div class="cell" local-data="C5" isPopulated-data="false"></div>\n        <div class="cell" local-data="D5" isPopulated-data="false"></div>\n        <div class="cell" local-data="E5" isPopulated-data="false"></div>\n        <div class="cell" local-data="F5" isPopulated-data="false"></div>\n        <div class="cell" local-data="G5" isPopulated-data="false"></div>\n        <div class="cell" local-data="H5" isPopulated-data="false"></div>\n        <div class="cell" local-data="I5" isPopulated-data="false"></div>\n        <div class="cell" local-data="J5" isPopulated-data="false"></div>\n        <div class="cell" local-data="A6" isPopulated-data="false"></div>\n        <div class="cell" local-data="B6" isPopulated-data="false"></div>\n        <div class="cell" local-data="C6" isPopulated-data="false"></div>\n        <div class="cell" local-data="D6" isPopulated-data="false"></div>\n        <div class="cell" local-data="E6" isPopulated-data="false"></div>\n        <div class="cell" local-data="F6" isPopulated-data="false"></div>\n        <div class="cell" local-data="G6" isPopulated-data="false"></div>\n        <div class="cell" local-data="H6" isPopulated-data="false"></div>\n        <div class="cell" local-data="I6" isPopulated-data="false"></div>\n        <div class="cell" local-data="J6" isPopulated-data="false"></div>\n        <div class="cell" local-data="A7" isPopulated-data="false"></div>\n        <div class="cell" local-data="B7" isPopulated-data="false"></div>\n        <div class="cell" local-data="C7" isPopulated-data="false"></div>\n        <div class="cell" local-data="D7" isPopulated-data="false"></div>\n        <div class="cell" local-data="E7" isPopulated-data="false"></div>\n        <div class="cell" local-data="F7" isPopulated-data="false"></div>\n        <div class="cell" local-data="G7" isPopulated-data="false"></div>\n        <div class="cell" local-data="H7" isPopulated-data="false"></div>\n        <div class="cell" local-data="I7" isPopulated-data="false"></div>\n        <div class="cell" local-data="J7" isPopulated-data="false"></div>\n        <div class="cell" local-data="A8" isPopulated-data="false"></div>\n        <div class="cell" local-data="B8" isPopulated-data="false"></div>\n        <div class="cell" local-data="C8" isPopulated-data="false"></div>\n        <div class="cell" local-data="D8" isPopulated-data="false"></div>\n        <div class="cell" local-data="E8" isPopulated-data="false"></div>\n        <div class="cell" local-data="F8" isPopulated-data="false"></div>\n        <div class="cell" local-data="G8" isPopulated-data="false"></div>\n        <div class="cell" local-data="H8" isPopulated-data="false"></div>\n        <div class="cell" local-data="I8" isPopulated-data="false"></div>\n        <div class="cell" local-data="J8" isPopulated-data="false"></div>\n        <div class="cell" local-data="A9" isPopulated-data="false"></div>\n        <div class="cell" local-data="B9" isPopulated-data="false"></div>\n        <div class="cell" local-data="C9" isPopulated-data="false"></div>\n        <div class="cell" local-data="D9" isPopulated-data="false"></div>\n        <div class="cell" local-data="E9" isPopulated-data="false"></div>\n        <div class="cell" local-data="F9" isPopulated-data="false"></div>\n        <div class="cell" local-data="G9" isPopulated-data="false"></div>\n        <div class="cell" local-data="H9" isPopulated-data="false"></div>\n        <div class="cell" local-data="I9" isPopulated-data="false"></div>\n        <div class="cell" local-data="J9" isPopulated-data="false"></div>\n      </div>\n    </div>\n  </div>\n    ');var t=e.querySelectorAll(".friendly-water .cell"),d=e.querySelectorAll(".enemy-water .cell"),s=e.querySelector(".enemy-water > .grid"),i=(e.querySelector(".friendly-water > .grid"),e.querySelector(".play-status > p"));!function(a,l){Array.from(a).forEach((function(a,e){"true"===l[e].getAttribute("isPopulated-data")&&(a.style.backgroundColor="grey")}))}(t,l),function(a,l,e,t){function d(l,t,d,s){var i=Array.from(a);setTimeout((function(){e.textContent="".concat(s),i.find((function(a){return a.getAttribute("local-data")===d})).appendChild(t)}),l)}l.forEach((function(a){a.addEventListener("mouseover",(function(a){"true"===a.target.getAttribute("isPopulated-data")?(a.target.style.backgroundColor="red",a.target.style.cursor="not-allowed"):(a.target.style.cursor="cell",a.target.style.backgroundColor="green")}))})),l.forEach((function(a){a.addEventListener("mouseout",(function(a){a.target.style.backgroundColor="hsl(201, 90%, 27%)"}))})),t.addEventListener("click",(function(){if(!0!==n.isPlayerWin())if(!0!==n.isCpuWin());else{var a=document.querySelector(".play-ground");g.render({player:n.cpuPlayer,domElement:a})}else{var l=document.querySelector(".play-ground");g.render({player:n.player1,domElement:l})}})),l.forEach((function(a){a.addEventListener("click",(function(a){var l=document.createElement("img");l.src=y;var t=document.createElement("img");t.src=m;var s=document.createElement("img");s.src=y;var i=document.createElement("img");if(i.src=m,l.addEventListener("click",(function(a){a.stopPropagation()})),t.addEventListener("click",(function(a){a.stopPropagation()})),"true"!==a.target.getAttribute("isPopulated-data")){var c=n.playerPlay(a.target.getAttribute("local-data"));!0===c.isMiss&&(e.textContent="".concat(n.player1.name," fires a shot at enemy water and miss"),a.target.appendChild(t),a.target.setAttribute("isPopulated-data","true")),!0===c.isHit&&(e.textContent="".concat(n.player1.name," fires a shot at enemy water and hit"),a.target.appendChild(l),a.target.setAttribute("isPopulated-data","true")),!0===c.isSunk&&(e.textContent="".concat(n.player1.name," fires a shot at enemy water and sunk ").concat(c.ship.name));var o=n.cpuPlay();!0===o.isMiss&&d(1200,i,o.coord,"the enemy fires a shot at your water and miss"),!0===o.isHit&&d(1200,s,o.coord,"the enemy fires a shot at your water and hit"),!0===o.isSunk&&(e.textContent="the enemy fires a shot at your water and sunk ".concat(o.ship.name))}}))}))}(t,d,i,s)}};function A(a){return function(a){if(Array.isArray(a))return b(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function(a,l){if(!a)return;if("string"==typeof a)return b(a,l);var e=Object.prototype.toString.call(a).slice(8,-1);"Object"===e&&a.constructor&&(e=a.constructor.name);if("Map"===e||"Set"===e)return Array.from(a);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(a,l)}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(a,l){(null==l||l>a.length)&&(l=a.length);for(var e=0,t=new Array(l);e<l;e++)t[e]=a[e];return t}const E={render:function(a){var l=a.player,e=a.playerGrid,t=a.playerFleet,d=document.querySelector(".place-ship");d.innerHTML='\n    <div class="place-ship-action">\n      <div class="command">\n        <span class="player-name">'.concat(l.name,'</span>\n        <span>place your carriers</span>\n      </div>\n      <button class="change-dir">\n        <span>AXIS:</span><span class="dir">X</span>\n      </button>\n    </div>\n    <div class="place-ship-body">\n      <div class="grid">\n      <div class="cell" local-data="A0" isPopulated-data="false"></div>\n      <div class="cell" local-data="B0" isPopulated-data="false"></div>\n      <div class="cell" local-data="C0" isPopulated-data="false"></div>\n      <div class="cell" local-data="D0" isPopulated-data="false"></div>\n      <div class="cell" local-data="E0" isPopulated-data="false"></div>\n      <div class="cell" local-data="F0" isPopulated-data="false"></div>\n      <div class="cell" local-data="G0" isPopulated-data="false"></div>\n      <div class="cell" local-data="H0" isPopulated-data="false"></div>\n      <div class="cell" local-data="I0" isPopulated-data="false"></div>\n      <div class="cell" local-data="J0" isPopulated-data="false"></div>\n      <div class="cell" local-data="A1" isPopulated-data="false"></div>\n      <div class="cell" local-data="B1" isPopulated-data="false"></div>\n      <div class="cell" local-data="C1" isPopulated-data="false"></div>\n      <div class="cell" local-data="D1" isPopulated-data="false"></div>\n      <div class="cell" local-data="E1" isPopulated-data="false"></div>\n      <div class="cell" local-data="F1" isPopulated-data="false"></div>\n      <div class="cell" local-data="G1" isPopulated-data="false"></div>\n      <div class="cell" local-data="H1" isPopulated-data="false"></div>\n      <div class="cell" local-data="I1" isPopulated-data="false"></div>\n      <div class="cell" local-data="J1" isPopulated-data="false"></div>\n      <div class="cell" local-data="A2" isPopulated-data="false"></div>\n      <div class="cell" local-data="B2" isPopulated-data="false"></div>\n      <div class="cell" local-data="C2" isPopulated-data="false"></div>\n      <div class="cell" local-data="D2" isPopulated-data="false"></div>\n      <div class="cell" local-data="E2" isPopulated-data="false"></div>\n      <div class="cell" local-data="F2" isPopulated-data="false"></div>\n      <div class="cell" local-data="G2" isPopulated-data="false"></div>\n      <div class="cell" local-data="H2" isPopulated-data="false"></div>\n      <div class="cell" local-data="I2" isPopulated-data="false"></div>\n      <div class="cell" local-data="J2" isPopulated-data="false"></div>\n      <div class="cell" local-data="A3" isPopulated-data="false"></div>\n      <div class="cell" local-data="B3" isPopulated-data="false"></div>\n      <div class="cell" local-data="C3" isPopulated-data="false"></div>\n      <div class="cell" local-data="D3" isPopulated-data="false"></div>\n      <div class="cell" local-data="E3" isPopulated-data="false"></div>\n      <div class="cell" local-data="F3" isPopulated-data="false"></div>\n      <div class="cell" local-data="G3" isPopulated-data="false"></div>\n      <div class="cell" local-data="H3" isPopulated-data="false"></div>\n      <div class="cell" local-data="I3" isPopulated-data="false"></div>\n      <div class="cell" local-data="J3" isPopulated-data="false"></div>\n      <div class="cell" local-data="A4" isPopulated-data="false"></div>\n      <div class="cell" local-data="B4" isPopulated-data="false"></div>\n      <div class="cell" local-data="C4" isPopulated-data="false"></div>\n      <div class="cell" local-data="D4" isPopulated-data="false"></div>\n      <div class="cell" local-data="E4" isPopulated-data="false"></div>\n      <div class="cell" local-data="F4" isPopulated-data="false"></div>\n      <div class="cell" local-data="G4" isPopulated-data="false"></div>\n      <div class="cell" local-data="H4" isPopulated-data="false"></div>\n      <div class="cell" local-data="I4" isPopulated-data="false"></div>\n      <div class="cell" local-data="J4" isPopulated-data="false"></div>\n      <div class="cell" local-data="A5" isPopulated-data="false"></div>\n      <div class="cell" local-data="B5" isPopulated-data="false"></div>\n      <div class="cell" local-data="C5" isPopulated-data="false"></div>\n      <div class="cell" local-data="D5" isPopulated-data="false"></div>\n      <div class="cell" local-data="E5" isPopulated-data="false"></div>\n      <div class="cell" local-data="F5" isPopulated-data="false"></div>\n      <div class="cell" local-data="G5" isPopulated-data="false"></div>\n      <div class="cell" local-data="H5" isPopulated-data="false"></div>\n      <div class="cell" local-data="I5" isPopulated-data="false"></div>\n      <div class="cell" local-data="J5" isPopulated-data="false"></div>\n      <div class="cell" local-data="A6" isPopulated-data="false"></div>\n      <div class="cell" local-data="B6" isPopulated-data="false"></div>\n      <div class="cell" local-data="C6" isPopulated-data="false"></div>\n      <div class="cell" local-data="D6" isPopulated-data="false"></div>\n      <div class="cell" local-data="E6" isPopulated-data="false"></div>\n      <div class="cell" local-data="F6" isPopulated-data="false"></div>\n      <div class="cell" local-data="G6" isPopulated-data="false"></div>\n      <div class="cell" local-data="H6" isPopulated-data="false"></div>\n      <div class="cell" local-data="I6" isPopulated-data="false"></div>\n      <div class="cell" local-data="J6" isPopulated-data="false"></div>\n      <div class="cell" local-data="A7" isPopulated-data="false"></div>\n      <div class="cell" local-data="B7" isPopulated-data="false"></div>\n      <div class="cell" local-data="C7" isPopulated-data="false"></div>\n      <div class="cell" local-data="D7" isPopulated-data="false"></div>\n      <div class="cell" local-data="E7" isPopulated-data="false"></div>\n      <div class="cell" local-data="F7" isPopulated-data="false"></div>\n      <div class="cell" local-data="G7" isPopulated-data="false"></div>\n      <div class="cell" local-data="H7" isPopulated-data="false"></div>\n      <div class="cell" local-data="I7" isPopulated-data="false"></div>\n      <div class="cell" local-data="J7" isPopulated-data="false"></div>\n      <div class="cell" local-data="A8" isPopulated-data="false"></div>\n      <div class="cell" local-data="B8" isPopulated-data="false"></div>\n      <div class="cell" local-data="C8" isPopulated-data="false"></div>\n      <div class="cell" local-data="D8" isPopulated-data="false"></div>\n      <div class="cell" local-data="E8" isPopulated-data="false"></div>\n      <div class="cell" local-data="F8" isPopulated-data="false"></div>\n      <div class="cell" local-data="G8" isPopulated-data="false"></div>\n      <div class="cell" local-data="H8" isPopulated-data="false"></div>\n      <div class="cell" local-data="I8" isPopulated-data="false"></div>\n      <div class="cell" local-data="J8" isPopulated-data="false"></div>\n      <div class="cell" local-data="A9" isPopulated-data="false"></div>\n      <div class="cell" local-data="B9" isPopulated-data="false"></div>\n      <div class="cell" local-data="C9" isPopulated-data="false"></div>\n      <div class="cell" local-data="D9" isPopulated-data="false"></div>\n      <div class="cell" local-data="E9" isPopulated-data="false"></div>\n      <div class="cell" local-data="F9" isPopulated-data="false"></div>\n      <div class="cell" local-data="G9" isPopulated-data="false"></div>\n      <div class="cell" local-data="H9" isPopulated-data="false"></div>\n      <div class="cell" local-data="I9" isPopulated-data="false"></div>\n      <div class="cell" local-data="J9" isPopulated-data="false"></div>\n      </div>\n    </div>\n    <div class="place-ship-footer">\n      <button class="next-phase">NEXT</button>\n    </div>\n    '),function(a,l,e,t,d){var s=Array.from(l),i="horizontal",c=A(t);d.addEventListener("click",(function(){if(!(c.length>0)){var a=document.querySelector(".place-ship"),l=document.querySelector(".play-ground");a.classList.add("disabled"),l.classList.remove("disabled"),h.render({domArray:s})}})),a.addEventListener("click",(function(){var l=a.querySelector(".dir");"X"===l.textContent?(l.textContent="Y",i="vertical"):(l.textContent="X",i="horizontal")}));var o=function(a){for(var l=A(a),e=[];l.length;)e.push(l.splice(0,10));return e}(s);function n(a,l,e){a.slice(l,e).forEach((function(a){a.style.backgroundColor="grey"}))}function r(a,l,e){a.slice(l,e).forEach((function(a){"false"===a.getAttribute("isPopulated-data")&&(a.style.backgroundColor="hsl(201, 90%, 27%)")}))}function v(a,l,e){a.slice(l,e).forEach((function(a){a.setAttribute("isPopulated-data","true")}))}function u(a){a.target.style.backgroundColor="red"}function f(a){"false"===a.target.getAttribute("isPopulated-data")?a.target.style.backgroundColor="hsl(201, 90%, 27%)":"true"===a.target.getAttribute("isPopulated-data")&&(a.target.style.backgroundColor="grey")}s.forEach((function(a){a.addEventListener("mouseover",(function(a){var l=c[0];if(void 0!==l){var t=e.toXY(a.target.getAttribute("local-data")),d=t.column,s=t.row;if("horizontal"===i){var r=e.isFit(e.grid[s],d,c[0].size);!1===r&&(a.target.style.cursor="not-allowed",u(a)),!0===r&&(a.target.style.cursor="cell",n(o[s],d,d+l.size))}if("vertical"===i){var v=function(a,l){return a.map((function(a){return a[l]}))},f=e.isFit(v(e.grid,d),s,c[0].size);!1===f&&(a.target.style.cursor="not-allowed",u(a)),!0===f&&(a.target.style.cursor="cell",n(v(o,d),s,s+l.size))}}}))})),s.forEach((function(a){a.addEventListener("mouseout",(function(a){var l=c[0];if(void 0!==l){var t=e.toXY(a.target.getAttribute("local-data")),d=t.column,s=t.row;if("horizontal"===i){var n=e.isFit(e.grid[s],d,c[0].size);!1===n&&f(a),!0===n&&r(o[s],d,d+l.size)}if("vertical"===i){var v=function(a,l){return a.map((function(a){return a[l]}))},u=e.isFit(v(e.grid,d),s,c[0].size);!1===u&&f(a),!0===u&&r(v(o,d),s,s+l.size)}}}))})),s.forEach((function(a){a.addEventListener("click",(function(a){if("true"!==a.target.getAttribute("isPopulated-data")){var l,t,d=e.toXY(a.target.getAttribute("local-data")),s=d.column,r=d.row;if("horizontal"===i){try{if(!1===e.isFit(e.grid[r],s,c[0].size))return}catch(a){return}var u=c.shift();if(void 0===u)return;a.target.style.cursor="cell";var f=o[r];n(f,s,s+u.size),v(f,s,s+u.size),e.placeAxis(i)({type:u.type,size:u.size})(a.target.getAttribute("local-data"))}if("vertical"===i){try{if(!1===e.isFit((l=e.grid,t=s,l.map((function(a){return a[t]}))),r,c[0].size))return}catch(a){return}var p=c.shift();if(void 0===p)return;a.target.style.cursor="cell";var P=function(a,l){return a.map((function(a){return a[l]}))}(o,s);n(P,r,r+p.size),v(P,r,r+p.size),e.placeAxis(i)({type:p.type,size:p.size})(a.target.getAttribute("local-data"))}}}))}))}(d.querySelector(".change-dir"),d.querySelectorAll(".cell"),e,t,d.querySelector(".next-phase"))}},C=a.p+"images/46ed26edf30e44f7fbdc..png",S={render:function(){document.querySelector(".welcome").innerHTML='\n    <div class="welcome-header">\n        <img src="'.concat(C,'" alt="game title" />\n    </div>\n    <div class="welcome-body">\n        <form id="form-player">\n            <div class="form-action">\n                <label for="player-name">ENTER PLAYER NAME</label>\n                <input\n                    type="text"\n                    name="playerName"\n                    id="player-name"\n                    placeholder="BATTLESHIP COMBATANT"\n                />\n                <span class="form-message disabled">name required</span>\n            </div>\n            <div class="form-action">\n                <button type="submit">START GAME</button>\n            </div>\n        </form>\n    </div>\n    ');var a=document.querySelector(".welcome"),l=document.querySelector("#form-player"),e=l.querySelector("#player-name"),t=l.querySelector(".form-message"),d=document.querySelector(".place-ship");n.init(),function(a,l,e,t,d){e.addEventListener("keydown",(function(){!1===t.classList.contains("disabled")&&t.classList.add("disabled")})),l.addEventListener("submit",(function(s){if(s.preventDefault(),void 0!==e.value&&0!==e.value.trim().length){n.createPlayer(e.value);var i=n.player1;a.classList.add("disabled"),d.classList.remove("disabled"),E.render({player:i,playerGrid:n.grid1,playerFleet:n.fleet1}),l.reset()}else t.classList.remove("disabled")}))}(a,l,e,t,d)}};S.render()})();