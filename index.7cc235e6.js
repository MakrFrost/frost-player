!function(){var e=new Audio,l=document.getElementsByClassName("catalog__item"),o=document.querySelector(".player__controller-paused"),n=document.querySelector(".player__controller-play"),t=document.querySelector(".player__controller-stop");o.addEventListener("click",(function(){e.paused?(n.classList.remove("player__icon-play"),console.log("запустили музыку"),e.play()):(n.classList.add("player__icon-play"),console.log("остановили музыку"),e.pause())}));var r=!0,c=!1,a=void 0;try{for(var i,s=l[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){i.value.addEventListener("click",u)}}catch(e){c=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(c)throw a}}function u(e){console.log("запустили музыку")}t.addEventListener("click",(function(){console.log("вы стопанули музыку")}))}();
//# sourceMappingURL=index.7cc235e6.js.map
