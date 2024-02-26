import { fieldSize } from './config.js';
import Entity from './entity.js';

export default class Snake extends Entity {
    constructor(color, length, direction) {
        super();
  
        // this.color = color;
        this.body = [];
        this._length = length;
        this._direction = direction;
        
        this._isDead = false;
    }
    create() {
        super.newPossition()

        for (let i = 0; i < this._length; i++ ) {
            this.update();
        }
        this.setControls();
    }
    update() {
        if (this._direction === 'up') {
            this.x--;
        } else if (this._direction === 'down') {
            this.x++
        } else if (this._direction === 'left') {
            this.y--
        } else if (this._direction === 'right') {
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
            this._isDead = true;
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
            if ((e.code === 'KeyW' || e.code === 'ArrowUp') && this._direction !== 'down') {
                this._direction = 'up';
            } 
            if ((e.code === 'KeyD' || e.code === 'ArrowRight') && this._direction !== 'left') {
                this._direction = 'right';
            } 
            if ((e.code === 'KeyS' || e.code === 'ArrowDown') && this._direction !== 'up') {
                this._direction = 'down';
            } 
            if ((e.code === 'KeyA' || e.code === 'ArrowLeft') && this._direction !== 'right') {
                this._direction = 'left';
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
        this._isDead = false;
    }
    get isDead() {
        return this._isDead
    }
}