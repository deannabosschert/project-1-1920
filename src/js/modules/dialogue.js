const Dialogue = {
  start: () => {
    console.log("eee!")
    const startBtn = document.getElementById('starten');
    const intro = document.querySelector('.intro');
    startBtn.addEventListener('click', function onOpen() {
      console.log("click!")
      Dialogue.question1()
      const act = document.querySelector(".q1 ")

      updateQuestionUI("q1")
    })
  },
  question1: () => {

  },
  question2: () => {

  },
  question3: () => {

  },
  question4: () => {

  },
  question5: () => {

  },
}



function updateQuestionUI(vraag) {
  const questions = document.querySelectorAll("question")
  questions.forEach(question => {
    question.classList.remove("visible")
  })
  const activeQuestion = document.querySelector(`.${vraag}`)
  activeQuestion.classList.add("visible")
}







export {
  Dialogue
}