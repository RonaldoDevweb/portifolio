document.addEventListener("DOMContentLoaded", function(){
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileMenu = document.querySelector(".menu");

    mobileMenuIcon.addEventListener("click", function(){
        mobileMenu.classList.toggle("mobile-menu-open");
    })
})
