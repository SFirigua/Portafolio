// Mostrar el botón al desplazarse hacia abajo
window.onscroll = function() {
    const btnSubir = document.getElementById("btn-subir");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
};

// Función para desplazarse suavemente al inicio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
