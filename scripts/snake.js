// import {rows, columns} from './config.js';
import Entity from './entity.js';

export default class Snake extends Entity {
    constructor(color, length, direction) {
        super();
        // инициализация входящих параметров 
        // размер, цвет, начальная позиция

        this.color = color;
        this.length = length;
        this.direction = direction;
    }
    create() {
        super.newPossition()

        this.update(this.x, this.y);
        this.move();
    }
    update(x, y) {
        this.head = document.getElementById(`cell-${x}-${y}`);
        this.head.classList.add('snake');
        this.head.classList.add('snake-head')


        for (let i = 1; i < this.length; i++) {
            this.tail = document.getElementById(`cell-${x + i}-${y}`);
            this.tail.classList.add('snake');
            this.tail.classList.add('snake-tail');
        }
    }
    eat() {

    }
    control() {

        // if ()
        // умправление змейкой
        // обработка кнопок клавиатуры
        // up, down, left, right
    }
    move() {
        setInterval(() => {
            // console.log(100)

            if (this.direction === 'up') {
                this.x--;
            } else if (this.direction === 'down') {
                this.x++;
            } else if (this.direction === 'left') {
                this.y--;
            } else if (this.direction === 'right') {
                this.y++;
            }
            this.update(this.x, this.y);
        }, 1000);           
    }
    hit() {

    }
    die() {
        // смерть змейки
        // врезаться в стену, в саму себя
    }
}



// draw, move, control, death, eat


// массив кординат 
// если координаты клетки совпадает с координатой то добав класс