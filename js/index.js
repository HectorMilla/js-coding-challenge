// coding challenge
let QuestionConstructor = function (question, answerChoices, correctAnswers) {
    this.question = question,
    this.answerChoices = answerChoices,
    this.correctAnswers = correctAnswers
}

const question1 = new QuestionConstructor('What is 12 x 12?', ['0: 233', '1: 100', '2: 144'], 2);
const question2 = new QuestionConstructor('What is 12 x 12?', ['0: 233', '1: 100', '2: 144'], 2);
const question3 = new QuestionConstructor('What is 12 x 12?', ['0: 233', '1: 100', '2: 144'], 2);
const question4 = new QuestionConstructor('What is 12 x 12?', ['0: 233', '1: 100', '2: 144'], 2);

console.log(question1.question);