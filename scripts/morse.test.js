import * as mc from '../scripts/morse.js'

describe('Morse Code Translator Tests', () => {

    /*----------  Input Checking----------*/
    test('Should be able to take in an input of any length', () => {
        expect(mc.translate("Hello world!")).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--");
        expect(mc.translate("A")).toBe(".-");
        expect(mc.translate(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--")).toBe("Hello world!");
    });

    test('Should throw an appropriate error if the input is not a string or is empty', () => {
        expect(() => {
            mc.translate(42)
        }).toThrow(wrongTypeError);

        expect(() => {
            mc.translate([1, f, y, 5])
        }).toThrow(wrongTypeError);

        expect(() => {
            mc.translate('');
        }).toThrow(emptyInputError);
    });
})
