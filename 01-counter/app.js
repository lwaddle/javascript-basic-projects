const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const value = document.querySelector(".value");

// Initialize the starting count to 0
let counter = 0;

// Set the displayed value to match counter
value.textContent = counter.toString();

decrease.addEventListener("click", function () {
  counter -= 1;
  value.textContent = counter.toString();
  setValueColor();
});

reset.addEventListener("click", function () {
  counter = 0;
  value.textContent = counter.toString();
  setValueColor();
});

increase.addEventListener("click", function () {
  counter += 1;
  value.textContent = counter.toString();
  setValueColor();
});

function setValueColor() {
  value.classList.remove(value.classList[1]);

  if (counter === 0) {
    value.classList.add("text-black");
  } else if (counter < 0) {
    value.classList.add("text-red");
  } else {
    value.classList.add("text-green");
  }
}