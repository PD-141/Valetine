function displayChoices() {
    var food_choice = localStorage.getItem('userFoodSelection');
    var movie_choice = localStorage.getItem('movieSelection');

    // Get all elements with the class 'result_choices'
    var result_choices = document.querySelectorAll('.result_choices');

    // Loop through each result choice
    result_choices.forEach(function (choice) {
        // Display each result choice
        choice.style.display = 'block';

        // Get the text of the header
        var headerText = choice.querySelector('h2').textContent;

        // Append food choice to the corresponding header
        if (headerText === 'Food Choice: ') {
            choice.querySelector('span').textContent = food_choice;
        }
        // Append movie choice to the corresponding header
        else if (headerText === 'Movie choice: ') {
            choice.querySelector('span').textContent = movie_choice;
        }
    });
}

// Call the function when the button is clicked
document.addEventListener('DOMContentLoaded', function () {
    var result_button = document.getElementById('result_button');

    result_button.addEventListener('click', function () {
        result_button.style.display = 'none'; // Hide the button
        displayChoices(); // Call the function to display choices
    });
});
