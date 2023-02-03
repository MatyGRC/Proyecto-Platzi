const sectionAtaque = document.getElementById("seleccionar-ataque")
const btnKokemon = document.getElementById("btn-kokemon")
const botonReiniciar = document.getElementById("btn-reinicio")

const spanKokemon = document.getElementById("kokemon-jugador");
const sectionSeleccionJugador = document.getElementById("seleccionar-kokemon")

const spanKokemonEnemigo = document.getElementById("kokemon-enemigo");

const spanVidaJugador = document.getElementById("vida-jugador");
const spanVidaEnemigo = document.getElementById("vida-enemigo");

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataque-jugador')
const ataquesDelEnemigo = document.getElementById('ataque-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let kokemones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeKokemones
let inputPoku
let inputNagulo
let inputIchite
let inputManila
let inputZarubo
let inputV2
let kokemonJugador
let ataquesKokemon
let botonFuego
let botonAgua
let botonPlanta
let botones = []
let ataquesJugador = []
let vidaJugador = 3
let vidaEnemigo = 3

class Kokemon {
    constructor(nombre, img, vida) {
        this.nombre = nombre;
        this.img = img;
        this.vida = vida;
        this.ataques = []
    }
}

let poku = new Kokemon("Poku", "./assets/poku.png", 3)
let nagulo = new Kokemon("Nagulo", "./assets/nagulo.jpg", 3)
let ichite = new Kokemon("Ichite", "./assets/ichite.jpg", 3)
let manila = new Kokemon("Manila", "./assets/manila.jpg", 3)
let zarubo = new Kokemon("Zarubo", "./assets/zarubo.jpg", 3)
let v2 = new Kokemon("V2", "./assets/V2.jpg", 3)

poku.ataques.push(
    { nombre: "🌱", id: "btn-planta"},
    { nombre: "💧", id: "btn-agua"},
    { nombre: "🔥", id: "btn-fuego"},
    { nombre: "🔥", id: "btn-fuego"},
    { nombre: "🔥", id: "btn-fuego"},
) 

nagulo.ataques.push(
    { nombre: "🌱", id: "btn-planta"},
    { nombre: "💧", id: "btn-agua"},
    { nombre: "🔥", id: "btn-fuego"},
    { nombre: "🌱", id: "btn-planta"},
    { nombre: "🌱", id: "btn-planta"},
)

ichite.ataques.push(
    { nombre: "🌱", id: "btn-planta"},
    { nombre: "💧", id: "btn-agua"},
    { nombre: "🔥", id: "btn-fuego"},
    { nombre: "💧", id: "btn-agua"},
    { nombre: "💧", id: "btn-agua"},  
)

manila.ataques.push(
    { nombre: "🌱", id: "btn-planta"},
    { nombre: "💧", id: "btn-agua"},
    { nombre: "🔥", id: "btn-fuego"},
    { nombre: "💧", id: "btn-agua"},
    { nombre: "🔥", id: "btn-fuego"},
)

zarubo.ataques.push(
    { nombre: "🌱", id: "btn-planta"},
    { nombre: "💧", id: "btn-agua"},
    { nombre: "🔥", id: "btn-fuego"},
    { nombre: "🌱", id: "btn-planta"},
    { nombre: "🔥", id: "btn-fuego"},
)

v2.ataques.push(
    { nombre: "🌱", id: "btn-planta"},
    { nombre: "💧", id: "btn-agua"},
    { nombre: "🔥", id: "btn-fuego"},
    { nombre: "🌱", id: "btn-planta"},
    { nombre: "💧", id: "btn-agua"},
)

kokemones.push(poku, nagulo, ichite, manila, zarubo, v2)

function iniciarJuego() {
    sectionAtaque.style.display = "none"
    kokemones.forEach((kokemon) => {
        opcionDeKokemones = `
        <input type="radio" name="kokemon" id=${kokemon.nombre} />
        <label class="tarjeta-kokemon" for=${kokemon.nombre}>
            <h3>${kokemon.nombre}</h3> 
            <p>Tipo: <span class="fuego">Fuego</span></p>
            <img src=${kokemon.img} alt="kokemon ${kokemon.nombre} tipo fuego">   
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeKokemones

    inputPoku = document.getElementById("Poku");
    inputNagulo = document.getElementById("Nagulo");
    inputIchite = document.getElementById("Ichite");
    inputManila = document.getElementById("Manila");
    inputZarubo = document.getElementById("Zarubo");
    inputV2 = document.getElementById("V2");
    })

    btnKokemon.addEventListener("click", seleccionarKokemonJugador);
    botonReiniciar.addEventListener("click", reiniciarJuego);
    botonReiniciar.style.display = "none"
}

function seleccionarKokemonJugador() {
    if (inputPoku.checked || inputNagulo.checked || inputIchite.checked || inputManila.checked || inputZarubo.checked || inputV2.checked) {

        sectionSeleccionJugador.style.display = "none"
        sectionAtaque.style.display = "flex"

        if (inputPoku.checked) {
        alert('Seleccionaste a Poku!')
        spanKokemon.innerHTML = inputPoku.id;
        kokemonJugador = inputPoku.id;
        } else if (inputNagulo.checked) {
        alert('Seleccionaste a Nagulo!')
        spanKokemon.innerHTML = inputNagulo.id;
        kokemonJugador = inputNagulo.id;
        } else if (inputIchite.checked) {
        alert('Seleccionaste a Ichite!')
        spanKokemon.innerHTML = inputIchite.id;
        kokemonJugador = inputIchite.id
        } else if (inputManila.checked) {
        alert('Seleccionaste a Manila!')
        spanKokemon.innerHTML = inputManila.id;
        kokemonJugador = inputManila.id
        } else if (inputZarubo.checked) {
        alert('Seleccionaste a Zarubo!')
        spanKokemon.innerHTML = inputZarubo.id;
        kokemonJugador = inputZarubo.id
        } else if (inputV2.checked) {
        alert('Seleccionaste a V2!')
        spanKokemon.innerHTML = inputV2.id;
        kokemonJugador = inputV2.id;
        }
     else {
            alert("Selecciona una mascota!");
    }
}
    extraerAtaques(kokemonJugador)
    seleccionarKokemonEnemigo()
}

function extraerAtaques(kokemonJugador) {
    let ataques
    for (let i = 0; i < kokemones.length; i++) {
        if (kokemonJugador === kokemones[i].nombre) {
            ataques = kokemones[i].ataques;
        }
    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
       ataquesKokemon = `
       <button id=${ataque.id} class="ataque BAtaque">${ataque.nombre}</button>
       ` 
       contenedorAtaques.innerHTML += ataquesKokemon 
    });
    botonFuego = document.getElementById("btn-fuego")
    botonAgua = document.getElementById("btn-agua")
    botonPlanta = document.getElementById("btn-planta")

    botones = document.querySelectorAll("BAtaque")

/*     botonFuego.addEventListener("click", ataqueFuego);
    botonAgua.addEventListener("click", ataqueAgua);
    botonPlanta.addEventListener("click", ataquePlanta); */
}

function sequenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataquesJugador.push("FUEGO");
                boton.style.background = "transparent";
            } else if (e.target.textContent === "💧") {
                ataquesJugador.push("AGUA");
                boton.style.background = "transparent";
            } else {
                ataquesJugador.push("TIERRA");
                boton.style.background = "transparent";
            }
        })
    })
}

function seleccionarKokemonEnemigo() {
    let kokemonAleatorio = aleatorio(0, kokemones.length - 1);
    spanKokemonEnemigo.innerHTML = kokemones[kokemonAleatorio].nombre;

/*     if (kokemonAleatorio == 1) {
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
    } */
    sequenciaAtaque()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* function ataqueFuego() {
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
} */

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
