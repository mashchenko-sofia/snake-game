
import { container, snakeColor, snakeLength, 
    appleColor, fieldSize, direction, easySpeed, 
    normalSpeed, hardSpeed, victoryScore} from './config.js';
import Field from './field.js'
import Snake from './snake.js';
import Apple from './apple.js';
import Score from './score.js';

class Game {
    constructor() {
        this.field = new Field(container);
        this.score = new Score();
        this.snake = new Snake(snakeColor, snakeLength, direction);
        this.apple = new Apple(appleColor, this.snake);

        this.promtWindow = document.querySelector('.difficulty');
        this.gameWindow = document.querySelector('.game__body');
        this.menuWindow = document.querySelector('.menu');
        this.settingsWindow = document.querySelector('.settings');

        this.gameFinishedWindow = document.querySelector('.game-finished-window');
        
        this.gameOverTitle = document.querySelector('.game-over__title');
        this.victoryTitle = document.querySelector('.victory__title');

    }
    start() {
        this.menuWindow.classList.add('invisible');
        this.gameWindow.classList.remove('blured');

        this.selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;

        if (this.selectedDifficulty === 'easy') {
            this.speed = easySpeed;
        };
        if (this.selectedDifficulty === 'normal') {
            this.speed = normalSpeed;
        };
        if (this.selectedDifficulty === 'hard') {
            this.speed = hardSpeed;
        };

        this.snakeMove = setInterval(() => {
            if (this.snake.isDead) {
                this.finish();
                this.gameOverTitle.classList.remove('invisible');
            } else if (this.score.currentScore === victoryScore) {
                this.finish();
                this.victoryTitle.classList.remove('invisible');
            } else {
                this.snake.move(this.apple, this.score);
            }
        }, this.speed);

    }
    create() {
        this.score.create();
        this.snake.create();
        setTimeout(this.apple.create(), 1500);
    }
    stop() {
        this.gameWindow.classList.add('blured');
        this.menuWindow.classList.remove('invisible');
        clearInterval(this.snakeMove);
    }
    finish() {
        this.stop()
        this.snake.die();
        this.apple.destroy();
        this.score.reset();

        this.menuWindow.classList.add('invisible');
        this.gameFinishedWindow.classList.remove('invisible');
        
    }

};
const game = new Game();
game.field.createField(fieldSize);

const startBtn = document.querySelector('.start-button');
startBtn.addEventListener('click', () => {
    game.promtWindow.classList.add('invisible');
    game.create();
    game.start();
    stopBtn.classList.remove('invisible');
});

const restartBtn = document.querySelector('.restart-button');
restartBtn.addEventListener('click', () => {
    game.gameFinishedWindow.classList.add('invisible')
    game.create();
    game.start();
    stopBtn.classList.remove('invisible');
})

const continueBtn = document.querySelector('.continue-button');
continueBtn.addEventListener('click', () => {
    game.start();
    stopBtn.classList.remove('invisible');
})

const stopBtn = document.querySelector('.stop-button');
stopBtn.addEventListener('click', () => {
    game.stop();
    stopBtn.classList.add('invisible');
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Tab') {
        game.stop();
    }
});

const settingsButton = document.querySelector('.settings-button');
settingsButton.addEventListener('click', () => {
    game.menuWindow.classList.add('invisible');
    game.settingsWindow.classList.remove('invisible');
})

const returnButton = document.querySelector('.return-from-settings-button');
returnButton.addEventListener('click', () => {
    game.menuWindow.classList.remove('invisible');
    game.settingsWindow.classList.add('invisible');
})

const resetRecordButton = document.querySelector('.reset-record-button');
resetRecordButton.addEventListener('click', () => {
    game.score.resetRecord();
    game.score.create();
});

// delites comments, adds apple design







// переключение фокуса между объектами на экране с помощью клавиатуры

// const focusableElements = document.querySelectorAll(` input:not(.invisible input):not(.invisible), button:not(.invisible button):not(.invisible)`)
// console.log(focusableElements);
// let currentFocus = 0;
// document.addEventListener('keydown', function(e) {
//     e.preventDefault();
//     if (e.code === 'KeyI') {
//         currentFocus++;
//         if (currentFocus < 0) {
//             currentFocus = focusableElements.length - 1;
//         }
//         console.log(currentFocus);
//         focusableElements[currentFocus].focus();
//     } else if (e.code === 'KeyK') {
//         currentFocus--;
//         if (currentFocus >= focusableElements.length) {
//             currentFocus = 0;
//         }
//         console.log(currentFocus);
//         focusableElements[currentFocus].focus();
//     } else if (e.code === 'Enter') {
//         focusableElements[currentFocus].click();
//     }
// });





// const focusableElements = document.querySelectorAll(` input:not(.invisible input):not(.invisible), button:not(.invisible button):not(.invisible)`)

// function handleKeyDown(e) {
//   let activeElement = 0;
//   console.log(activeElement);
//   if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
//     activeElement-- || focusableElements[focusableElements.length - 1];
    
//     focusableElements[activeElement].focus();
//   } else if (e.code === 'KeyD' || e.code === 'ArrowRight') {
//     activeElement++ || activeElement = 0;
//     focusableElements[activeElement].focus();
//   } else if (e.code === 'Enter') {
//     activeElement.click();
//   }
// }
// document.addEventListener('keydown', handleKeyDown);
// focusableElements[0].focus(); 




// document.addEventListener('keydown', function(e) {
//     const activeElement = document.activeElement;
//     if (e.key === 'ArrowUp') {

//     } else if (e.key === 'ArrowDown') {

//     } else if (e.key === 'Enter') {

//     }
//   });