const buttons = document.querySelectorAll('.buy-now');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert("You selected the " + this.closest('.pricing-card').querySelector('h3').innerText + "!");
    });
});
