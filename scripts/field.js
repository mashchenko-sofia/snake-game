import {container} from './config.js'

export default class Field {
    constructor(container) {
        // this.field = document.createElement('div');
        // this.field.className = 'field';

        // container.appendChild(this.field);
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
        
                // this.cell.width = 600;
                // this.cell.height = 600;
    }
    createField(rows, columns) {
        for (let i = 0; i < rows; i++){
            for (let j = 0; j < columns; j++){
                this.createCell(i, j, this.field);
            }
        }
    }

}



// export default class Cell {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     create(x, y, field) {
//         this.cell = document.createElement('div');
        
//         this.cell.className = 'cell';
//         this.cell.setAttribute('id', `cell-${x}-${y}`)
//         this.cell.setAttribute('x', `${x}`);
//         this.cell.setAttribute('y', `${y}`);
//         field.appendChild(this.cell);

//         // this.cell.width = 600;
//         // this.cell.height = 600;

          
//     }


//     // isOn(cell) {
//     //     if (this.x === cell.x && this.y === cell.y) {

//     //     }
//     // }
// }
