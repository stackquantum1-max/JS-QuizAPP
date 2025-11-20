const startBtn = document.querySelector('[data-start]');
const quizSection = document.querySelector('[data-quiz]');
const questionText = document.querySelector('[data-question]');
const optionsContainer = document.querySelector('[data-options]');
const questionNumberElem = document.querySelector('[data-question-number]');
const nextBtn = document.querySelector('[data-next]');
const timerCount = document.querySelector('[data-timer-count]');
const timeLine = document.querySelector('[data-time-progress]');
const scoreSection = document.querySelector('[data-score]');
const scoreText = document.querySelector('[data-score-text]');
const replayBtn = document.querySelector('[data-replay]');
const quitBtn = document.querySelector('[data-quit]');

let counter;
let counterLine;
const quiz = new Quiz(questions);

startBtn.addEventListener('click', () => {
  document.querySelector('[data-start]').closest('section').classList.add('hidden');
  quizSection.classList.remove('hidden');
  showQuestion();
  showNumber();
  startTimer(10);
  startLine();
});

function showQuestion() {
  const current = quiz.getCurrentQuestion();
  questionText.textContent = current.questionText;

  optionsContainer.innerHTML = '';
  for (let key in current.answers) {
    const btn = document.createElement('button');
    btn.classList.add('option');
    btn.dataset.option = key;
    btn.innerHTML = `<b>${key}</b>: ${current.answers[key]}`;
    btn.addEventListener('click', () => optionSelected(btn));
    optionsContainer.appendChild(btn);
  }
}

function optionSelected(btn) {
  clearInterval(counter);
  clearInterval(counterLine);

  const answer = btn.querySelector('b').textContent;
  const current = quiz.getCurrentQuestion();

  if (quiz.checkAnswer(answer)) {
    btn.classList.add('correct');
    quiz.correctAnswers++;
  } else {
    btn.classList.add('incorrect');
    // Highlight correct answer
    document.querySelectorAll('.option').forEach(o => {
      if (o.querySelector('b').textContent === current.correctAnswer) {
        o.classList.add('correct');
      }
    });
  }

  document.querySelectorAll('.option').forEach(o => o.disabled = true);
}

nextBtn.addEventListener('click', () => {
    // Clear previous intervals to avoid duplicates
    clearInterval(counter);
    clearInterval(counterLine);

    if (quiz.nextQuestion()) {
        showQuestion(quiz.getCurrentQuestion());
        showNumber(quiz.questionIndex + 1, quiz.questions.length);
        startTimer(10);
        startLine();
    } else {
        showScore(quiz.correctAnswers, quiz.questions.length);
        quizSection.classList.add('hidden');
        scoreSection.classList.remove('hidden');
    }
});

function showNumber() {
  questionNumberElem.textContent = `${quiz.questionIndex + 1} / ${quiz.questions.length}`;
}

function showScore() {
  scoreText.textContent = `You got ${quiz.correctAnswers} / ${quiz.questions.length} correct`;
}

function startTimer(seconds) {
  let time = seconds;
  timerCount.textContent = time;

 counter = setInterval(() => {
        if (time <= 0) {
            clearInterval(counter);
            timerCount.textContent = "Game Over";
            autoRevealAnswer();
        } else {
            time--;
            timerCount.textContent = time;
        }
    }, 1000);
}

function startLine() {
  let lineWidth = 0;
  counterLine = setInterval(() => {
    lineWidth += 100 / (10 * 50); // same as before
    timeLine.style.width = lineWidth + '%';
    if (lineWidth > 100) clearInterval(counterLine);
  }, 20);
}

function autoRevealAnswer() {
  const correct = quiz.getCurrentQuestion().correctAnswer;
  document.querySelectorAll('.option').forEach(o => {
    if (o.querySelector('b').textContent === correct) o.classList.add('correct');
    o.disabled = true;
  });
}

replayBtn.addEventListener('click', () => {
    scoreSection.classList.add('hidden');
    document.querySelector('.start-section').classList.remove('hidden');
    quiz.reset();
    clearInterval(counter);
    clearInterval(counterLine);
    timerCount.textContent = 10;
    timeLine.style.width = '0%';
    questionText.textContent = '';
    optionsContainer.innerHTML = '';
});

quitBtn.addEventListener('click', () => {
  window.location.reload();
});