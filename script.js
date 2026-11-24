
const preguntas = {
    facil: [
        {
            pregunta: "¿De qué país es Max Verstappen?",
            opciones: ["Alemania", "Países Bajos", "España", "Italia"],
            correcta: 1
        },
        {
            pregunta: "¿Con qué equipo se hizo famoso Max Verstappen en la F1?",
            opciones: ["Ferrari", "Mercedes", "Red Bull Racing", "McLaren"],
            correcta: 2
        },
        {
            pregunta: "¿Qué número utiliza Max Verstappen habitualmente?",
            opciones: ["44", "33", "16", "1"],
            correcta: 3
        },
        {
            pregunta: "¿Qué significa la bandera a cuadros?",
            opciones: ["Inicio de carrera", "Fin de carrera", "Peligro", "Lluvia"],
            correcta: 1
        },
        {
            pregunta: "¿Cómo se llama la competencia en la que corre Max?",
            opciones: ["MotoGP", "Fórmula 1", "Rally", "Nascar"],
            correcta: 1
        },
        {
            pregunta: "¿Qué tipo de vehículo conduce Max?",
            opciones: ["Un monoplaza", "Una motocicleta", "Un kart de calle", "Un automóvil de rally"],
            correcta: 0
        }
    ],

    medio: [
        {
            pregunta: "¿En qué año debutó Max Verstappen en Fórmula 1?",
            opciones: ["2013", "2014", "2015", "2016"],
            correcta: 2
        },
        {
            pregunta: "¿En qué Gran Premio consiguió su primera victoria?",
            opciones: ["Mónaco", "España", "Bélgica", "Brasil"],
            correcta: 1
        },
        {
            pregunta: "¿Qué edad tenía cuando debutó en F1?",
            opciones: ["17 años", "19 años", "20 años", "21 años"],
            correcta: 0
        },
        {
            pregunta: "¿En qué año consiguió su primer campeonato mundial?",
            opciones: ["2019", "2020", "2021", "2022"],
            correcta: 2
        },
        {
            pregunta: "¿Qué nacionalidad tiene Max?",
            opciones: ["Belga", "Neerlandesa", "Francesa", "Alemana"],
            correcta: 1
        },
        {
            pregunta: "¿En qué circuito ganó su primera carrera?",
            opciones: ["Circuito de Barcelona-Cataluña", "Silverstone", "Monza", "Spa-Francorchamps"],
            correcta: 0
        }
    ],

    dificil: [
        {
            pregunta: "¿En qué equipo debutó Max en Fórmula 1?",
            opciones: ["Red Bull Racing", "Toro Rosso", "Ferrari", "Mercedes"],
            correcta: 1
        },
        {
            pregunta: "¿Qué piloto fue compañero de Max cuando consiguió su primera victoria?",
            opciones: ["Sergio Pérez", "Daniel Ricciardo", "Lewis Hamilton", "Carlos Sainz"],
            correcta: 1
        },
        {
            pregunta: "¿En qué Gran Premio consiguió su primera victoria?",
            opciones: ["Gran Premio de España", "Gran Premio de Italia", "Gran Premio de Japón", "Gran Premio de Canadá"],
            correcta: 0
        },
        {
            pregunta: "¿En qué circuito se disputó su primer Gran Premio de F1?",
            opciones: ["Melbourne", "Mónaco", "Abu Dabi", "Silverstone"],
            correcta: 0
        },
        {
            pregunta: "¿A qué piloto venció en la lucha por el campeonato de 2021?",
            opciones: ["Charles Leclerc", "Lewis Hamilton", "Sebastian Vettel", "Fernando Alonso"],
            correcta: 1
        },
        {
            pregunta: "¿Qué número utilizaba Max antes de adoptar el número 1?",
            opciones: ["33", "44", "77", "16"],
            correcta: 0
        }
    ]
};

let nivelActual = [];
let preguntaActual = 0;
let aciertos = 0;

function iniciarReto(nivel) {
    nivelActual = preguntas[nivel];
    preguntaActual = 0;
    aciertos = 0;

    document.getElementById("resultado").innerHTML = "";
    mostrarPregunta();
}

