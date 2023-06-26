import * as mc from '../scripts/morse.js'

describe('Morse Code Translator Tests', () => {

    /*----------  Input Checking----------*/
    test('Should be able to take in an input of any length and translate it', () => {
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


    /*----------  Assembly Test  ----------*/
    test('Should format English correctly', () => {
        expect(mc.assembleString(["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"], 'english')).toEqual('Hello world!');
    });
    test('Should format Morse Code correctly', () => {
        expect(mc.assembleString(["....", " ", ".", " ", ".-..", " ", ".-..", " ", "---", " ", "/", " ", ".--", " ", "---", " ", ".-.", " ", ".-..", " ", "-..", " ", "-.-.--"], 'morse')).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--");
    });
})
