let body = document.querySelector('body');
let button = document.querySelector('button');
let currentDiv = document.createElement('div');
let counter = 0;

currentDiv.setAttribute('class', `container${counter}`);
currentDiv.style.position = 'absolute';
currentDiv.style.height = '100%';
currentDiv.style.width = '100%';
currentDiv.style.border = '10px solid black';
body.appendChild(currentDiv);

button.addEventListener('click', () => {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', `container${counter}` )
    newDiv.style.border = '30px solid' + getRandomColor();
    newDiv.style.height = `calc(100% - ${.1 + counter * .1}px)`; // Subtract the border width
    newDiv.style.width = `calc(100% - ${.1 + counter * .1}px)`; // Subtract the border width
    newDiv.style.position = `absolute`;
    newDiv.style.top = `${.01 + counter * .01}px`; // Half of the border width
    newDiv.style.left = `${.01 + counter * .01}px`; // Half of the border width
    
    currentDiv.appendChild(newDiv)
    currentDiv = newDiv;
    counter++;
})

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