function mostrarPregunta() {
    const juego = document.getElementById("juego");

    if (preguntaActual >= nivelActual.length) {
        finalizarReto();
        return;
    }

    const pregunta = nivelActual[preguntaActual];

    juego.innerHTML = `
        <p class="etiqueta">
            PREGUNTA ${preguntaActual + 1} DE ${nivelActual.length}
        </p>

        <h2>${pregunta.pregunta}</h2>

        <div class="opciones">
            ${pregunta.opciones.map((opcion, indice) => `
                <button class="opcion" onclick="responder(${indice})">
                    ${opcion}
                </button>
            `).join("")}
        </div>

        <p id="mensajeRespuesta"></p>
    `;
}

function responder(respuesta) {
    const pregunta = nivelActual[preguntaActual];
    const botones = document.querySelectorAll(".opcion");
    const mensaje = document.getElementById("mensajeRespuesta");

    botones.forEach(boton => boton.disabled = true);

    if (respuesta === pregunta.correcta) {
        aciertos++;

        const frases = [
            "¡Muy bien! Así se hace, campeona. ♡",
            "¡Respuesta correcta! Tienes talento para esto.",
            "¡Excelente! Me encanta verte superar retos.",
            "¡Esooo! Una razón más para sonreír.",
            "¡Perfecto! Vas con todo. 🏎️"
        ];

        mensaje.innerHTML = frases[Math.floor(Math.random() * frases.length)];
    } else {
        mensaje.innerHTML =
            "¡No pasa nada! Lo importante es intentarlo. Sigue adelante, bonita. ♡";
    }

    preguntaActual++;

    const continuar = document.createElement("button");
    continuar.textContent = "Siguiente pregunta →";
    continuar.className = "boton";
    continuar.onclick = mostrarPregunta;

    mensaje.appendChild(document.createElement("br"));
    mensaje.appendChild(continuar);
}

function finalizarReto() {
    const juego = document.getElementById("juego");

    juego.innerHTML = `
        <h2>¡Terminaste el reto! 🏁</h2>
        <p>Tu resultado fue:</p>
        <h1>${aciertos} / ${nivelActual.length}</h1>
        <p>
            ${aciertos === 6
                ? "¡Increíble! Eres toda una experta. ♡"
                : "¡Lo hiciste muy bien! Gracias por intentarlo. ♡"}
        </p>
        <p>Y ahora viene algo que preparé especialmente para ti...</p>
    `;

    document.getElementById("resultado").innerHTML = `
        <a class="boton" href="cartas.html">
            Abrir mi primera carta 💌
        </a>
    `;
}

function abrirCarta(numero) {
    const carta = document.getElementById("carta" + numero);

    if (carta.hidden) {
        carta.hidden = false;
    } else {
        carta.hidden = true;
    }
}

const detallesAbigail = [
    {
        titulo: "Un detalle para ti ♡",
        texto: "Quería preparar algo diferente, algo que pudieras abrir y que te recordara que eres una persona muy especial."
    },
    {
        titulo: "Una razón 🌷",
        texto: "Porque tu forma de ser, tus gustos y esos pequeños detalles que te hacen única son cosas que valoro muchísimo."
    },
    {
        titulo: "Un deseo 🎀",
        texto: "Deseo que tengas días llenos de felicidad, que cumplas tus metas y que nunca dejes de perseguir aquello que te hace feliz."
    },
    {
        titulo: "Un recuerdo 🖤",
        texto: "Hay momentos pequeños que se quedan guardados en el corazón. Algunos de ellos tienen algo que ver contigo."
    },
    {
        titulo: "Una sonrisa ✨",
        texto: "Espero que mientras recorres esta página encuentres al menos una razón para sonreír."
    },
    {
        titulo: "Un mensaje 💌",
        texto: "No tienes que responder nada ni sentirte comprometida con este detalle. Solo quería hacerte algo bonito."
    }
];

function mostrarDetalle(numero) {
    const detalle = detallesAbigail[numero];

    document.getElementById("tituloDetalle").textContent = detalle.titulo;
    document.getElementById("textoDetalle").textContent = detalle.texto;
}

function mostrarRegalo() {
    const sorpresa = document.getElementById("sorpresaFinal");
    sorpresa.hidden = false;
}
