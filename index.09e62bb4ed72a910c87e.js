!function(){"use strict";var e,n={298:function(e,n,t){var i=t(29);console.log("module"),(()=>{const e=document.querySelector(".burger__button"),n=document.querySelector(".header__menu");e.addEventListener("click",(()=>{n.classList.toggle("active")}))})(),console.log("test"),(()=>{const e=new i.ZP(".swiper",{modules:[i.W_],slidesPerView:3,spaceBetween:30,speed:200,slideToClikedSlide:!1,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:3},576:{slidesPerView:2},320:{slidesPerView:1}}}),n=document.querySelectorAll(".swiper-slide");n.forEach((t=>{t.closest(".swiper-slide-next")||(window.innerWidth>768?t.style.opacity=.7:t.style.opacity=1,window.addEventListener("resize",(()=>{window.innerWidth>768?t.style.opacity=.7:t.style.opacity=1}))),e.on("slideChangeTransitionEnd",(()=>{n.forEach((e=>{e.closest(".swiper-slide-next")?(e.style.opacity=1,e.style.transition="0.3s all"):window.innerWidth>768?e.style.opacity=.7:e.style.opacity=1}))}))}))})();console.log({name:"Danil",age:"29",language:"JavaScript",framework:"Vue.js"})}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var o=t[e]={exports:{}};return n[e](o,o.exports,i),o.exports}i.m=n,e=[],i.O=function(n,t,r,o){if(!t){var s=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],o=e[u][2];for(var l=!0,a=0;a<t.length;a++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](t[a])}))?t.splice(a--,1):(l=!1,o<s&&(s=o));if(l){e.splice(u--,1);var c=r();void 0!==c&&(n=c)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,r,o]},i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0};i.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,s=t[0],l=t[1],a=t[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(a)var u=a(i)}for(n&&n(t);c<s.length;c++)o=s[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},t=self.webpackChunkliza_english=self.webpackChunkliza_english||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var r=i.O(void 0,[29],(function(){return i(298)}));r=i.O(r)}();
//# sourceMappingURL=index.09e62bb4ed72a910c87e.js.map