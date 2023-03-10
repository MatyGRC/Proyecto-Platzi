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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let kokemones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeKokemones
let inputPoku
let inputNagulo
let inputIchite
let inputManila
let inputZarubo
let inputV2
let kokemonJugador
let kokemonJugadorObjeto
let ataquesKokemon
let ataquesKokemonEnemigo
let botonFuego
let botonAgua
let botonPlanta
let botones = []
let iAtaqueJugador
let iAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidaJugador = 3
let vidaEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBg = new Image()
mapaBg.src = "https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-64-imgs-personajes-fondo/programar/mokepon/assets/mokemap.png"

class Kokemon {
    constructor(nombre, img, vida, fotoMapa, x = 10, y = 10) {
        this.nombre = nombre;
        this.img = img;
        this.vida = vida;
        this.ataques = []
        this.x = x;
        this.y = y;
        this.ancho = 40;
        this.alto = 40;
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0
    }
    pintarKokemon() {
        lienzo.drawImage (
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let poku = new Kokemon("Poku", "./assets/poku.png", 3, "./assets/poku.png")
let nagulo = new Kokemon("Nagulo", "./assets/nagulo.jpg", 3, "./assets/nagulo.jpg")
let ichite = new Kokemon("Ichite", "./assets/ichite.jpg", 3, "./assets/ichite.jpg")
let manila = new Kokemon("Manila", "./assets/manila.jpg", 3, "./assets/manila.jpg")
let zarubo = new Kokemon("Zarubo", "./assets/zarubo.jpg", 3, "./assets/zarubo.jpg")
let v2 = new Kokemon("V2", "./assets/V2.jpg", 3, "./assets/V2.jpg")

let pokuEnemigo = new Kokemon("Poku", "./assets/poku.png", 3, "./assets/poku.png", 90, 190)
let naguloEnemigo = new Kokemon("Nagulo", "./assets/nagulo.jpg", 3, "./assets/nagulo.jpg", 150, 80 )
let ichiteEnemigo = new Kokemon("Ichite", "./assets/ichite.jpg", 3, "./assets/ichite.jpg", 260, 120)
let manilaEnemigo = new Kokemon("Manila", "./assets/manila.jpg", 3, "./assets/manila.jpg", 250, 20)
let zaruboEnemigo = new Kokemon("Zarubo", "./assets/zarubo.jpg", 3, "./assets/zarubo.jpg", 30, 70)
let v2Enemigo = new Kokemon("V2", "./assets/V2.jpg", 3, "./assets/V2.jpg", 200, 200)

poku.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-fuego"},
)

pokuEnemigo.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-fuego"},
) 

nagulo.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-planta"},
)

naguloEnemigo.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-planta"},
)

ichite.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-agua"},  
)

ichiteEnemigo.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-agua"},  
)

manila.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
)

manilaEnemigo.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
)

zarubo.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-fuego"},
)

zaruboEnemigo.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-fuego"},
)

v2.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
)

v2Enemigo.ataques.push(
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
    { nombre: "????", id: "btn-fuego"},
    { nombre: "????", id: "btn-planta"},
    { nombre: "????", id: "btn-agua"},
)

kokemones.push(poku, nagulo, ichite, manila, zarubo, v2)

