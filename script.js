/** slick slider jquery plugin start */

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

/** vanilla js start */

function hamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownNavBar = document.querySelector('.nav-bar');

    hamburgerMenu.addEventListener('click', toggleHamburgerMenu);

    function toggleHamburgerMenu(e) {
        dropdownNavBar.classList.toggle('changeNavBar');
        hamburgerMenu.classList.toggle('changeHamburgerMenu');
    };
};

hamburgerMenu();

function cookies(currentCookie) {
    (function() {
        const cookiesContainer = document.querySelector('.cookies');

        let getCookies = document.cookie.split('=');

        getCookies.forEach((item, index) => {
            if (item === currentCookie) {
                cookiesContainer.classList.add('hideCookiesContainer');
            };
        });
    })();

    const acceptCookiesBtn = document.querySelector('.accept');
    const closeCookiesBtn = document.querySelector('.fa-times-circle');

    acceptCookiesBtn.addEventListener('click', acceptCookiesMSg);
    closeCookiesBtn.addEventListener('click', closeCookiesMsg);

    function acceptCookiesMSg(e) {
        const cookiesContainer = document.querySelector('.cookies');
        let getCookies = document.cookie.split('=');

        getCookies.forEach((item, index) => {
            if (item !== currentCookie) {
                console.log('yes');
                // document.cookie = currentCookie + '=yes' + '; expires=' + new Date(9999, 12, 31).toUTCString();
                document.cookie = `${currentCookie} =yes; expires= ${new Date(9999,12, 31).toUTCString()}`;
                cookiesContainer.classList.add('hideCookiesContainer');
            };
        });
    };

    function closeCookiesMsg(e) {
        const cookiesContainer = document.querySelector('.cookies');
        cookiesContainer.classList.add('hideCookiesContainer');
    };
};

cookies('isAccepted');

function registerForm() {
    const registerBtn = document.querySelector('.register-btn');

    registerBtn.addEventListener('click', openModalForRegister);

    function openModalForRegister() {
        const registerOverlay = document.querySelector('.register-overlay');

        registerOverlay.classList.add('showOverlay');

        let dataAges = {
            'days': [],
            'months': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
            'allYears': function() {
                let allYears
            }

        }
        const closeOverlay = document.querySelector('.close-overlay');

        closeOverlay.addEventListener('click', () => {
            registerOverlay.classList.remove('showOverlay');
        });
    };
};

registerForm();