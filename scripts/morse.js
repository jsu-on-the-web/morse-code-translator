
/*----------  Imports  ----------*/
import * as c from './constants.js'
import * as gu from './generalUtils.js'

/*----------  Function Declaration  ----------*/

export const translateEToMC = (inputString) => {
    // 1. Check if the input string is > 0 and it's a string
    // 1.5 If not, throw an error
    // 2. Do a for-each iteration on the input string to figure out which key the current character in inputString matches to
    // 3. Push that key's value followed by a whitespace space (' ') into the output array.

    let output = [];
    // Input check
    if (inputString.length <= 0) {
        throw c.emptyStringError;
    } else if (typeof inputString !== 'string') {
        throw c.wrongTypeError
    }
    // Iterating and making the output array
    let inputAsArray = Array.from(inputString);
    console.log(inputAsArray);
    inputAsArray.forEach(character => {
        const inputChar = character.toUpperCase();
        if (inputChar in c.MORSE_CODE_DICTIONARY) {
            output.push(c.MORSE_CODE_DICTIONARY[inputChar]);
            output.push(' ');
        }
        // for (let key in c.MORSE_CODE_DICTIONARY) {
        //     if (key === character) {
        //         console.log(`Adding ${c.MORSE_CODE_DICTIONARY[character]} to output array becaue it matches ${key}`)
        //         output.push(c.MORSE_CODE_DICTIONARY[key]);
        //         output.push(' ');
        //     }
        // }
    });
    // TODO: assembleString here
    return gu.assembleString(output, 'morse');
    console.log(output);
}
translateEToMC("Hello world!")

export const translateMCToE = (inputString) => {
    // Init section
    let output = [];
    let MORSE_CODE_DICTIONARY_REVERSE = gu.flipKeysAndValues(c.MORSE_CODE_DICTIONARY);
    console.log(MORSE_CODE_DICTIONARY_REVERSE);

    console.log(inputString);
    // Input check
    if (inputString.length <= 0) {
        throw c.emptyStringError;
    } else if (typeof inputString !== 'string') {
        throw c.wrongTypeError
    }

    // Because of how Morse code is written, we'll have to assemble the input array ourselves by splitting at spaces
    // We'll also have to have a check for any spaces, and turn them into empty strings in the conversion step
    let inputArray = inputString.split(' ');
    console.log(inputArray);

    // Translation time 
    // Using ES6 style for this one 
    inputArray.forEach(mcLetter => {
        if (mcLetter in MORSE_CODE_DICTIONARY_REVERSE) {
            output.push(MORSE_CODE_DICTIONARY_REVERSE[mcLetter]);
        }
    });
    // TODO: assembleString here
    return gu.assembleString(output, 'english');
    console.log(output);
}

translateMCToE(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--")


/*----------  Variable Declaration  ----------*/




/*----------  Script assignment  ----------*/



