
const burger = document.querySelector(".burger");
const burger1 = document.querySelector(".burger1");
const mein_left = document.querySelector(".mein_left-section");
const mein_right = document.querySelector(".mein_right-section");
const mein_left_navbar = document.querySelector(".mein-left_navbar")
burger.addEventListener("click", function () {
    mein_left.classList.toggle("active");
    mein_right.style.width = "100%";
})
burger1.addEventListener("click", function(){
    mein_left_navbar.classList.toggle("active1")
})

