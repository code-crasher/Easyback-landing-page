const toggleBtn=document.querySelector(".menu-toggle");
const navMenu=document.querySelector(".primary__nav");
const overlay=document.querySelector(".overlay");
const hideMenu=document.querySelector(".hide-menu");
const showMenu=document.querySelector(".show-menu");

toggleBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("show-menu")
    overlay.classList.toggle("show-menu")
    hideMenu.classList.toggle("hide")
    showMenu.classList.toggle("show")
})