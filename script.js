var questions = [`Q1: let data = "word";`, `Q2: let data = 10;`, `Q3: let data = true;`];
var answer = ["String", "Number", "Boolean"];
var score = 0;
var question = document.getElementById("question");
var options = document.getElementsByTagName("button");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var question_number = 0;
var correct = document.getElementById("correct");
var timer = 30;
var time = document.getElementById("time");

// The timer function 
function setTime() {
    var timerInterval = setInterval(function() {
        timer--;
        time.textContent = timer;
        // If time runs out then moved to submit.html
        if(timer === 0) {
            clearInterval(timerInterval);
            window.location.replace("./submit.html");
        }
    }, 1000);
}

// Generate question function
function make_questions(i) {
    question.innerHTML = questions[i];
    for (var j = 0; j < 3; j ++) {
        options[j].textContent = answer[j];
        options[j].setAttribute("data-answer", "wrong");
    }
    options[i].setAttribute("data-answer", "right");
    return;
}

// Add event listener to button 1
option1.addEventListener("click", function(event) {
    event.preventDefault();
    question_number = question_number + 1;
    if (option1.getAttribute("data-answer") === "right") {
        score = score + 1;
        correct.textContent = "Correct";
        timer;
    } else {
    // Else score remains the same time--
        score = score;
        correct.textContent = "Incorrect";
        timer = timer - 5;
    }
    if (question_number === 3) {
        window.location.replace("./submit.html");
        localStorage.setItem("score", score);
    } else {
        make_questions(question_number);
    }
})

// Add event listener to button 2
option2.addEventListener("click", function(event) {
    event.preventDefault();
    question_number = question_number + 1;
    if (option2.getAttribute("data-answer") === "right") {
        score = score + 1;
        correct.textContent = "Correct";
        timer;
    } else {
    // Else score remains the same time--
        score = score;
        correct.textContent = "Incorrect";
        timer = timer - 5;
    }
    if (question_number === 3) {
        window.location.replace("./submit.html");
        localStorage.setItem("score", score);
    } else {
        make_questions(question_number);
    }
})

// Add event listener to button 3
option3.addEventListener("click", function(event) {
    event.preventDefault();
    question_number = question_number + 1;
    // If right answer, then score++ and time remains the same
    if (option3.getAttribute("data-answer") === "right") {
        score = score + 1;
        correct.textContent = "Correct";
        timer;
    // Else score remains the same time--
    } else {
        score = score;
        correct.textContent = "Incorrect";
        timer = timer - 5;
    }
    if (question_number === 3) {
        window.location.replace("./submit.html");
        localStorage.setItem("score", score);
    } else {
        make_questions(question_number);
    }
})

setTime(timer);
make_questions(question_number);