// Submit Page
var userid = document.getElementById("userid");
var submit = document.getElementById("submit");
var score = document.getElementById("score");
score.textContent = "Your Score is " + localStorage.getItem("score") + "/3"; 

// Button to highscore page
// Submits the userid
submit.addEventListener("click", function(event) {
    event.preventDefault();
    // Stores the userid
    localStorage.setItem("user", userid.value);
    // Navigate to the highscore page
    window.location.replace("./highscore.html");
})