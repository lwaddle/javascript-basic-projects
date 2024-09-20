const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Set initial background color
document.body.style.backgroundColor = randomHexColor();

// Set the text for the current background color
const initialBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
color.textContent = initialBackgroundColor;

btn.addEventListener("click", function () {
  const backgroundColor = randomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  color.textContent = backgroundColor;
});

function randomHexColor() {
  const hexCharacters = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'A', 'B', 'C', 'D', 'E','F'
  ];
  const hexCharactersLength = hexCharacters.length;
  const hexColorLength = 6;
  let randomHexColor = '#';
  
  for (i = 0; i < hexColorLength; i++) {
    const randomIndex = Math.floor(Math.random() * hexCharactersLength);
    const randomHexCharacter = hexCharacters[randomIndex];
    randomHexColor += randomHexCharacter;
  }
  return randomHexColor;
}