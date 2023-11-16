let result = document.getElementById('result');

function clearResult() {
    result.value = '';
}

function appendCharacter(char) {
    result.value += char;
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
