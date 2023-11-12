//set the correct answers

let score = 0; 
let q1answer = document.getElementById("himalayas");
let q2answer = document.getElementById("yangtze");
let q3answer = document.getElementById("tokyo");
let q4answer = document.getElementById("usa");
let q5answer = document.getElementById("caspian sea");
let q6answer = document.getElementById("windsor");
let q7answer = document.getElementById("lincoln");
let q8answer = document.getElementById("69");
let q9answer = document.getElementById("china");
let q10answer = document.getElementById("france");
let submitButton = document.getElementById("submit button");
let message = document.getElementById("result message");

//functions for each of the answers

function question1Assess(){
    score = 0;
    if(q1answer.checked){
    score++
    console.log(score);
    }
}

function question2Assess(){
    if(q2answer.checked){
    score++
    console.log(score);
    }
}

function question3Assess(){
    if(q3answer.checked){
    score++
    console.log(score);
    }
}

function question4Assess(){
    if(q4answer.checked){
    score++
    console.log(score);
    }
}

function question5Assess(){
    if(q5answer.checked){
    score++
    console.log(score);
    }
}

function question6Assess(){
    if(q6answer.checked){
    score++
    console.log(score);
    }
}

function question7Assess(){
    if(q7answer.checked){
    score++
    console.log(score);
    }
}

function question8Assess(){
    if(q8answer.checked){
    score++
    console.log(score);
    }
}

function question9Assess(){
    if(q9answer.checked){
    score++
    console.log(score);
    }
}

function question10Assess(){
    if(q10answer.checked){
    score++
    console.log(score);
    }
}

function showResult(){
    let displayScore = (score/10) * 100;
    if(score>7){
        message.textContent = "You got " + displayScore + "%, Congratulations!";
    } else if(score >3 && score <=7){
        message.textContent = "You got " + displayScore + "%, thats a pretty good effort";
    } else if(score<=3){
        message.textContent = "You got " + displayScore + "%, better luck next time";
    }
}

//event listeners for the quiz submit button

submitButton.addEventListener('click', question1Assess);
submitButton.addEventListener('click', question2Assess);
submitButton.addEventListener('click', question3Assess);
submitButton.addEventListener('click', question4Assess);
submitButton.addEventListener('click', question5Assess);
submitButton.addEventListener('click', question6Assess);
submitButton.addEventListener('click', question7Assess);
submitButton.addEventListener('click', question8Assess);
submitButton.addEventListener('click', question9Assess);
submitButton.addEventListener('click', question10Assess);
submitButton.addEventListener('click', showResult);

//insert the show answers button

let parentSpan = document.getElementById("review answers");
let counter = 0;

function revealAnswersButton(){
    if(counter<=0){
        let reviewButton = document.createElement("button");
        let reviewButtonText = document.createTextNode("Answers");
        reviewButton.setAttribute("id", "answers button");
        reviewButton.setAttribute("type", "submit");
        reviewButton.appendChild(reviewButtonText);
        parentSpan.appendChild(reviewButton);
        counter++
        console.log(counter);
}}

submitButton.addEventListener('click', revealAnswersButton);

//functions to show correct and incorrect answers 

let reviewButton = document.getElementById("answers button");
let correctQ1Answer = document.getElementById("q1 correct");
let wrongQ1Answer = document.getElementById("q1 wrong");
let correctQ2Answer = document.getElementById("q2 correct");
let wrongQ2Answer = document.getElementById("q2 wrong");
let correctQ3Answer = document.getElementById("q3 correct");
let wrongQ3Answer = document.getElementById("q3 wrong");
let correctQ4Answer = document.getElementById("q4 correct");
let wrongQ4Answer = document.getElementById("q4 wrong");
let correctQ5Answer = document.getElementById("q5 correct");
let wrongQ5Answer = document.getElementById("q5 wrong");
let correctQ6Answer = document.getElementById("q6 correct");
let wrongQ6Answer = document.getElementById("q6 wrong");
let correctQ7Answer = document.getElementById("q7 correct");
let wrongQ7Answer = document.getElementById("q7 wrong");
let correctQ8Answer = document.getElementById("q8 correct");
let wrongQ8Answer = document.getElementById("q8 wrong");
let correctQ9Answer = document.getElementById("q9 correct");
let wrongQ9Answer = document.getElementById("q9 wrong");
let correctQ10Answer = document.getElementById("q10 correct");
let wrongQ10Answer = document.getElementById("q10 wrong");

function seeQ1Answers(){
    if(q1answer.checked){
        correctQ1Answer.textContent = "Thats correct";
        wrongQ1Answer = "";
    } else {
        wrongQ1Answer.textContent = "Thats not right, (B) The Himalayas is the right answer";
        correctQ1Answer = "";
    }
}

function seeQ2Answers(){
    if(q2answer.checked){
        correctQ2Answer.textContent = "Thats correct";
        wrongQ2Answer = "";
    } else {
        wrongQ2Answer.textContent = "Thats not right, (C) The Yangtze is the right answer";
        correctQ2Answer = "";
    }
}

function seeQ3Answers(){
    if(q3answer.checked){
        correctQ3Answer.textContent = "Thats correct";
        wrongQ3Answer = "";
    } else {
        wrongQ3Answer.textContent = "Thats not right, (A) Tokyo is the rightg answer";
        correctQ3Answer = "";
    }
}

