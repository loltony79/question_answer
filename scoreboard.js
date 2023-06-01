var scorelist = document.getElementById("scoreboard");
var score = localStorage.getItem("score");
var user = localStorage.getItem("user");
var list = document.getElementById("scoreboard")
var clear = document.getElementById("clear");

list.textContent = "User: " + user +  "||" + " Score:" + score;

// Clear button
clear.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("score", "")
    localStorage.setItem("user", "")
    list.textContent = "";
})


