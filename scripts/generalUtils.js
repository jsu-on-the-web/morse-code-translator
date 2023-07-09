import { invalidModeError } from "./constants.js";

export const assembleString = (input, mode) => {
    let output = "";

    if (mode === 'english' || mode === 'morse') {
        output = input.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        });
        console.log(`Output string: ${output}`);
        return output;
    } else {
        throw invalidModeError;
    }
    
}
export const flipKeysAndValues = (obj) => {
    const entries = Object.entries(obj);
    const flippedEntries = entries.map(entry => entry.reverse());
    const output = Object.fromEntries(flippedEntries);
    return output;
}
