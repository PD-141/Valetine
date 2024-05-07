//storage
function getUserChoice(choiceKey, choiceValue) {
    localStorage.setItem(choiceKey, choiceValue);
}

function saveUserChoice(choiceKey) {
    return localStorage.getItem(choiceKey);

}
//food Array:
const foodArray = ["Chinese", "Japanese", "Korean", "Italian", "American"];
const randomElement = Math.floor(Math.random() * foodArray.length)
var food_buttons = document.querySelectorAll('.foodItem');
var movie_buttons = document.querySelectorAll('.movieItem');
var movie_style = document.getElementById('movie_container');


function hideAllButtons() {
    food_buttons.forEach(function (button) {
        button.classList.add('hidden');
    });
}

function appearMovie() {
    movie_style.style.display = "";
}

document.addEventListener('DOMContentLoaded', function () {
    food_buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var food_choice = button.textContent;
            if (food_choice !== 'Random') {
                localStorage.setItem('userFoodSelection', food_choice);
            } else {
                localStorage.setItem('userFoodSelection', foodArray[randomElement]);

            }
            hideAllButtons();
            appearMovie();
        });
    });
});


//Movie Array:
document.addEventListener('DOMContentLoaded', function () {
    movie_buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var movie_choice = button.textContent;
            localStorage.setItem('movieSelection', movie_choice);
            var choice = localStorage.getItem('movieSelection');
            window.location.href = 'final.html'
        });
    });
});