function iniciarJuego() {
    sectionAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"
    kokemones.forEach((kokemon) => {
        opcionDeKokemones = `
        <input type="radio" name="kokemon" id=${kokemon.nombre} />
        <label class="tarjeta-kokemon" for=${kokemon.nombre}>
            <h3>${kokemon.nombre}</h3> 
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

        if (inputPoku.checked) {
        alert('Seleccionaste a Poku!')
        spanKokemon.innerHTML = inputPoku.id;
        kokemonJugador = poku;
        } else if (inputNagulo.checked) {
        alert('Seleccionaste a Nagulo!')
        spanKokemon.innerHTML = inputNagulo.id;
        kokemonJugador = nagulo;
        } else if (inputIchite.checked) {
        alert('Seleccionaste a Ichite!')
        spanKokemon.innerHTML = inputIchite.id;
        kokemonJugador = ichite
        } else if (inputManila.checked) {
        alert('Seleccionaste a Manila!')
        spanKokemon.innerHTML = inputManila.id;
        kokemonJugador = manila
        } else if (inputZarubo.checked) {
        alert('Seleccionaste a Zarubo!')
        spanKokemon.innerHTML = inputZarubo.id;
        kokemonJugador = zarubo
        } else if (inputV2.checked) {
        alert('Seleccionaste a V2!')
        spanKokemon.innerHTML = inputV2.id;
        kokemonJugador = v2;
        }
     else {
            alert("Selecciona una mascota!");
    }
}
    extraerAtaques(kokemonJugador)
    sectionVerMapa.style.display = "flex"
    pintarCanvas()
    iniciarMapa()
    seleccionarKokemonEnemigo()
}

function extraerAtaques(kokemonJugador) {
    let ataques
    for (let i = 0; i < kokemones.length; i++) {
        if (kokemonJugador.nombre === kokemones[i].nombre) {
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

    botones = document.querySelectorAll(".BAtaque")

/*     botonFuego.addEventListener("click", ataqueFuego);
    botonAgua.addEventListener("click", ataqueAgua);
    botonPlanta.addEventListener("click", ataquePlanta); */
}

function sequenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "????") {
                ataqueJugador.push("FUEGO");
                boton.style.background = "#A7727D";
                boton.disabled = true
            } else if (e.target.textContent === "????") {
                ataqueJugador.push("AGUA");
                boton.style.background = "#A7727D";
                boton.disabled = true
            } else {
                ataqueJugador.push("PLANTA");
                boton.style.background = "#A7727D";
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarKokemonEnemigo(enemigo) {
    spanKokemonEnemigo.innerHTML = enemigo.nombre;
    ataquesKokemonEnemigo = enemigo.ataques
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

    let ataqueAleatorio = aleatorio(0, ataquesKokemonEnemigo.length - 1);

    if (ataqueAleatorio == 1 || ataqueAleatorio == 0) {
        ataqueEnemigo.push("AGUA")
    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("FUEGO");
    } else {
        ataqueEnemigo.push("PLANTA");
    }
    iniciarCombate()
}

function iniciarCombate() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function iAmbos(jugador, enemigo) {
    iAtaqueJugador = ataqueJugador[jugador]
    iAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {

    for (let i = 0; i < ataqueJugador.length; i++) {    
      if (ataqueJugador[i] == ataqueEnemigo[i]) {
        iAmbos(i, i)
        crearMsj("EMPATE");
        } else if (ataqueJugador[i] == "AGUA" && ataqueEnemigo[i] == "FUEGO" || ataqueJugador[i] == "FUEGO" && ataqueEnemigo[i] == "PLANTA" || ataqueJugador[i] == "PLANTA" && ataqueEnemigo[i] == "AGUA") {
            iAmbos(i, i)
            crearMsj("GANASTE");
            victoriasJugador ++
            spanVidaJugador.innerHTML = victoriasJugador
            /* vidaEnemigo -= 1;
            spanVidaEnemigo.innerHTML = vidaEnemigo; */
            
        }  else {
            iAmbos(i, i)
            crearMsj("PERDISTE")
            victoriasEnemigo ++
            spanVidaEnemigo.innerHTML = victoriasEnemigo
           /*  vidaJugador -= 1;
            spanVidaJugador.innerHTML = vidaJugador; */
        }
        verVictorias()
    }
}

function verVictorias() {
    if (victoriasJugador == victoriasEnemigo) {
        crearMsjFinal("EMPATE");
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMsjFinal("GANASTE LA PARTIDA")
 }    else {
        crearMsjFinal("PERDISTE LA PARTIDA")
 }
}

function crearMsj(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = iAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = iAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMsjFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    botonReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function pintarCanvas() {

    kokemonJugador.x = kokemonJugador.x + kokemonJugador.velocidadX
    kokemonJugador.y = kokemonJugador.y + kokemonJugador.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage (
        mapaBg,
        0,
        0,
        mapa.width,
        mapa.height
    );
    kokemonJugador.pintarKokemon()
    pokuEnemigo.pintarKokemon();
    naguloEnemigo.pintarKokemon();
    v2Enemigo.pintarKokemon();
    ichiteEnemigo.pintarKokemon();
    zaruboEnemigo.pintarKokemon();
    manilaEnemigo.pintarKokemon();

    if (kokemonJugador.velocidadX !== 0 || kokemonJugador.velocidadY !== 0) {
        revisarColision(pokuEnemigo)
        revisarColision(naguloEnemigo)
        revisarColision(zaruboEnemigo)
        revisarColision(v2Enemigo)
        revisarColision(ichiteEnemigo)
        revisarColision(manilaEnemigo)

    }

}

function moverDerecha() {
    kokemonJugador.velocidadX = 5
}

function moverIzquierda() {
    kokemonJugador.velocidadX = -5
}

function moverAbajo() {
    kokemonJugador.velocidadY = 5
}

function moverArriba() {
    kokemonJugador.velocidadY = -5
}

function detenerMovimiento() {
    kokemonJugador.velocidadX = 0
    kokemonJugador.velocidadY = 0
}

function moverConTecla(event) {
    event.preventDefault()
    switch(event.key){
        case 'ArrowUp':
        case "w":
            moverArriba()
            break
        case 'ArrowDown':
        case "s":
            moverAbajo()
            break
        case 'ArrowLeft':
        case "a":
            moverIzquierda()
            break
        case 'ArrowRight':
        case "d":
            moverDerecha()
            break
        default:break
    }
}

function iniciarMapa() {
    mapa.width = 320
    mapa.height = 240
/*     kokemonJugadorObjeto = obtenerObjeto(kokemonJugador)
 */    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', moverConTecla)
    window.addEventListener('keyup',detenerMovimiento)
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        kokemonJugador.y
    const abajoMascota = 
        kokemonJugador.y + kokemonJugador.alto
    const derechaMascota = 
        kokemonJugador.x + kokemonJugador.ancho
    const izquierdaMascota = 
        kokemonJugador.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    alert("Combate contra " + enemigo.nombre)
    sectionAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarKokemonEnemigo(enemigo)
}

/* function obtenerObjeto() {
    for (let i = 0; i < kokemones.length; i++) {
        if (kokemonJugador === kokemones[i].nombre) {
            return kokemones[i];
        }
    }
} */

window.addEventListener("load", iniciarJuego)

