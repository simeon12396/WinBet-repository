// ----------------------------------------On scroll change header
$(function() {
    var header = document.querySelector(".navbar");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            header.classList.add("fixed-header");
        } else {
            header.classList.remove("fixed-header");
        }
    });
});
// ----------------------------------------To top button
$(function() {
    var toTop = document.querySelector("#toTop");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            toTop.style.opacity = "1";
        } else {
            toTop.style.opacity = "0";
        }
    });
});
// ----------------------------------------To search box
$(document).ready(function() {
    $("#toTop").click(function() {
        $('html, body').animate({
            scrollTop: $(".main-slider").offset().top
        }, 500);
    });

    $("#toSearch").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".search").offset().top
        }, 800);
    });
});