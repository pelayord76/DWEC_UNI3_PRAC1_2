export default class PalabraOculta {
    constructor() {
        this.palabras = ["pintor", "vicios", "riesgo", "piedra", "olfato", "gloria", "pueblo", "locura", "infiel", "cascos"];
        this.palabraActual = '';
        this.palabraDesordenada = '';
        this.intentos = 0;
        this.aciertos = 0;
        this.totalPartidas = 0;
    }

    getPalabra() {
        let i = Math.floor(Math.random() * this.palabras.length);
        this.palabraActual = this.palabras[i].toUpperCase();
    }

    desordenarPalabra() {
        var letras = this.palabraActual.split('');
        letras.sort(() => Math.random() - 0.5);
        this.palabraDesordenada = letras.join('');
    }

    checkPalabra(palabraInput) {
        this.intentos++;
        var palabraMayus = palabraInput.toUpperCase();
        if (this.palabraActual === palabraMayus) {
            this.aciertos++;
            return true;
        }
        return false;
    }

    getPalabraActual() {
        return this.palabraActual;
    }

    getPalabraDesordenada() {
        return this.palabraDesordenada;
    }

    getAciertos() {
        return this.aciertos;
    }

    getIntentos() {
        return this.intentos;
    }

    getNumPartidas() {
        return this.totalPartidas;
    }

    setNumPartidas(num) {
        this.totalPartidas = num;
    }
}