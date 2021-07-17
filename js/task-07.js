const fontSizeInput = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

fontSizeInput.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  let fontSize = event.currentTarget.value;

  text.style.fontSize = fontSize + "px";
}
