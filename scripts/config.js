const container = document.querySelector('.game-body');
console.log('container', container)


const snakeColor = '#158FAD' // hex teal
const snakeLength = 4;


const appleColor = '#B8255F' // hex berry red; DB4035 -- hex red
// каждую игру случайный цвет

const rows = 20;
const columns = 20;

const direction = 'up'

export { 
    container, snakeColor, snakeLength, 
    appleColor, rows, columns, direction 
}