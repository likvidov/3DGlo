(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let s=setInterval((()=>{let e=(()=>{let e=(new Date("11 jule 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining<0&&(clearInterval(s),e.hours=0,e.minutes=0,e.seconds=0),t.textContent=1===e.hours.toString().length?"0"+e.hours:e.hours,n.textContent=1===e.minutes.toString().length?"0"+e.minutes:e.minutes,o.textContent=1===e.seconds.toString().length?"0"+e.seconds:e.seconds}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),s=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",s),n.addEventListener("click",s),o.forEach((e=>e.addEventListener("click",s)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close");t.forEach((t=>t.addEventListener("click",(()=>{e.style.display="block"})))),n.addEventListener("click",(()=>{e.style.display="none"}))})()})();