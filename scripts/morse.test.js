import * as mc from '../scripts/morse.js'

describe('Morse Code Translator Tests', () => {

    /*----------  Input Checking----------*/
    test('Should be able to take in an input of any length', () => {
        expect(mc.translateEToMC("Hello world!")).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--");
        expect(mc.translateEToMC("A")).toBe(".-");
        expect(mc.translateMCtoE(".-")).toBe("A");
        expect(mc.translateMCtoE(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--")).toBe("Hello world!");
    });

    test('Should throw an appropriate error if the input is not a string or is empty', () => {
        expect(() => {
            mc.translateEToMC(42)
        }).toThrow(wrongTypeError);
        expect(() => {
            mc.translateMCtoE(42)
        }).toThrow(wrongTypeError);

        expect(() => {
            mc.translateEToMC([1, f, y, 5])
        }).toThrow(wrongTypeError);

        expect(() => {
            mc.translateMCtoE([1, f, y, 5])
        }).toThrow(wrongTypeError);

        expect(() => {
            mc.translateEToMC('');
        }).toThrow(emptyInputError);
        expect(() => {
            mc.translateMCtoE('');
        }).toThrow(emptyInputError);
    });
})
