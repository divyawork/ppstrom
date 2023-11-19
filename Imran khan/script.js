document.querySelector('.clear').addEventListener('click', () => {
    document.getElementById('display-value').textContent = '';
});

document.querySelector('.equals').addEventListener('click', () => {
    try {
        const result = eval(document.getElementById('display-value').textContent);
        document.getElementById('display-value').textContent = result;
    } catch (error) {
        alert('Invalid input');
    }
});

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    if (!['clear', 'equals'].includes(button.textContent)) {
        button.addEventListener('click', () => {
            document.getElementById('display-value').textContent += button.textContent;
        });
    }
});