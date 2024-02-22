import { fieldSize } from './config.js';
import Entity from './entity.js';

export default class Snake extends Entity {
    constructor(color, length, direction) {
        super();
  
        this.color = color;
        this.body = [];
        this.length = length;
        this.direction = direction;
        
        this.isDead = false;
        this.isFull = false;
    }
    create() {
        super.newPossition()

        for (let i = 0; i < this.length; i++ ) {
            this.update();
        }
        this.setControls();
    }
    update() {
        if (this.direction === 'up') {
            this.x--;
        } else if (this.direction === 'down') {
            this.x++
        } else if (this.direction === 'left') {
            this.y--
        } else if (this.direction === 'right') {
            this.y++
        };

        if (this.x < 0) {
            this.x += fieldSize
        } else if (this.x >= fieldSize) {
            this.x = 0;
        } 

        if (this.y < 0) {
            this.y += fieldSize
        } else if (this.y >= fieldSize) {
            this.y = 0;
        } 


        this.cell = document.getElementById(`cell-${this.x}-${this.y}`)

        if (this.body.includes(this.cell)) {
            this.isDead = true;
        } else {
            this.cell.classList.add('snake');
            this.body.push(this.cell);
        }
    }
    eat(apple, score) {
        apple.destroy();
        score.increase();
        apple.create();

    }
    setControls() {
        document.addEventListener('keydown', (e) => {
            if ((e.code === 'KeyW' || e.code === 'ArrowUp') && this.direction !== 'down') {
                this.direction = 'up';
            } 
            if ((e.code === 'KeyD' || e.code === 'ArrowRight') && this.direction !== 'left') {
                this.direction = 'right';
            } 
            if ((e.code === 'KeyS' || e.code === 'ArrowDown') && this.direction !== 'up') {
                this.direction = 'down';
            } 
            if ((e.code === 'KeyA' || e.code === 'ArrowLeft') && this.direction !== 'right') {
                this.direction = 'left';
            }
        });

    }
    move(apple, score) {
        const applePos = document.getElementsByClassName('apple')[0];

        this.update();

        if (this.body[this.body.length - 1] == applePos) {
            this.eat(apple, score);
        } else {
            this.destroy();
        }


    }
    destroy() {
        this.body.shift().classList.remove('snake');
    }
    die() {
        for (let i = 0; i < this.body.length; i++ ) {
            this.body[i].classList.remove('snake')
        }
        this.body = [];
        this.isDead = false;
        this.isFull = false;
    }
}