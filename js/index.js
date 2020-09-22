// coding challenge
let QuestionConstructor = function (question, answerChoices, correctAnswers) {
    this.question = question,
    this.answerChoices = answerChoices,
    this.correctAnswers = correctAnswers
}

const question1 = new QuestionConstructor('What is 12 x 12?', ['0: 233', '1: 100', '2: 144'], 2);
const question2 = new QuestionConstructor('In what year did the US get its independence?', ['0: 1800', '1: 1776', '2: 1920'], 1);
const question3 = new QuestionConstructor('How many parts Oxygen is water of?', ['0: 1', '1: 2', '2: 3'], 0);
const question4 = new QuestionConstructor('How many feet are in a mile?', ['0: 2580', '1: 5280', '2: 3000'], 1);



let allQuestions = [question1, question2, question3, question4]

const askQuestion = function (arr) {
     let questionNumber = Math.floor(Math.random() * 4 + 1)
     console.log(arr[questionNumber].question)
     
}

askQuestion(allQuestions)