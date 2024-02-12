// import '/config.js'
import {Field} from './field.js'
import {Snake} from './snake.js';
import {Apple} from './apple.js';
import {Score} from './score.js';

export default class Game {
    constructor() {
        this.field = new Field(container);
        this.snake = new Snake(snakeColor, snakeLength);
        this.apple = new Apple(appleColor);
        this.score = new Score(0);

        console.log('1')
    }
    update() {
        // обновление данных при изменении
    }
    create() {
        this.field.createField(rows, columns)

        // орисовывает все части игры
        // field, snake, apple, score
    }
}


const btn = document.querySelector('.button');
btn.addEventListener('click', () => {
    console.log('1');

    const game = new Game();
    game.create();

    console.log('2');

});

