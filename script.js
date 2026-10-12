/* =========================
   CAMBIAR DE PANTALLA
========================= */

let musicaIniciada = false;

function siguiente(numero) {

    document.querySelectorAll(".pantalla").forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    let nuevaPantalla;

    if (typeof numero === "number") {
        nuevaPantalla =
            document.getElementById("pantalla" + numero);
    } else {
        nuevaPantalla =
            document.getElementById(numero);
    }

    if (nuevaPantalla) {
        nuevaPantalla.classList.add("activa");
    }

    /* =========================
       INICIAR LA CANCIÓN
    ========================== */

    if (!musicaIniciada) {

        const cancion =
            document.getElementById("cancion");

        if (cancion) {

            cancion.volume = 0.6;

            cancion.play()
                .then(() => {
                    musicaIniciada = true;
                })
                .catch(() => {
                    console.log(
                        "El navegador bloqueó el autoplay."
                    );
                });
        }
    }

    /* Si llegamos a la carta */
    if (numero === 5) {
    const carta = document.getElementById("cartaContenido");
    carta.classList.remove("mostrarCarta");
}
}

function abrirCarta() {
    const sobre = document.querySelector(".sobre");
    const inicioSobre = document.getElementById("sobreInicio");
    const carta = document.getElementById("cartaContenido");

    sobre.classList.add("abierto");
    crearExplosion();

    setTimeout(() => {
        inicioSobre.style.display = "none";
        carta.classList.add("mostrarCarta");
        escribirCarta();
    }, 1000);
}


/* =========================
   ABRIR REGALO
========================= */

function abrirRegalo() {

    const caja =
        document.querySelector(".caja");

    caja.classList.add("abierta");

    crearExplosion();

    setTimeout(() => {
        siguiente(3);
    }, 1000);
}


/* =========================
   PÉTALOS
========================= */

function crearPetalo() {

    const petalo =
        document.createElement("div");

    petalo.classList.add("petalo");

    petalo.textContent = "🌸";

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    petalo.style.fontSize =
        (12 + Math.random() * 15) + "px";

    document
        .getElementById("petalos")
        .appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, 10000);
}

setInterval(crearPetalo, 700);


/* =========================
   EXPLOSIÓN
========================= */

function crearExplosion() {

    const simbolos = [
        "💗",
        "💕",
        "🌸",
        "✨",
        "🌷"
    ];

    for (let i = 0; i < 20; i++) {

        const elemento =
            document.createElement("div");

        elemento.classList.add("petalo");

        elemento.textContent =
            simbolos[
                Math.floor(
                    Math.random() * simbolos.length
                )
            ];

        elemento.style.left =
            (40 + Math.random() * 20) + "vw";

        elemento.style.top = "45vh";

        elemento.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        document.body.appendChild(elemento);

        setTimeout(() => {
            elemento.remove();
        }, 4000);
    }
}


/* =========================
   CARTA
========================= */

const carta = `
Mami:

Hoy quiero aprovechar este día para decirte algo que quizá no siempre digo con palabras.

Gracias.

Gracias por estar conmigo, por cuidarme, por escucharme y por acompañarme en cada etapa de mi vida.

A veces los momentos más importantes no son los más grandes. Son esos pequeños momentos que compartimos, las risas, los abrazos, las conversaciones y hasta esas cosas cotidianas que algún día terminan convirtiéndose en recuerdos que guardamos para siempre.

Quiero que sepas que eres una persona muy importante para mí y que me siento muy afortunada de poder llamarte mami.

Deseo que este nuevo año de tu vida esté lleno de cosas bonitas, tranquilidad, sueños cumplidos, muchas sonrisas y momentos que te hagan feliz.

Espero que podamos seguir creando muchísimos recuerdos juntas.

Feliz cumpleaños, ama. 💗

Te quiero muchísimo y espero que nunca olvides lo especial que eres para mí.

Con todo mi amor. 🌷
`;


/* =========================
   ESCRIBIR CARTA
========================= */

let cartaIniciada = false;

function escribirCarta() {

    if (cartaIniciada) {
        return;
    }

    cartaIniciada = true;

    const texto =
        document.getElementById("textoCarta");

    const boton =
        document.getElementById("botonCarta");

    if (!texto || !boton) {
        return;
    }

    texto.textContent = "";

    let posicion = 0;

    function escribir() {

        if (posicion < carta.length) {

            texto.textContent +=
                carta[posicion];

            posicion++;

            setTimeout(escribir, 35);

        } else {

            boton.style.display =
                "inline-block";
        }
    }

    escribir();
}


/* =========================
   APAGAR VELITAS
========================= */

function apagarVelas() {

    const pastel =
        document.querySelector(".pastel");

    pastel.textContent = "🍰";

    document
        .getElementById("velasTexto")
        .textContent =
        "¡Deseo pedido! ✨💗";

    document
        .getElementById("mensajeFinal")
        .classList.add("visible");

    crearExplosion();
}


/* =========================
   ÁLBUM DE 18 FOTOS
========================= */

let fotoActual = 1;


/* FRASES DE CADA FOTO */

const frasesFotos = [

    "Mi mami cuando era niña. 💗",

    "Gracias por estar en tantos de mis momentos. 🌷",

    "Contigo, hasta los días normales se vuelven especiales.",

    "Una de esas memorias que me hacen sonreír. ✨",

    "Gracias por cada momento juntas.",

    "Un pedacito de nuestra historia. 💕",

    "Porque los recuerdos contigo siempre tienen algo especial.",

    "Otro momento que quiero guardar para siempre. 🌸",

    "Gracias por formar parte de mi vida.",

    "Un recuerdo más de tantos que todavía nos quedan.",

    "Contigo he aprendido que los pequeños momentos también importan.",

    "Una foto, un momento y un recuerdo para siempre. 💗",

    "Gracias por todas las veces que has estado para mí.",

    "De esos momentos que quisiera poder guardar en una cajita.",

    "Nuestra historia está llena de momentos bonitos.",

    "Y todavía nos quedan muchísimos recuerdos por crear. 🌷",

    "Gracias por cada sonrisa que hemos compartido.",

    "Y esta es solo una pequeña parte de todos nuestros recuerdos. 💕"

];


/* =========================
   MOSTRAR FOTO
========================= */

function mostrarFoto() {

    const foto =
        document.getElementById("fotoAlbum");

    const numero =
        document.getElementById("numeroFoto");

    const frase =
        document.getElementById("fraseFoto");

    if (!foto || !numero || !frase) {
        return;
    }

    foto.style.opacity = "0";

    setTimeout(() => {

        foto.src =
            "imagenes/foto" +
            fotoActual +
            ".jpg";

        numero.textContent =
            fotoActual + " / 18";

        frase.textContent =
            frasesFotos[fotoActual - 1];

        foto.style.opacity = "1";

    }, 200);


    /* Cuando llega a la foto 18 */

    const continuar =
        document.getElementById("continuarAlbum");

    if (continuar) {

        if (fotoActual === 18) {

            continuar.style.display =
                "inline-block";

        } else {

            continuar.style.display =
                "none";
        }
    }
}


/* =========================
   SIGUIENTE FOTO
========================= */

function fotoSiguiente() {

    if (fotoActual < 18) {

        fotoActual++;

        mostrarFoto();
    }
}


/* =========================
   FOTO ANTERIOR
========================= */

function fotoAnterior() {

    if (fotoActual > 1) {

        fotoActual--;

        mostrarFoto();
    }
}