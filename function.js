const sectionAtaque = document.getElementById("seleccionar-ataque")
const btnKokemon = document.getElementById("btn-kokemon")
const botonFuego = document.getElementById("btn-fuego")
const botonAgua = document.getElementById("btn-agua")
const botonPlanta = document.getElementById("btn-planta")
const botonReiniciar = document.getElementById("btn-reinicio")

const inputPoku = document.getElementById("poku");
const inputNagulo = document.getElementById("nagulo");
const inputIchite = document.getElementById("ichite");
const inputManila = document.getElementById("manila");
const inputZarubo = document.getElementById("zarubo");
const inputV2 = document.getElementById("v2");

const spanKokemon = document.getElementById("kokemon-jugador");
const sectionSeleccionJugador = document.getElementById("seleccionar-kokemon")

const spanKokemonEnemigo = document.getElementById("kokemon-enemigo");

const spanVidaJugador = document.getElementById("vida-jugador");
const spanVidaEnemigo = document.getElementById("vida-enemigo");

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataque-jugador')
const ataquesDelEnemigo = document.getElementById('ataque-enemigo')

let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3

class Kokemon {
    constructor(nombre, img, vida) {
        this.nombre = nombre;
        this.img = img;
        this.vida = vida;
    }
}


function iniciarJuego() {
    sectionAtaque.style.display = "none"
    btnKokemon.addEventListener("click", seleccionarKokemonJugador);
    botonFuego.addEventListener("click", ataqueFuego);
    botonAgua.addEventListener("click", ataqueAgua);
    botonPlanta.addEventListener("click", ataquePlanta);
    botonReiniciar.addEventListener("click", reiniciarJuego);
    botonReiniciar.style.display = "none"
}

function seleccionarKokemonJugador() {
    if (inputPoku.checked || inputNagulo.checked || inputIchite.checked || inputManila.checked || inputZarubo.checked || inputV2.checked) {

        sectionSeleccionJugador.style.display = "none"
        sectionAtaque.style.display = "flex"

        if (inputPoku.checked) {
        alert('Seleccionaste a Poku!')
        spanKokemon.innerHTML = "Poku";
        } else if (inputNagulo.checked) {
        alert('Seleccionaste a Nagulo!')
        spanKokemon.innerHTML = "Nagulo";
        } else if (inputIchite.checked) {
        alert('Seleccionaste a Ichite!')
        spanKokemon.innerHTML = "Ichite";
        } else if (inputManila.checked) {
        alert('Seleccionaste a Manila!')
        spanKokemon.innerHTML = "Manila";
        } else if (inputZarubo.checked) {
        alert('Seleccionaste a Zarubo!')
        spanKokemon.innerHTML = "Zarubo";
        } else if (inputV2.checked) {
        alert('Seleccionaste a V2!')
        spanKokemon.innerHTML = "V2";
        }
     else {
            alert("Selecciona una mascota!");
    }
}

    seleccionarKokemonEnemigo()
}

function seleccionarKokemonEnemigo() {
    let kokemonAleatorio = aleatorio(1, 6)

    if (kokemonAleatorio == 1) {
        spanKokemonEnemigo.innerHTML = "Poku";
    } else if (kokemonAleatorio == 2) {
        spanKokemonEnemigo.innerHTML = "Nagulo";
    } else if (kokemonAleatorio == 3) {
        spanKokemonEnemigo.innerHTML = "Ichite";
    } else if (kokemonAleatorio == 4) {
        spanKokemonEnemigo.innerHTML = "Manila";
    } else if (kokemonAleatorio == 5) {
        spanKokemonEnemigo.innerHTML = "Zarubo";
    } else {
        spanKokemonEnemigo.innerHTML = "V2";
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ataqueFuego() {
    ataqueJugador = "Fuego";
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "Agua";
    ataqueAleatorioEnemigo()

}

function ataquePlanta() {
    ataqueJugador = "Planta";
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Agua";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Fuego";
    } else if (ataqueAleatorio == 3){
        ataqueEnemigo = "Planta";
    }
    combate()
}

function combate() {
    if (ataqueJugador == ataqueEnemigo) {
        crearMsj("EMPATE");
    } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego" || ataqueJugador == "Fuego" && ataqueEnemigo == "Planta" || ataqueJugador == "Planta" && ataqueEnemigo == "Agua") {
        crearMsj("GANASTE");
        vidaEnemigo -= 1;
        spanVidaEnemigo.innerHTML = vidaEnemigo;
        
    }  else {
        crearMsj("PERDISTE")
        vidaJugador -= 1;
        spanVidaJugador.innerHTML = vidaJugador;
    }
    vidasRestantes()
}

function vidasRestantes() {
    if (vidaEnemigo == 0) {
        crearMsjFinal("GANASTE LA PARTIDA");
    } else if (vidaJugador == 0) {
        crearMsjFinal("PERDISTE LA PARTIDA")
 } 
}

function crearMsj(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMsjFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonPlanta.disabled = true
    botonReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener("load", iniciarJuego)