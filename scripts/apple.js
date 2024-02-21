import Entity from './entity.js';

export default class Apple extends Entity {
    constructor(color, snake) {
        super();
        
        this.color = color; 
        this.snake = snake;
    }
    create() {
        super.newPossition();

        this.cell = document.getElementById(`cell-${this.x}-${this.y}`);
        if (this.snake.body.includes(this.cell)) {
            this.create()
        } else {
            this.cell.classList.add('apple');
        }
    }
    destroy() {
        this.cell.classList.remove('apple');
    }
}

