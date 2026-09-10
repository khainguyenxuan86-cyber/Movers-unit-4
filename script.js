const questions = [

  {
    question: "What do you use to write?",
    answers: [
      "A pencil",
      "A banana",
      "A shoe",
      "A ball"
    ],
    correct: 0
  },

  {
    question: "Which animal can fly?",
    answers: [
      "Dog",
      "Cat",
      "Bird",
      "Fish"
    ],
    correct: 2
  },

  {
    question: "What colour is the sun?",
    answers: [
      "Yellow",
      "Blue",
      "Purple",
      "Black"
    ],
    correct: 0
  },

  {
    question: "How many days are there in a week?",
    answers: [
      "Five",
      "Six",
      "Seven",
      "Eight"
    ],
    correct: 2
  },

  {
    question: "Which one is a fruit?",
    answers: [
      "Apple",
      "Chair",
      "Book",
      "Car"
    ],
    correct: 0
  }

];


let currentQuestion = 0;
let score = 0;


function loadQuestion() {

  document
    .getElementById("result")
    .innerHTML = "";


  document
    .getElementById("nextBtn")
    .style.display = "none";


  const question =
    questions[currentQuestion];


  document
    .getElementById("progress")
    .innerHTML =
    `Question ${currentQuestion + 1} of ${questions.length}`;


  document
    .getElementById("question")
    .innerHTML =
    question.question;


  const answersContainer =
    document
      .getElementById("answers");


  answersContainer.innerHTML = "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");


      button.innerHTML =
        answer;


      button.classList.add(
        "answer-btn"
      );


      button.onclick =
        () => checkAnswer(index);


      answersContainer.appendChild(
        button
      );

    }
  );

}


function checkAnswer(selectedAnswer) {

  const question =
    questions[currentQuestion];


  const buttons =
    document.querySelectorAll(
      ".answer-btn"
    );


  buttons.forEach(
    (button, index) => {

      button.disabled = true;


      if (
        index === question.correct
      ) {

        button.classList.add(
          "correct"
        );

      }

    }
  );


  if (
    selectedAnswer === question.correct
  ) {

    score++;


    document
      .getElementById("result")
      .innerHTML =
      "🎉 Correct! Great job!";

  }

  else {

    buttons[
      selectedAnswer
    ]
      .classList.add(
        "wrong"
      );


    document
      .getElementById("result")
      .innerHTML =
      "❌ Oops! The green answer is correct!";

  }


  document
    .getElementById("nextBtn")
    .style.display =
    "inline-block";

}


function nextQuestion() {

  currentQuestion++;


  if (
    currentQuestion <
    questions.length
  ) {

    loadQuestion();

  }

  else {

    showFinalResult();

  }

}


function showFinalResult() {

  document
    .querySelector(
      ".game-container"
    )
    .innerHTML = `

      <h1>🏆 Game Over!</h1>

      <div id="result">

        You got
        ${score} / ${questions.length}
        correct!

      </div>

      <button
        class="next-btn"
        onclick="restartGame()"
      >

        🔄 Play Again

      </button>

    `;

}


function restartGame() {

  currentQuestion = 0;

  score = 0;


  document
    .querySelector(
      ".game-container"
    )
    .innerHTML = `

      <h1>
        🎮 Movers Unit 4 Quiz
      </h1>

      <div
        class="progress"
        id="progress"
      ></div>

      <div
        class="question"
        id="question"
      ></div>

      <div
        class="answers"
        id="answers"
      ></div>

      <div
        id="result"
      ></div>

      <button
        class="next-btn"
        id="nextBtn"
        onclick="nextQuestion()"
        style="display:none;"
      >

        Next ➡️

      </button>

    `;


  loadQuestion();

}


loadQuestion();
