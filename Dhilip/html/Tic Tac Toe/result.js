document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result');
    const urlParams = new URLSearchParams(window.location.search);
    const resultText = urlParams.get('result');

    resultDiv.textContent = resultText || 'No result available.';
});