function seeQ4Answers(){
    if(q4answer.checked){
        correctQ4Answer.textContent = "Thats correct";
        wrongQ4Answer = "";
    } else {
        wrongQ4Answer.textContent = "Thats not right, (B) The USA is the right answer";
        correctQ4Answer = "";
    }
}

function seeQ5Answers(){
    if(q5answer.checked){
        correctQ5Answer.textContent = "Thats correct";
        wrongQ5Answer = "";
    } else {
        wrongQ5Answer.textContent = "Thats not right, (B) The Caspian Sea is the right answer";
        correctQ5Answer = "";
    }
}

function seeQ6Answers(){
    if(q6answer.checked){
        correctQ6Answer.textContent = "Thats correct";
        wrongQ6Answer = "";
    } else {
        wrongQ6Answer.textContent = "Thats not right, (C) Windsor is the right answer";
        correctQ6Answer = "";
    }
}

function seeQ7Answers(){
    if(q7answer.checked){
        correctQ7Answer.textContent = "Thats correct";
        wrongQ7Answer = "";
    } else {
        wrongQ7Answer.textContent = "Thats not right, (C) Lincoln Cathedral is the rightg answer";
        correctQ7Answer = "";
    }
}

function seeQ8Answers(){
    if(q8answer.checked){
        correctQ8Answer.textContent = "Thats correct";
        wrongQ8Answer = "";
    } else {
        wrongQ8Answer.textContent = "Thats not right, (C) 69 is the right answer";
        correctQ8Answer = "";
    }
}

function seeQ9Answers(){
    if(q9answer.checked){
        correctQ9Answer.textContent = "Thats correct";
        wrongQ9Answer = "";
    } else {
        wrongQ9Answer.textContent = "Thats not right, (A) China is the right answer";
        correctQ9Answer = "";
    }
}

function seeQ10Answers(){
    if(q10answer.checked){
        correctQ10Answer.textContent = "Thats correct";
        wrongQ10Answer = "";
    } else {
        wrongQ10Answer.textContent = "Thats not right, (B) France is the right answer";
        correctQ10Answer = "";
    }
}

parentSpan.addEventListener('click', seeQ1Answers);
parentSpan.addEventListener('click', seeQ2Answers);
parentSpan.addEventListener('click', seeQ3Answers);
parentSpan.addEventListener('click', seeQ4Answers);
parentSpan.addEventListener('click', seeQ5Answers);
parentSpan.addEventListener('click', seeQ6Answers);
parentSpan.addEventListener('click', seeQ7Answers);
parentSpan.addEventListener('click', seeQ8Answers);
parentSpan.addEventListener('click', seeQ9Answers);
parentSpan.addEventListener('click', seeQ10Answers);

//insert the reset button

let parentSpan2 = document.getElementById("reset");
let counter2 = 0;


function revealResetButton(){
    if(counter2<=0){
        let resetButton = document.createElement("button");
        let resetButtonText = document.createTextNode("Reset");
        resetButton.setAttribute("id", "reset button");
        resetButton.setAttribute("type", "submit");
        resetButton.appendChild(resetButtonText);
        parentSpan2.appendChild(resetButton);
        counter2++
        console.log(counter2);
}}

parentSpan.addEventListener('click', revealResetButton);

//reset the quiz

function quizReset(){
    window.location.reload();
}

parentSpan2.addEventListener('click', quizReset);

//create object that captures a user's results

let userDetails = document.getElementById("username");
let firstName = userDetails.elements["first name"];
let secondName = userDetails.elements["second name"];

function UserResults(Name1, Name2, Q1, Q2, Q3, Q4, Q5, Q6,
    Q7, Q8, Q9, Q10){
    Name1 = firstName.value;
    Name2 = secondName.value;
    if(q1answer.checked){
        Q1 = "Correct";
    } else {
        Q1 = "Incorrect";
    }
    if(q2answer.checked){
        Q2 = "Correct";
    } else {
        Q2 = "Incorrect";
    }
    if(q3answer.checked){
        Q3 = "Correct";
    } else {
        Q3 = "Incorrect";
    }
    if(q4answer.checked){
        Q4 = "Correct";
    } else {
        Q4 = "Incorrect";
    }
    if(q5answer.checked){
        Q5 = "Correct";
    } else {
        Q5 = "Incorrect";
    }
    if(q6answer.checked){
        Q6 = "Correct";
    } else {
        Q6 = "Incorrect";
    }
    if(q7answer.checked){
        Q7 = "Correct";
    } else {
        Q7 = "Incorrect";
    }
    if(q8answer.checked){
        Q8 = "Correct";
    } else {
        Q8 = "Incorrect";
    }
    if(q9answer.checked){
        Q9 = "Correct";
    } else {
        Q9 = "Incorrect";
    }
    if(q10answer.checked){
        Q10 = "Correct";
    } else {
        Q10 = "Incorrect";
    }
    console.log(Name1, Name2, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10);
}

submitButton.addEventListener('click', UserResults);

//create JSON-encoded string 

let UserResultsString = new UserResults();
let output = JSON.stringify(UserResultsString); 
console.log(output); 

