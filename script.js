let currentQuestion = 0;
let score = 0;


const questions =
  gameData.questions;


document
  .getElementById("gameTitle")
  .textContent =
  gameData.title;


const nextButton =
  document.getElementById(
    "nextBtn"
  );


nextButton.addEventListener(
  "click",
  nextQuestion
);



/* =========================
   LOAD QUESTION
========================= */

function loadQuestion() {

  const question =
    questions[currentQuestion];


  const questionImage =
    document.getElementById(
      "questionImage"
    );


  /* Reset */

  document
    .getElementById("result")
    .textContent = "";


  nextButton.style.display =
    "none";


  /* Progress */

  document
    .getElementById("progress")
    .textContent =

    `Question ${currentQuestion + 1} of ${questions.length}`;


  /* Question */

  document
    .getElementById("question")
    .textContent =

    question.question;


  /* Image */

  if (question.image) {

    questionImage.src =
      question.image;


    questionImage.alt =
      question.question;


    questionImage.style.display =
      "block";

  }

  else {

    questionImage.removeAttribute(
      "src"
    );


    questionImage.alt = "";


    questionImage.style.display =
      "none";

  }


  /* Answers */

  const answersContainer =
    document.getElementById(
      "answers"
    );


  answersContainer.innerHTML =
    "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.textContent =
        answer;


      button.classList.add(
        "answer-btn"
      );


      button.addEventListener(
        "click",
        () =>
          checkAnswer(index)
      );


      answersContainer.appendChild(
        button
      );

    }
  );

}



/* =========================
   CHECK ANSWER
========================= */

function checkAnswer(
  selectedAnswer
) {

  const question =
    questions[currentQuestion];


  const buttons =
    document.querySelectorAll(
      ".answer-btn"
    );


  buttons.forEach(
    (button, index) => {

      button.disabled =
        true;


      if (
        index === question.correct
      ) {

        button.classList.add(
          "correct"
        );

      }

    }
  );


  const result =
    document.getElementById(
      "result"
    );


  if (
    selectedAnswer ===
    question.correct
  ) {

    score++;


    result.textContent =
      "🎉 Correct! Great job!";

  }

  else {

    buttons[
      selectedAnswer
    ].classList.add(
      "wrong"
    );


    result.textContent =
      "❌ Oops! The green answer is correct!";

  }


  nextButton.style.display =
    "inline-block";

}



/* =========================
   NEXT QUESTION
========================= */

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



/* =========================
   FINAL RESULT
========================= */

function showFinalResult() {

  const gameContainer =
    document.querySelector(
      ".game-container"
    );


  gameContainer.innerHTML = `

    <h1>
      🏆 Game Over!
    </h1>

    <div class="result">

      You got
      ${score} / ${questions.length}
      correct!

    </div>

    <button
      class="next-btn"
      id="restartBtn"
      type="button"
    >
      🔄 Play Again
    </button>

  `;


  document
    .getElementById(
      "restartBtn"
    )
    .addEventListener(
      "click",
      restartGame
    );

}



/* =========================
   RESTART GAME
========================= */

function restartGame() {

  currentQuestion = 0;
  score = 0;


  window.location.reload();

}



/* =========================
   START GAME
========================= */

loadQuestion();
