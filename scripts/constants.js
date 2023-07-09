
/*=============================================
=            Errors                           =
=============================================*/

export const wrongTypeError = new Error("Input is not a string");

export const emptyStringError = new Error("Input is empty");

export const invalidModeError = new Error("Assembly mode is invalid; use either English or Morse");



/*=============================================
=            Dictionaries                     =
=============================================*/

export const MORSE_CODE_DICTIONARY = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    " ": "/"
};

