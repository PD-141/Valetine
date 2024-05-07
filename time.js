// time page
var buttons = document.getElementsByClassName("button");

// Iterate over each button and add an event listener
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // Hide the clicked button by setting its display to "none"
        this.style.display = "none";
    });
}

var eve_button = document.getElementById("hideButton");
var day_button = document.getElementById("day");

eve_button.addEventListener("click", function () {
    eve_button.style.display = "none";
    day_button.style.display = "block";
});

day_button.addEventListener("click", function () {
    window.location.href = "food.html";
});