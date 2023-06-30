
/*=============================================
=            Function declaration            =
=============================================*/

// Code from my portfolio website since I want to use the same typing effect here too

/**
 * When fed a sentence and a HTML element to put that sentence in, this method will create the illusion of "typing" the sentence
 * @async
 * @param {*} sentence The sentence to type in
 * @param {*} element The HTML element to insert the sentence into
 * @param {number} [delay=100] The number of milliseconds to wait before typing the next letter (default: 100ms)
 * @returns {*}
 */
async function typingEffect(sentence, element, delay = 100) {
    const letters = sentence.split("");

    // Sentence could be any length, so we need to use a while loop
    let i = 0;
    while (i < letters.length) {
        await delayFunction(delay);
        document.querySelector(element).innerHTML += letters[i];
        i++;
    }
    return;
}

const delayFunction = function (delay) {
    return new Promise(resolve => setTimeout(resolve, delay)); // We use the promise to give the browser something to do, and the setTimeout function makes the browser wait for delay milliseconds before resolving the promise
}

/*=============================================
=            Variable Declaration             =
=============================================*/

const pageTitle = "Morse Code Translator";
const pageTitleMorseCode = "-- --- .-. ... . / -.-. --- -.. . / - .-. .- -. ... .-.. .- - --- .-."

const title = document.querySelector(".title");
const titleMorseCode = document.querySelector(".title--mc");

/*=============================================
=            Script Assignment            =
=============================================*/

typingEffect(pageTitle, ".title", 30);
setTimeout(() => {
    typingEffect(pageTitleMorseCode, ".title--mc", 30);
}, 1300);

title.addEventListener("click", () => { 
    title.style.opacity = 0;
    titleMorseCode.style.opacity = 1;
})

