document.getElementById('coding-image').addEventListener('click', function() {
    var bio = document.getElementById('bio');
    bio.classList.toggle('hidden');
});

document.getElementById('show-html').addEventListener('click', function() {
    var htmlCode = document.getElementById('html-code');
    htmlCode.classList.toggle('hidden');
});

document.getElementById('show-css').addEventListener('click', function() {
    var cssCode = document.getElementById('css-code');
    cssCode.classList.toggle('hidden');
});

document.getElementById('show-js').addEventListener('click', function() {
    var jsCode = document.getElementById('js-code');
    jsCode.classList.toggle('hidden');
});
