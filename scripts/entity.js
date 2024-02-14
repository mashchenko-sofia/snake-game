import {rows, columns} from './config.js';


export default class Entity {
    constructor() {
    }
    newPossition() {
        this.x = Math.floor(Math.random() * rows);
        this.y = Math.floor(Math.random() * columns);
    }
    destroy() {
        this.cell.className = 'cell';
    }
}