var botonInicio = document.getElementById('boton-inicio');
botonInicio.addEventListener('mouseover', function () {
    botonInicio.style.backgroundColor = '#FFBAA9';
});
botonInicio.addEventListener('mouseout', function () {
    botonInicio.style.backgroundColor = '';
});
var botonContacto = document.getElementById('boton-contacto');
botonContacto.addEventListener('mouseover', function () {
    botonContacto.style.backgroundColor = '#FFBAA9';
});
botonContacto.addEventListener('mouseout', function () {
    botonContacto.style.backgroundColor = '';
});


window.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup');
    var cerrarPopup = document.getElementById('cerrarPopup');


    setTimeout(function () {
        popup.style.display = 'flex';
    }, 2000);

    cerrarPopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});

