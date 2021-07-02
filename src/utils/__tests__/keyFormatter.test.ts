import {keyFormatter} from "../keyFormatter";

describe('keyFormatter', () => {
    test('Return empty string when passed no args', () => {
        const expectedOut = "";
        // @ts-ignore
        const actualOut = keyFormatter();
        expect(actualOut).toBe(expectedOut)
    })
    
    test('Return string, second parameter combined with first, sliced and lowercased', () => {
        let expectedOut = '0mus';
        let actualOut = keyFormatter(0, 'Music');
        expect(actualOut).toBe(expectedOut);
        
        expectedOut = '11res';
        actualOut = keyFormatter(11, 'Research Activities');
        expect(actualOut).toBe(expectedOut);
    })
})