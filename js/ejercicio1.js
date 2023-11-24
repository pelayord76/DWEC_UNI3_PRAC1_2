import PalabraOculta from "./adivinapalabra.js";

window.addEventListener("load", start);

function start() {
    var palabraJuego = new PalabraOculta();
    palabraJuego.setNumPartidas(palabraJuego.totalPartidas++);

    document.getElementById("palabra").addEventListener("input", function (event) {
        var palabraEscrita = event.target.value.trim().toUpperCase();
        if (palabraJuego.checkPalabra(palabraEscrita)) {
            mostrarMensaje("Has acertado la palabra " + palabraJuego.getPalabraActual);
            habilitarBoton("nueva");
            deshabilitarBoton("solucion");
        }
    });

    document.getElementById("nueva").addEventListener("click", function () {
        palabraJuego.getPalabra();
        palabraJuego.desordenarPalabra();
        document.getElementById("letras").value = palabraJuego.getPalabraDesordenada();
        document.getElementById("palabra").value = '';
        habilitarBoton("solucion");
        deshabilitarBoton("nueva");
        limpiarMensaje();
    });

    document.getElementById("solucion").addEventListener("click", function () {
        var palabra = palabraJuego.getPalabraActual;
        mostrarMensaje("La palabra correcta es " + palabra);
        deshabilitarBoton("solucion");
    });

    document.getElementById("finalizar").addEventListener("click", function () {

        var porcentajeAciertos = (palabraJuego.aciertos / palabraJuego.totalPartidas) * 100;

        mostrarMensaje("Porcentaje de aciertos: " + porcentajeAciertos + "%");

        deshabilitarBoton("nueva");
        deshabilitarBoton("solucion");
        deshabilitarBoton("finalizar");
    });


    function mostrarMensaje(mensaje) {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = mensaje;
    }

    function limpiarMensaje() {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = '';
    }

    function habilitarBoton(idBoton) {
        const boton = document.getElementById(idBoton);
        boton.disabled = false;
    }

    function deshabilitarBoton(idBoton) {
        const boton = document.getElementById(idBoton);
        boton.disabled = true;
    }
}