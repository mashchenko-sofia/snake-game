export default class Score {
    constructor(currentScore = 0) {
        this.scoreBox = document.querySelector('.score__count');
        this.recordBox = document.querySelector('.record__count');
        this.recordInSettings = document.querySelector('.record__count-in-settings');

        this._currentScore = currentScore;
    }
    increase() {
        this._currentScore += 1;
        this.setRecord();
        this.create();
    }
    reset() {
        this._currentScore = 0;
        this.create();
    }
    setRecord() {
        if (this._currentScore >= this._record) {
            localStorage.setItem('record', this._currentScore);
        } else {
            localStorage.setItem('record', this._record)
        }
    }
    resetRecord() {
        localStorage.removeItem('record');
    }
    create() {
        this._record = localStorage.getItem('record');
        if (this._record === null) {
            this._record = 0;
        }

        this.scoreBox.innerHTML = this._currentScore;
        this.recordBox.innerHTML = this._record;
        this.recordInSettings.innerHTML = this._record;
    }
    get currentScore() {
        return this._currentScore;
    }
    get record() {
        return this._record;
    }
}
