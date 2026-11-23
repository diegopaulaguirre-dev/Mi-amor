
function irCarta() {
  document.getElementById("carta").scrollIntoView({
    behavior: "smooth"
  });
}

function mostrarCarta() {
  const carta = document.getElementById("textoCarta");

  carta.classList.remove("hidden");

  setTimeout(() => {
    carta.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 100);
}

let toques = 0;

const mensajes = [
  "Gracias por darme un momento de tu tiempo. ♡",
  "Reconozco que mis palabras estuvieron mal.",
  "No quiero justificar lo que hice.",
  "Sé que pude haberte lastimado.",
  "Me importan tus sentimientos.",
  "Quiero aprender de mis errores.",
  "Una disculpa también necesita acciones.",
  "Respeto tu tiempo y tu espacio.",
  "No tienes ninguna obligación de perdonarme.",
  "De corazón, lo siento mucho, Abigail. ♡"
];

function llenarCorazon() {
  if (toques >= 10) return;

  toques++;

  const porcentaje = toques * 10;

  document.getElementById("barra").style.width =
    porcentaje + "%";

  document.getElementById("progreso").textContent =
    toques + " de 10 momentos";

  document.getElementById("corazon").textContent =
    toques === 10 ? "♥" : "♡";

  document.getElementById("corazon").style.color =
    "#f19abb";

  document.getElementById("mensajeCorazon").textContent =
    mensajes[toques - 1];

  if (toques === 10) {
    document.getElementById("final").scrollIntoView({
      behavior: "smooth"
    });
  }
}
