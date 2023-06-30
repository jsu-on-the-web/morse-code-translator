import { translateMCToE, translateEToMC } from './morse';
import { assembleString } from './generalUtils';
import * as c from './constants';

describe('Morse Code Translator Tests', () => {
    /*----------  Input Checking----------*/
    test('Should be able to take in an input of any length and translate it', () => {
        expect(translateEToMC('Hello world!')).toBe(
            '.... . .-.. .-.. --- / .-- --- .-. .-.. -.. '
        );
        expect(translateEToMC('A')).toBe('.- ');
        expect(translateMCToE('.-')).toBe('A');
        expect(
            translateMCToE('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--')
        ).toBe('HELLO WORLD');
    });

    test('Should throw an appropriate error if the input is not a string or is empty', () => {
        expect(() => {
            translateEToMC(42);
        }).toThrow(c.wrongTypeError);
        expect(() => {
            translateMCToE(42);
        }).toThrow(c.wrongTypeError);

        expect(() => {
            translateEToMC([1, 'f', 'y', 5]);
        }).toThrow(c.wrongTypeError);

        expect(() => {
            translateMCToE([1, 'f', 'y', 5]);
        }).toThrow(c.wrongTypeError);

        expect(() => {
            translateEToMC('');
        }).toThrow(c.emptyInputError);
        expect(() => {
            translateMCToE('');
        }).toThrow(c.emptyInputError);
    });

    /*----------  Assembly Test  ----------*/
    test('Should format English correctly', () => {
        expect(
            assembleString(
                ['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D'],
                'english'
            )
        ).toEqual('HELLO WORLD');
    });
    test('Should format Morse Code correctly', () => {
        expect(
            assembleString(
                [
                    '....',
                    ' ',
                    '.',
                    ' ',
                    '.-..',
                    ' ',
                    '.-..',
                    ' ',
                    '---',
                    ' ',
                    '/',
                    ' ',
                    '.--',
                    ' ',
                    '---',
                    ' ',
                    '.-.',
                    ' ',
                    '.-..',
                    ' ',
                    '-..',
                    ' ',
                    '-.-.--',
                ],
                'morse'
            )
        ).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--');
    });
});