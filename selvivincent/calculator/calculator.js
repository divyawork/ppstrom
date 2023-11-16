document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.value === 'C') {
                display.value = '';
            } else if (button.value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += button.value;
            }
        });
    });
});
