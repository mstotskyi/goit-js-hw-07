const inputNumber = document.querySelector("#controls input");
console.log(inputNumber);
const renderBtn = document.querySelector('[data-action = render]');
console.log(renderBtn);
const destroyBtn = document.querySelector('[data-action = destroy]');
console.log(destroyBtn);
const boxesRef = document.querySelector('#boxes');
console.log(boxesRef);

let defaultSize = 30;

renderBtn.addEventListener('click', handleRenderBtnClick);

destroyBtn.addEventListener('click', handleDestroyBtnClick);



function handleRenderBtnClick () {

    const amount = Number(inputNumber.value);
    createBoxes(amount);
}

function createBoxes(amount) {
    const collection = []
    for (let i = 0; i < amount; i +1){
        
     const div = document.createElement('div');
     div.style.backgroundColor = createRandom();
     div.style.width = defaultSize + 'px';
     div.style.height = defaultSize + 'px';
     defaultSize += 10;
     console.log(div);
     collection.push(div);
    }

    boxesRef.append(...collection);
}

function createRandom() {
    return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0})`;
}

function handleDestroyBtnClick() {

}

