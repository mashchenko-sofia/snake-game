import {fieldSize} from './config.js';


export default class Entity {
    constructor() {
    }
    newPossition() {
        this.x = Math.floor(Math.random() * fieldSize);
        this.y = Math.floor(Math.random() * fieldSize);
    }
}