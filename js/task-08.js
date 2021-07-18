const inputNumber = document.querySelector("#controls input");
const renderBtn = document.querySelector('[data-action = render]');
const destroyBtn = document.querySelector('[data-action = destroy]');
const boxesRef = document.querySelector('#boxes');

let defaultSize = 30;

renderBtn.addEventListener('click', handleRenderBtnClick);
destroyBtn.addEventListener('click', handleDestroyBtnClick);



function handleRenderBtnClick () {

    const amount = Number(inputNumber.value);
    createBoxes(amount);
}

function createBoxes(amount) {
    const collection = []
    for (let i = 0; i < amount; i +=1){
        
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
boxesRef.innerHTML = '';
defaultSize = 30;
inputNumber.value = '';

}

