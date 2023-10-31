// Load saved value from localStorage
var savedValue = localStorage.getItem('bigNumber');
var bigNumber = savedValue ? parseFloat(savedValue) : 0;

updateBigNumber();

function updateBigNumber() {
    document.querySelector('.big-number').textContent = bigNumber.toFixed(3);
}

function addToBigNumber() {
    var input = document.getElementById("numberInput").value;
    if (input !== "") {
        bigNumber += parseFloat(input);
        updateBigNumber();
        // Save the updated value to localStorage
        localStorage.setItem('bigNumber', bigNumber);
    }
}

function subtractFromBigNumber() {
    var input = document.getElementById("numberInput").value;
    if (input !== "") {
        bigNumber -= parseFloat(input);
        updateBigNumber();
        // Save the updated value to localStorage
        localStorage.setItem('bigNumber', bigNumber);
    }
}
