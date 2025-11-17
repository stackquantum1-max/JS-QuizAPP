// Question Class
class Question {
    constructor(questionText, answers, correctAnswer) {
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer; 
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

let questions = [
    new Question(
        "What is the capital of France?",
        { a: "Paris", b: "Berlin", c: "Madrid", d: "Rome" },
        "a"
    ),
    new Question(
        "Which planet is known as the Red Planet?",
        { a: "Earth", b: "Mars", c: "Jupiter", d: "Venus" },
        "b"
    ),
    new Question(
        "Who wrote 'Romeo and Juliet'?",
        { a: "Charles Dickens", b: "Mark Twain", c: "William Shakespeare", d: "Jane Austen" },
        "c"
    ),
    new Question(
        "Which gas do plants absorb from the atmosphere?",
        { a: "Oxygen", b: "Nitrogen", c: "Carbon Dioxide", d: "Hydrogen" },
        "c"
    ),
    new Question(
        "What is H2O commonly known as?",
        { a: "Salt", b: "Water", c: "Hydrogen Peroxide", d: "Oxygen" },
        "b"
    ),
    new Question(
        "How many continents are there on Earth?",
        { a: "5", b: "6", c: "7", d: "8" },
        "c"
    ),
    new Question(
        "Which is the largest mammal in the world?",
        { a: "Elephant", b: "Blue Whale", c: "Giraffe", d: "Hippopotamus" },
        "b"
    ),
];
