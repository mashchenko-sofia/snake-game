
import { container, snakeColor, snakeLength, appleColor, rows, columns, direction } from './config.js';
import Field from './field.js'
import Snake from './snake.js';
import Apple from './apple.js';
import Score from './score.js';

// export default 
class Game {
    constructor() {
        this.field = new Field(container);
        this.snake = new Snake(snakeColor, snakeLength, direction);
        this.apple = new Apple(appleColor);
        this.score = new Score();
    }
    update() {
        // обновление данных при изменении
    }
    create() {
        this.field.createField(rows, columns);
        this.apple.create();
        this.snake.create();
        // let i = 0;  
        // setInterval(() => console.log(i++), 1000);  
        // орисовывает все части игры
        // field, snake, apple, score
    }
}

const btn = document.querySelector('.button');
btn.addEventListener('click', () => {
    const game = new Game();
    game.create();
});
