export default class Score {
    constructor(currentScore = 0) {
        this.scoreBox = document.querySelector('.score__count');
        this.recordBox = document.querySelector('.record__count');
        this.recordInSettings = document.querySelector('.record__count-in-settings');

        this.currentScore = currentScore;

       
        // this.record = localStorage.getItem('record');
        // document.addEventListener('DOMContentLoaded', () => {
        //     // if(this.record) this.create()
        // })
    }
    increase() {
        this.currentScore += 1;
        this.setRecord();
        this.create();
    }
    // dicrease() {
    //     // уменьшение кол-во очков
    // }
    reset() {
        this.currentScore = 0;
        this.create();
    }
    setRecord() {
        if (this.currentScore >= this.record) {
            localStorage.setItem('record', this.currentScore);
        } else {
            localStorage.setItem('record', this.record)
        }
    }
    resetRecord() {
        localStorage.removeItem('record');
    }
    create() {
        this.record = localStorage.getItem('record');
        if (this.record === null) {
            this.record = 0;
        }
        console.log(this.record);

        this.scoreBox.innerHTML = this.currentScore;
        this.recordBox.innerHTML = this.record;
        this.recordInSettings.innerHTML = this.record;

    }
}
