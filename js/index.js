// coding challenge

// constructor that will make new questions //

let QuestionConstructor = function (question, answerChoices, correctAnswer) {
    this.question = question,
    this.answerChoices = answerChoices,
    this.correctAnswer = correctAnswer
}

// Prototype used to ask a questio in the console //

QuestionConstructor.prototype.ask = function () {
        console.log(this.question);
        for (i = 0; i < this.answerChoices.length; i++) {
            console.log( this.answerChoices[i])
        }

}

// created new questions using constructor //

const question1 = new QuestionConstructor('What is 12 x 12?', ['0: 233', '1: 100', '2: 144'], 2);
const question2 = new QuestionConstructor('In what year did the US get its independence?', ['0: 1800', '1: 1776', '2: 1920'], 1);
const question3 = new QuestionConstructor('How many parts Oxygen is water of?', ['0: 1', '1: 2', '2: 3'], 0);
const question4 = new QuestionConstructor('How many feet are in a mile?', ['0: 2580', '1: 5280', '2: 3000'], 1);


// created array with all of the question objects //

let allQuestions = [question1, question2, question3, question4]


// function that will select a random question to ask //
const askQuestion = function (arr) {
     let questionNumber = Math.floor(Math.random() * 4)
     arr[questionNumber].ask()   
     promptQuestion(arr[questionNumber].question,arr[questionNumber].correctAnswer)
     
}

// function that will prompt a question and check if the answer is correct // 
const promptQuestion = function (question, response) {
    let answer = prompt(question);
    if( answer === response) {
        console.log('You got the correct answer!!');
    } else {
        console.log("Your answer was incorect :(");
    }
}
askQuestion(allQuestions)

