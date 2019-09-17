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

        const closeOverlay = document.querySelector('.close-overlay');

        closeOverlay.addEventListener('click', () => {
            registerOverlay.classList.remove('showOverlay');
        });
    };
};

registerForm();

(function dataForTheAges() {
    let dataAges = {
        'days': function() {
            let arrayOfDays = [];
            let lastDayInTheMonth = 31;

            for (let i = 1; i <= lastDayInTheMonth; i++) {
                arrayOfDays.push(i);
            };

            return arrayOfDays;
        },
        'months': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'allYears': function() {
            let arrayOfAllYears = [];

            let presentYear = new Date().getFullYear();

            for (let i = 1950; i <= presentYear; i++) {
                arrayOfAllYears.push(i);
            };

            return arrayOfAllYears;
        }
    };

    insertSelectOptions(dataAges.days(), dataAges.months, dataAges.allYears());
})();


function insertSelectOptions(days, months, allYears) {
    let getDays = days;
    let dayOption = `<option> Select </option>`;
    let selectForTheDays = document.querySelector('.days');

    for (let key in getDays) {
        dayOption += `<option value='${getDays[key]}'>${getDays[key]}</option>`
    };

    selectForTheDays.innerHTML = dayOption;

    let getMonths = months;
    let monthOption = `<option> Select </option>`;
    let selectForTheMonth = document.querySelector('.months');

    for (let key in getMonths) {
        monthOption += `<option value='${getMonths[key]}'>${getMonths[key]}</option>`
    };

    selectForTheMonth.innerHTML = monthOption;

    let getAllYears = allYears;
    let yearOption = `<option> Select </option>`;
    let selectForTheYears = document.querySelector('.all-years');

    for (let key in getAllYears) {
        yearOption += `<option value='${getAllYears[key]}'> ${getAllYears[key]} </option>`
    }

    selectForTheYears.innerHTML = yearOption;
};

function submitRegisterForm() {
    let submitBtn = document.querySelector('.submit-btn');

    submitBtn.addEventListener('click', submitForm);

    function submitForm(e) {
        e.preventDefault();

        console.log(e);
        const inputName = e.target.form[0].value;
        const inputEmail = e.target.form[1].value;

        const inputPassword = e.target.form[2].value;
        const inputConfirmPassword = e.target.form[3].value;


        const inputSelectBoxDay = parseInt(e.target.form[4].value);
        const inputSelectBoxMonth = parseInt(e.target.form[5].value);
        const inputSelectBoxYear = parseInt(e.target.form[6].value);

        const minYear = new Date().getFullYear() - 18;

        if ((inputSelectBoxYear <= minYear) &&
            (inputName.charAt(0) == 'S') &&
            (inputName.length >= 4) &&
            (inputPassword === inputConfirmPassword)
        ) {
            alert('Congrats')
        } else {
            alert('Correctly fill the form')
        }
    };
};

submitRegisterForm();