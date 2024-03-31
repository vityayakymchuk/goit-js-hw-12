import{a as m,S as L,i as w}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function p(s,r){m.defaults.baseURL="https://pixabay.com/api/";const t={key:"43042666-e07e8410a021eff335b7f491d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};return(await m.get("",{params:t})).data}function y(s){const r=document.querySelector(".gallery"),a=s.map(t=>`<li class="list-item"><a href="${t.largeImageURL}">
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
        </li>`).join("");r.insertAdjacentHTML("beforeend",a)}const S=document.querySelector(".form"),P=document.querySelector(".search-input"),h=new L(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,enableKeyboard:!0,docClose:!0});S.addEventListener("submit",O);let c,n=1,g;const q=15;async function O(s){s.preventDefault();const r=document.querySelector(".gallery");if(r.innerHTML="",n=1,i(!0),c=P.value,!c)d(),l("Value cannot be empty");else{try{i(!0);const a=await p(c,n);if(a.hits.length===0)d(),l("Sorry, there are no images matching your search query. Please try again!");else try{i(!0),g=Math.ceil(a.totalHits/q),v();const t=a.hits;y(t),b();const o=document.querySelector(".list-item").getBoundingClientRect().height*2;window.scrollBy(0,o),h.refresh()}catch{console.log("makeGallery error")}}catch{l("Something wrong=(")}i(!1)}}const l=s=>{w.error({title:"Error",message:s,backgroundColor:"#EF4040",messageColor:"#FFFFFF",maxWidth:300,timeout:2e3,progressBar:!1,position:"topRight",transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:12})},i=s=>{const r=document.querySelector(".loader");r.style.display=s?"block":"none"},f=document.querySelector(".load-more-btn");function b(){f.style.display="block"}function d(){f.style.display="none"}f.addEventListener("click",M);async function M(){n+=1;const r=(await p(c,n)).hits;y(r),b(),h.refresh(),v()}function v(){n>=g&&(d(),l("We're sorry, but you've reached the end of search results."))}
//# sourceMappingURL=commonHelpers.js.map
