const container = document.querySelector('.game__body');

const snakeColor = '#158FAD'
const snakeLength = 5;


const appleColor = '#B8255F'

const fieldSize = 20;

const direction = 'right';

const easySpeed = 1000;
const normalSpeed = 500; 
const hardSpeed = 250;

const victoryScore = fieldSize^2 - snakeLength;

export { 
    container, snakeColor, snakeLength, 
    appleColor, fieldSize, direction, 
    easySpeed, normalSpeed, hardSpeed, 
    victoryScore 
}