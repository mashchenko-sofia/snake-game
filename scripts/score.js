export default class Score {
    constructor(score = 0) {
        // инициализация табло
        // нач кол-во очков 
        this.scoreBox = document.querySelector('.score-box');
        this.score = score;

        this.draw();
    }
    increase() {
        // увеличение кол-во очков
        this.score += 1;
        this.draw();
    }
    // dicrease() {
    //     // уменьшение кол-во очков
    // }
    reset() {
        // сброс очков
        this.score = 0;
        this.draw();
    }
    draw() {
        this.scoreBox.innerHTML = this.score;
    }
}
