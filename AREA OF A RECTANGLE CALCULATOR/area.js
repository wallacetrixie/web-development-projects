const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const calculateButton = document.getElementById('calculate_button');
const resultButton = document.getElementById('result');

function area() {
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);

    if (!isNaN(length) && !isNaN(width)) {
        const result = length * width;
        resultButton.textContent = `The area is: ${result} square centimeters`;
    } else {
        resultButton.textContent = "Please enter valid numbers for length and width.";
    }
}

calculateButton.addEventListener('click',area);
