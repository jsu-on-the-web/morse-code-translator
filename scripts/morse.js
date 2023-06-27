
/*----------  Imports  ----------*/
import * as c from './constants.js'


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
    console.log(output);
}
translateEToMC("Hello world!")

export const translateMCToE = (inputString) => {
    console.log(inputString);
    // Input check
    if (inputString.length <= 0) {
        throw c.emptyStringError;
    } else if (typeof inputString !== 'string') {
        throw c.wrongTypeError
    }
}

export const assembleString = (input, mode) => {
    console.log(input);
}

/*----------  Variable Declaration  ----------*/




/*----------  Script assignment  ----------*/



