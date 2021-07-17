const inputNumber = document.querySelector("#controls input");
const renderBtn = document.querySelector('[data-action = render]');
const destroyBtn = document.querySelector('[data-action = destroy]');
const boxesRef = document.querySelector('#boxes');

let amount = 0;

inputNumber.addEventListener('input', () => {

 amount = inputNumber.value;

 console.log(amount);

});




renderBtn.addEventListener('click', () => {
    createBoxes(amount)
};

function createBoxes(amount) {
    for (let i = 0; i < amount; i+1){

    }
}

// destroyBtn.addEventListener('click', ());