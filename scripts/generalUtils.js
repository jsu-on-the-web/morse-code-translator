export const assembleString = (input, mode) => {

    // Check what mode we are in


    console.log(input);
}
export const flipKeysAndValues = (obj) => {
    const entries = Object.entries(obj);
    const flippedEntries = entries.map(entry => entry.reverse());
    const output = Object.fromEntries(flippedEntries);
    return output;
}
