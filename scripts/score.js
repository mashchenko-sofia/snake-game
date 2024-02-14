export default class Score {
    constructor(score = 0) {
        // инициализация табло
        // нач кол-во очков 
        this.scoreBox = document.querySelector('.score-box');
        this.score = score;

        this.create();
    }
    increase() {
        // увеличение кол-во очков
        this.score += 1;
        this.create();
    }
    // dicrease() {
    //     // уменьшение кол-во очков
    // }
    reset() {
        // сброс очков
        this.score = 0;
        this.create();
    }
    create() {
        this.scoreBox.innerHTML = this.score;
    }
}
