

const createBtn = document.querySelector("button[data-create]");
createBtn.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.addEventListener("click", () => {
  divBox.innerHTML = "";
  inputEl.value = "";
});

const inputEl = document.querySelector("div>input");

const divBox = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divBox.append(newDiv);
  }
}