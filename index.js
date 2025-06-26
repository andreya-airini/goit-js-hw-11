import{a as f,S as y,i as l}from"./assets/vendor-67BWzQEt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="51048737-dc03a0e07e33d800e7c2950e1",g="https://pixabay.com/api/";function h(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(g,{params:o}).then(r=>r.data.hits).catch(r=>{throw console.error("Error fetching images:",r),r})}const c=document.querySelector(".gallery"),d=document.querySelector(".loader-backdrop"),v=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a href="${i}">
            <img src="${r}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <div class="info-block">
              <p class="label">Likes</p>
              <p class="value">${t}</p>
            </div>
            <div class="info-block">
              <p class="label">Views</p>
              <p class="value">${a}</p>
            </div>
            <div class="info-block">
              <p class="label">Comments</p>
              <p class="value">${u}</p>
            </div>
            <div class="info-block">
              <p class="label">Downloads</p>
              <p class="value">${p}</p>
            </div>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),v.refresh()}function L(){c.innerHTML=""}function S(){d.style.display="flex"}function q(){console.log("hideLoader called"),d.style.display="none"}const n=document.querySelector(".form");document.querySelector(".gallery");n.addEventListener("submit",async s=>{s.preventDefault();const o=n.elements["search-text"].value.trim();if(L(),!o){l.warning({message:"Please enter a search query!",position:"topRight"});return}S(),h(o).then(r=>{if(r.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}b(r)}).catch(r=>{l.error({message:"Something went wrong. Please try again later.",color:"red",position:"topRight"})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
