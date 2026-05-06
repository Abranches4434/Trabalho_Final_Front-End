window.addEventListener("scroll", function(){
    const scroll = window.scrollY;
    document.querySelector(".parallax").style.transform = "translateY(" + scroll * (-1) * 0.15 + "px)";
});