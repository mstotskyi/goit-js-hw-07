const input = document.querySelector("#name-input");
console.log(input);
const inputViewer = document.querySelector("#name-output");
console.log(inputViewer);

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  inputViewer.textContent = event.currentTarget.value;
}
