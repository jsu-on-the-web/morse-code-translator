/*----------  Imports  ----------*/
import * as m from './morse.js'
import * as du from './domUtils.js'


/*----------  Function Declaration  ----------*/

const grabInput = (event) => {
    // 1. Grab both the input textarea value and the two radio buttons
    // 2. Check which radio button is selected
    // 3. Send the textarea value to the associated translation function
    // 4. Set output textarea value to the return value of the translation function


    let inputText = input.value;
    
    if (document.querySelector('#eToMC').checked === true) { 
        output.value = m.translateEToMC(inputText);
    } else if (document.querySelector('#mcToE').checked === true) {
        output.value = m.translateMCToE(inputText);
    }
}

/*----------  Variable Declaration  ----------*/

let submitButton = document.querySelector('.input-form__submit-button');
let inputForm = document.querySelector('.input-form');
let eToMCSelect = document.querySelector('#eToMC');
let mcToESelect = document.querySelector('#mcToE');
let input = document.querySelector('#input-textarea');
let output = document.querySelector('#output-textarea');

/*----------  Script assignment  ----------*/
inputForm.addEventListener('submit', (e) => { 
    e.preventDefault();
    grabInput(e);
});


