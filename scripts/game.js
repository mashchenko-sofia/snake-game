
import { container, snakeColor, snakeLength, appleColor, fieldSize, direction, victoryScore} from './config.js';
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
        }, 1000)

    }
    create() {
        this.score.create();
        this.snake.create();
        console.log(this.snake.body);
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
        // this.score.setRecord();
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

// сохранение рекорда
// врезание в себя
// game over, win
// проверка на не принадлежность клетки змейке



// выбор сложности (скорости)
// управление кнопками с помощью клавиатуры
// settings

// врезание в стены
// внутренние и внешние свойства
// переписать css свойства кнопок (кнопки, голубые кнопки, красные кнопки, прозрачные кнопки)


// более темный фон body

// текстуры для яблока и змейки
// нарисовать пимпочку у яблока
// нарисовать ножки у гусенечки (в зависимости от direction), глазки
// нарисовать яблоко и медаль
// дизайн game over и win 
// css animations