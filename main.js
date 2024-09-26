'use strict';

let colorBlock = document.getElementById('colorBlock');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');

let colorInterval;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startChangingColor() {
    if (!colorInterval) {
        colorInterval = setInterval(() => {
            colorBlock.style.backgroundColor = getRandomColor();
        }, 500);
    }
}

function stopChangingColor() {
    clearInterval(colorInterval);
    colorInterval = null;
}

startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);