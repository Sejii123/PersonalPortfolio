const texts = [
    "Web Developer",
    "Programmer",
    "Student"
];

const typingText = document.getElementById("typing-text");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentText = texts[textIndex];

    if (!deleting) {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            textIndex++;

            if (textIndex === texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();


// LIGHT AND DARK MODE TOGGLE

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

});