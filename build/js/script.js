"use strict";var e=document.querySelector(".search-form");document.querySelector("#search-btn").onclick=function(){e.classList.toggle("active"),c.classList.remove("active"),t.classList.remove("active"),s.classList.remove("active")};var c=document.querySelector(".shopping-cart");document.querySelector("#cart-btn").onclick=function(){c.classList.toggle("active"),e.classList.remove("active"),t.classList.remove("active"),s.classList.remove("active")};var t=document.querySelector(".login-form");document.querySelector("#login-btn").onclick=function(){t.classList.toggle("active"),e.classList.remove("active"),c.classList.remove("active"),s.classList.remove("active")};var s=document.querySelector(".header .navbar");document.querySelector("#menu-btn").onclick=function(){s.classList.toggle("active"),c.classList.remove("active"),e.classList.remove("active"),t.classList.remove("active")},window.onscroll=function(){s.classList.remove("active")};
//# sourceMappingURL=script.js.map
