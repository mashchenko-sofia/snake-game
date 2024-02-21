export default class Field {
    constructor(container) {
        this.field = document.createElement('div');
        this.field.className = 'field';

        container.appendChild(this.field);
    }

    createCell(x, y, field) {
        const cell = document.createElement('div');

        cell.className = 'cell';
        cell.setAttribute('id', `cell-${x}-${y}`);
        cell.setAttribute('x', `${x}`);
        cell.setAttribute('y', `${y}`);
        field.appendChild(cell);
    }
    createField(fieldSize) {
        for (let i = 0; i < fieldSize; i++){
            for (let j = 0; j < fieldSize; j++){
                this.createCell(i, j, this.field);
            }
        }
    }

}