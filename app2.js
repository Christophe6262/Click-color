const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
// recuperer mes variables
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const color = document.querySelector(".color");

function generateColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomHex =
      hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
    hexColor = hexColor + randomHex;
  }
  color.textContent = hexColor;
  body.style.backgroundColor = hexColor;
}
// genere un nombre aleatoire qui va chercher l'index correspondant dans le tableau a faire 6x
//  dans une boucle et le pousse dans le 1er tableau avec le #
// transforme le tableau en une chaine de caractere
btn.addEventListener("click", generateColor);
