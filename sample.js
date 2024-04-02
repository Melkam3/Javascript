let currentValue = '';

// Function to append value to display
function appendValue(value) {
    currentValue += value;
    document.getElementById('display').value = currentValue;
}

// Function to perform calculation
function calculate() {
    let result;
    try {
        result = eval(currentValue);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('display').value = result;
    currentValue = '';
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
    currentValue = '';
}

