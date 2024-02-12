import 'config.js'

export default class Snake {
    constructor(color, length) {
        // инициализация входящих параметров 
        // размер, цвет, начальная позиция
        this.color = color;
        this.length = length;
    }
    createSnake() {
        for (let i = 0; i < this.length; i++) {

        }
        // отрисовка змейки
    }
    eat() {

    }
    control() {
        // умправление змейкой
        // обработка кнопок клавиатуры
        // up, down, left, right
    }
    move() {

    }
    hit() {

    }
    die() {
        // смерть змейки
        // врезаться в стену, в саму себя
    }
}



// draw, move, control, death, eat