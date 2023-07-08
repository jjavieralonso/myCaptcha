function createCaptcha() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var captchaLength = 6;
    var captcha = '';

    for (var i = 0; i < captchaLength; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters.charAt(randomIndex);
    }

    var captchaText = document.getElementById('captcha-text');
    captchaText.textContent = captcha;
}

function validateAnswer() {
    var answerInput = document.getElementById('answer');
    var userAnswer = answerInput.value.toLowerCase();

    var captchaText = document.getElementById('captcha-text').textContent.toLowerCase();
    var isCorrect = userAnswer === captchaText;

    var loader = document.getElementById('loader');
    var captchaContainer = document.getElementById('captcha-container');
    if (isCorrect) {
        captchaContainer.style.display = 'none';
        loader.style.display = 'block';
        setTimeout(function () {
            loader.style.display = 'none';
            captchaContainer.style.display = 'block';
        }, 1000);
        createCaptcha();
    } else {
        var submitButton = document.querySelector('button');
        submitButton.classList.add('incorrect');
        setTimeout(function () {
            submitButton.classList.remove('incorrect');
        }, 1000);
        createCaptcha();
    }

    answerInput.value = '';
}


window.onload = createCaptcha;
