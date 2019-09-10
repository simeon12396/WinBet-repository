/** slick slider start */

$('.slider-container').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 751,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

/** slick slider end */

const hamburgerMenu = document.querySelector('.hamburger-menu'),
      navBar = document.querySelector('.nav-bar');

hamburgerMenu.addEventListener('click', () => {
    navBar.classList.toggle('change');
})