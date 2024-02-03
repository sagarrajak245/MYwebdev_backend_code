const franc = require("franc");
const langs = require("langs");
document.getElementById("detectButton").addEventListener("click", detectLanguage);
function detectLanguage() {
    const input = document.getElementById("textInput").value;
    const langCode = franc(input);
    const resultElement = document.getElementById("result");

    if (langCode === 'und') {
        resultElement.textContent = "SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!";
        resultElement.style.color = "red";
    } else {
        const language = langs.where("3", langCode);
        resultElement.textContent = `Our best guess is: ${language.name}`;
        resultElement.style.color = "green";
    }




}

