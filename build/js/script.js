"use strict";var e=document.querySelector(".search-form");document.querySelector("#search-btn").onclick=function(){e.classList.toggle("active"),t.classList.remove("active"),c.classList.remove("active"),o.classList.remove("active")};var t=document.querySelector(".shopping-cart");document.querySelector("#cart-btn").onclick=function(){t.classList.toggle("active"),e.classList.remove("active"),c.classList.remove("active"),o.classList.remove("active")};var c=document.querySelector(".login-form");document.querySelector("#login-btn").onclick=function(){c.classList.toggle("active"),e.classList.remove("active"),t.classList.remove("active"),o.classList.remove("active")};var o=document.querySelector(".header .navbar");document.querySelector("#menu-btn").onclick=function(){o.classList.toggle("active"),t.classList.remove("active"),e.classList.remove("active"),c.classList.remove("active")},window.onscroll=function(){o.classList.remove("active")},document.querySelector(".home").onmousemove=function(e){var t=(window.innerWidth-2*e.pageX)/90,c=(window.innerHeight-2*e.pageY)/90;document.querySelector(".home .home__paralax").style.transform="translateX(".concat(t,"px) translateY(").concat(c,"px)")},document.querySelector(".home").onmousemoveleave=function(){document.querySelector(".home .home__paralax").style.transform="translateX(0px) translateY(0px)"};
//# sourceMappingURL=script.js.map
