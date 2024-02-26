
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
        stopBtn.classList.remove('invisible');

        this.selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;

        if (this.selectedDifficulty === 'easy') {
            this._speed = easySpeed;
        };
        if (this.selectedDifficulty === 'normal') {
            this._speed = normalSpeed;
        };
        if (this.selectedDifficulty === 'hard') {
            this._speed = hardSpeed;
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
        }, this._speed);

    }
    create() {
        this.promtWindow.classList.add('invisible');
        this.gameFinishedWindow.classList.add('invisible')


        this.score.create();
        this.snake.create();
        setTimeout(this.apple.create(), 1500);
    }
    stop() {
        this.gameWindow.classList.add('blured');
        this.menuWindow.classList.remove('invisible');
        stopBtn.classList.add('invisible');

        clearInterval(this.snakeMove);
    }
    finish() {
        this.stop()
        this.snake.die();
        this.apple.destroy();
        this.score.reset();

        this.menuWindow.classList.add('invisible');
        this.gameFinishedWindow.classList.remove('invisible');
        stopBtn.classList.add('invisible');
    }

};
const game = new Game();
game.field.createField(fieldSize);

const startBtn = document.querySelector('.start-button');
startBtn.addEventListener('click', () => {
    game.create();
    game.start();
});

const restartBtn = document.querySelector('.restart-button');
restartBtn.addEventListener('click', () => {
    game.create();
    game.start();
})

const continueBtn = document.querySelector('.continue-button');
continueBtn.addEventListener('click', () => {
    game.start();
})

const stopBtn = document.querySelector('.stop-button');
stopBtn.addEventListener('click', () => {
    game.stop();
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




// переключение фокуса между объектами на экране с помощью клавиатуры

const focusableElements = document.querySelectorAll(` input:not(.invisible input):not(.invisible), button:not(.invisible button):not(.invisible)`);
let currentFocusIndex = 0;
document.addEventListener("keydown", e => {
  e.preventDefault();

  switch (e.code) {
    case "KeyS":
      moveToNextElement();
      break;
    case "KeyW":
      moveToPreviousElement();
      break;
    case "Enter":
      handleEnterPress();
      break;
  }
});

function moveToNextElement() {
  const nextIndex = getNextFocusableIndex();
  focusOnElementAtIndex(nextIndex);
}

function moveToPreviousElement() {
  const previousIndex = getPreviousFocusableIndex();
  focusOnElementAtIndex(previousIndex);
}

function handleEnterPress() {
  focusableElements[currentFocusIndex].click();
}

function getNextFocusableIndex() {
  return Math.min(focusableElements.length - 1, currentFocusIndex + 1);
}

function getPreviousFocusableIndex() {
  return Math.max(0, currentFocusIndex - 1);
}

function focusOnElementAtIndex(index) {
  currentFocusIndex = index;
  const element = focusableElements[index];
  const closestLabel = element.closest('label');

  if (closestLabel) {
    closestLabel.focus();
  } else {
    element.focus();
  }
}