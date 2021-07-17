const decrementBtn = document.querySelector("[data-action = decrement]");
const incrementBtn = document.querySelector("[data-action = increment]");
const valueEl = document.querySelector("#value");

// console.log(decrementBtn);
// console.log(incrementBtn);

let counterValue = 0;

function increment() {
  //   console.log(`клик по инкремент`);
  counterValue += 1;
  //   console.log(counterValue);
  valueEl.textContent = counterValue;
}
function decrement() {
  //   console.log(`клик по декремент`);
  counterValue -= 1;
  //   console.log(counterValue);
  valueEl.textContent = counterValue;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
