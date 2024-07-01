document.addEventListener("DOMContentLoaded", function() {
    var selectedCountry = localStorage.getItem("selectedCountry");

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
});

function selectCountry(country) {
    localStorage.setItem("selectedCountry", country);
    var countryUrls = {
        'Bolivia': 'https://pency.app/paradizestore.bo',
        'Mexico': 'https://pency.app/paradizestore.mx',
        'Chile': 'https://pency.app/paradizestore.cl',
        'Argentina': 'https://pency.app/paradizestore.ar',
        'Peru': 'https://pency.app/paradizestore.pen',
        'Republica Dominicana': 'https://pency.app/paradizestore.rdp'
    };
    if (countryUrls[country]) {
        window.location.href = countryUrls[country];
    } else {
        alert("País no reconocido");
    }
}
