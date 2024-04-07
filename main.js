let button = document.querySelector('button');
let counter = 0;



button.addEventListener('click', () => {
    let container = document.querySelector(`.container${counter}`);
    counter++
    const div = document.createElement('div');
    div.setAttribute('class', `container${counter}`)
    div.style.border = '30px solid' + getRandomColor(); 
    div.style.height = '100%' 
    container.appendChild(div)
    
    if(div.offsetWidth < 1105 || div.offsetHeight < 140){
        resetContainer();
    }
    console.log(div.offsetWidth, div.offsetHeight)
})

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function resetContainer() {
    const firstDiv = document.querySelector('.container1');
    firstDiv.remove();
    counter = 0;
}

