/* ======================================================
   DRDA Vav-Tharad EOI Portal
   script.js
====================================================== */

"use strict";

/* ==========================================
   NAVBAR SHADOW ON SCROLL
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        if(backToTop){

            backToTop.style.display = "flex";

        }

    } else {

        if(backToTop){

            backToTop.style.display = "none";

        }

    }

});

if(backToTop){

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================================
   CLOSE MOBILE MENU
========================================== */

document.querySelectorAll(".nav-link").forEach(link=>{

    link.addEventListener("click",()=>{

        const menu=document.querySelector(".navbar-collapse");

        if(menu){

            menu.classList.remove("show");

        }

    });

});

/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-up,.zoom-in,.slide-left,.slide-right").forEach(el=>{

    observer.observe(el);

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
   PDF DOWNLOAD MESSAGE
========================================== */

const downloadBtn=document.querySelector(".download-btn");

if(downloadBtn){

downloadBtn.addEventListener("click",()=>{

console.log("EOI PDF Download Started");

});

}

/* ==========================================
   COPY EMAIL
========================================== */

const email=document.querySelector(".email-copy");

if(email){

email.style.cursor="pointer";

email.addEventListener("click",()=>{

navigator.clipboard.writeText(email.innerText);

alert("Email Copied");

});

}

/* ==========================================
   CURRENT YEAR
========================================== */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader-wrapper");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});

/* ==========================================
   TOOLTIP
========================================== */

const tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

tooltipTriggerList.map(function(el){

return new bootstrap.Tooltip(el);

});

/* ==========================================
   AOS LIKE EFFECT
========================================== */

document.querySelectorAll(".card").forEach((card,index)=>{

card.style.transitionDelay=(index*0.08)+"s";

});

/* ==========================================
   PAGE LOADED
========================================== */

console.log("===================================");

console.log("DRDA Vav-Tharad EOI Portal Loaded");

console.log("Government of Gujarat");

console.log("===================================");