!function(){var e=new Audio,l=document.getElementsByClassName("catalog__item"),o=document.querySelector(".player__icon-pause");console.log(o),o.addEventListener("click",(function(){e.paused?(e.play(),o.classList.remove("player__icon-play"),console.log("udalili")):(e.pause(),o.classList.add("player__icon-play"),console.log("dobavili"))}));var a=!0,n=!1,t=void 0;try{for(var i,r=l[Symbol.iterator]();!(a=(i=r.next()).done);a=!0){i.value.addEventListener("click",(function(){return console.log("zapuskaem")}))}}catch(e){n=!0,t=e}finally{try{a||null==r.return||r.return()}finally{if(n)throw t}}}();
//# sourceMappingURL=index.973ad46e.js.map