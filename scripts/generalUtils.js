export const assembleString = (input, mode) => {
    let output = "";
    
    // Check what mode we are in
    if (mode.toLowerCase() === 'english') {
        // Not much to do here, just joining the strings inside input using reduce
        output = input.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        });
        console.log(`Output string: ${output}`);
        return output;
    }

    console.log(input);
}
export const flipKeysAndValues = (obj) => {
    const entries = Object.entries(obj);
    const flippedEntries = entries.map(entry => entry.reverse());
    const output = Object.fromEntries(flippedEntries);
    return output;
}
