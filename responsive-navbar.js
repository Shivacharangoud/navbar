let barLogoE = document.getElementById("barLogo");
let optionsIdE = document.getElementById("optionsId");
barLogoE.addEventListener("click", function() {
    optionsIdE.classList.toggle("display-none");
    barLogoE.classList.toggle("fa-bars");
    barLogoE.classList.toggle("fa-times");
});