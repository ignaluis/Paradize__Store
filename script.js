document.addEventListener("DOMContentLoaded", function() {
    var selectedCountry = localStorage.getItem("selectedCountry");
    if (selectedCountry) {
        alert("Bienvenido de nuevo! Has seleccionado: " + selectedCountry);
    }
});

function selectCountry(country) {
    localStorage.setItem("selectedCountry", country);
    alert("Has seleccionado: " + country);

    if (country === 'Bolivia') {
        window.location.href = 'https://pency.app/paradizestore';
    }
    // Puedes agregar más redirecciones según el país si es necesario
}
