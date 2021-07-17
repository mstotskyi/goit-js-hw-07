const input = document.querySelector("#name-input");
console.log(input);
const inputViewer = document.querySelector("#name-output");
console.log(inputViewer);

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value.trim()
    ? (inputViewer.textContent = event.currentTarget.value)
    : (inputViewer.textContent = "незнакомец");
}
