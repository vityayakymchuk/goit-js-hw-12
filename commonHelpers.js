import{a as m,S as v,i as L}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function p(s,o){m.defaults.baseURL="https://pixabay.com/api/";const t={key:"43042666-e07e8410a021eff335b7f491d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await m.get("",{params:t})).data}function y(s){const o=document.querySelector(".gallery"),a=s.map(t=>`<li class="list-item"><a href="${t.largeImageURL}">
        <img class="item-img" loading="lazy"     src="${t.webformatURL}" alt="${t.tags}"></a>  
        <div class="container">
        <h3 class="title">Likes</h3>
      <p>${t.likes}</p></div >
      <div class="container">
        <h3 class="title">Views</h3>
      <p>${t.views}</p></div >
      <div class="container">
        <h3 class="title">Comments</h3>
      <p>${t.comments}</p></div >
      <div class="container">
        <h3 class="title">Downloads</h3>
      <p class="info">${t.downloads}</p></div >
        </li>`).join("");o.insertAdjacentHTML("beforeend",a)}const w=document.querySelector(".form"),S=document.querySelector(".search-input"),P=new v(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,enableKeyboard:!0,docClose:!0});w.addEventListener("submit",O);let c,n=1,h;const q=15;async function O(s){s.preventDefault();const o=document.querySelector(".gallery");if(o.innerHTML="",n=1,i(!0),c=S.value,!c)d(),l("Value cannot be empty");else{try{i(!0);const a=await p(c,n);if(a.hits.length===0)d(),l("Sorry, there are no images matching your search query. Please try again!");else{i(!0),h=Math.ceil(a.totalHits/q),b();const t=a.hits;y(t),g();const r=document.querySelector(".list-item").getBoundingClientRect().height*2;window.scrollBy(0,r),P.refresh()}}catch{l("Something wrong=(")}i(!1)}}const l=s=>{L.error({title:"Error",message:s,backgroundColor:"#EF4040",messageColor:"#FFFFFF",maxWidth:300,timeout:2e3,progressBar:!1,position:"topRight",transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:12})},i=s=>{const o=document.querySelector(".loader");o.style.display=s?"block":"none"},f=document.querySelector(".load-more-btn");function g(){f.style.display="block"}function d(){f.style.display="none"}f.addEventListener("click",M);async function M(){n+=1;const o=(await p(c,n)).hits;y(o),g(),b()}function b(){n>=h&&(d(),l("We're sorry, but you've reached the end of search results."))}
//# sourceMappingURL=commonHelpers.js.map
