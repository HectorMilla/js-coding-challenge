// coding challenge

(function () {
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
    // Prototype that will check if the ans given is correct
    QuestionConstructor.prototype.checkAnswer = function(ans, callback) {
        let sc;
        if (ans == this.correctAnswer) {
      
            console.log('You got the correct answer!!'); 
            sc = callback(true) 
        } else if (ans !== this.correctAnswer && ans !== 'exit') {
            console.log("You have chosen the wrong answer :(");
            sc = callback(false)
        }     
        this.displayScore(sc)
    }
    // Prototype that will display score 
    QuestionConstructor.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    function score () {
        let sc = 0;
        return function (correct) {
            if (correct) {
                sc++
            }
            return sc
        }.
    }

    keepScore = score();
    // created new questions using constructor //
    
    const question1 = new QuestionConstructor('What is 12 x 12?', ['0: 233', '1: 100', '2: 144'], 2);
    const question2 = new QuestionConstructor('In what year did the US get its independence?', ['0: 1800', '1: 1776', '2: 1920'], 1);
    const question3 = new QuestionConstructor('How many parts Oxygen is water made of?', ['0: 1', '1: 2', '2: 3'], 0);
    const question4 = new QuestionConstructor('How many feet are in a mile?', ['0: 2580', '1: 5280', '2: 3000'], 1);
    
    
    // created array with all of the question objects //
    
    let allQuestions = [question1, question2, question3, question4]

    // function that will select a random question to ask //
    const playGame = function (arr) {
         let questionNumber = Math.floor(Math.random() * 4)

         arr[questionNumber].ask()   

         let response = prompt("Please select the correct answer or repond with exit to quit game")
         
         if (response !== 'exit') {
            arr[questionNumber].checkAnswer(response, keepScore)
            playGame(allQuestions)
        } else {
            console.log('you have exited the game');
        }
        
 
    }
    


    playGame(allQuestions)
})();


// let game = function () {
//     askQuestion(allQuestions)

// }