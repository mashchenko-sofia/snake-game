// import {rows, columns} from './config.js';
import Entity from './entity.js';

export default class Apple extends Entity {
    constructor(color) {
        super();
        // инициализация параметров
        // цвет, размер, начальная позиция
        this.color = color; 
    }
    create() {
        super.newPossition();

        this.cell = document.getElementById(`cell-${this.x}-${this.y}`);
        this.cell.classList.add('apple');

        // this.cell.style.backgroundColor = `${this.color}`;
        // отрисовка яблока
    }
}

