var noButton = document.getElementById('noButton');

noButton.addEventListener('mouseenter', function () {
    noButton.classList.add('custom-hover')
    var x = Math.random() * (window.innerWidth
        - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight -
        document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;

});

function nextPage() {
    window.location.href = "time.html";
}