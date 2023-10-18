const userSel = [];
const botSel = [];
const opc = ["c", "p", "n"];
var texto = document.getElementById("btn")
let soniditos = document.getElementById("sounds")

texto.innerHTML = "Click aqui para jugar"

const botSelection = async () => {
  let selected;
  const prob = Math.floor(Math.random() * 10) + 1;
  console.log("Metalinguistica vs Tu vieja", prob);
  if (prob > 7) {
    selected = "c";
  } else if (prob < 5) {
    selected = "p";
  } else {
    selected = "n";
  }
  botSel.push(selected);
};

const userSelection = async () => {
  let selected;
  selected = prompt("Elegí una: c/p/n");
   if (!opc.includes(selected.toLowerCase()))
    return alert("Por favor, seleccione una opción válida");
  if (!selected) alert("Por favor, seleccione una opción");
  userSel.push(selected);
  botSelection();
  compare(userSel[0], botSel[0]);
  botSel.shift();
  userSel.shift();
};

const compare = async (usuario, computadora) => {
  const respuesta = document.getElementById("id");
  if (usuario === computadora) {
    texto.innerHTML = "Baboso"
    sounds.innerHTML = `<audio src="Sounds/payaso.mp3" autoplay></audio>`
    return (respuesta.innerHTML = `Fue un empate, ambos jugadores eligieron la misma opción 🤡`);
  }

  if (usuario === "c" && computadora === "n") {
    texto.innerHTML = "Click aqui para jugar"
    sounds.innerHTML = `<audio src="Sounds/ganaste.mp3" autoplay></audio>`
    return (respuesta.innerHTML = "Gana el usuario, aplastando la navaja");
  } else if (usuario === "c" && computadora === "p") {
    sounds.innerHTML = `<audio src="Sounds/venganza.mp3" autoplay></audio>`
    texto.innerHTML = "Venganza 💀"
    return (respuesta.innerHTML =
      "Gana la computadora, cubriendo el cuarzo con el pápiro");
  } else if (usuario === "p" && computadora === "n") {
    sounds.innerHTML = `<audio src="Sounds/venganza.mp3" autoplay></audio>`
    texto.innerHTML = "Venganza 💀"
    return (respuesta.innerHTML =
      "Gana la computadora, cortando el pápiro con la navaja");
  } else if (usuario === "p" && computadora === "c") {
    texto.innerHTML = "Click aqui para jugar"
    sounds.innerHTML = `<audio src="Sounds/ganaste.mp3" autoplay></audio>`
    return (respuesta.innerHTML =
      "Gana el usuario, usando pápiro para cubrir el cuarzo");
  } else if (usuario === "n" && computadora === "p") {
    texto.innerHTML = "Click aqui para jugar"
    sounds.innerHTML = `<audio src="Sounds/ganaste.mp3" autoplay></audio>`
    return (respuesta.innerHTML =
      "Gana el usuario, eligiendo la navaja para cortar el pápiro");
  } else if (usuario === "n" && computadora === "c") {
    sounds.innerHTML = `<audio src="Sounds/venganza.mp3" autoplay></audio>`
    texto.innerHTML = "Venganza 💀"
    return (respuesta.innerHTML =
      "Pierde el usuario, la navaja ha sido aplastada por el cuarzo");
  }
};

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  userSelection();
});
