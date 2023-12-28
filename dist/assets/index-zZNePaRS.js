(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>100DaysOfCode with Three-Js</h1>

    <a href =''><button>Day-1</button></a>
        <a href ='#'><button>Day-2</button></a>
        <a href ='#'><button>Day-3</button></a>
        <a href ='#'><button>Day-4</button></a>
        <a href ='#'><button>Day-5</button></a>
        <a href ='#'><button>Day-6</button></a>
        <a href ='#'><button>Day-7</button></a>
        <a href ='#'><button>Day-8</button></a>
        <a href ='#'><button>Day-9</button></a>
        <a href ='#'><button>Day-10</button></a>
  </div>
`;
