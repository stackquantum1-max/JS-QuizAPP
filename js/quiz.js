class Quiz {
    constructor(questions){
        this.questions = questions;
        this.questionIndex = 0;
        this.correctAnswers = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.questionIndex];
    }

    checkAnswer(answer) {
        return this.getCurrentQuestion().checkAnswer(answer);
    }

    nextQuestion() {
        if (this.questionIndex + 1 < this.questions.length) {
            this.questionIndex++;
            return true;
        } else {
            return false;
        }
    }

    reset() {
        this.questionIndex = 0;
        this.correctAnswers = 0;
    }
}
