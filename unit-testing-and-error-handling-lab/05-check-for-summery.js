import { expect } from 'chai';
import { isSymmetric } from './summery.js'

describe('Its Symetric?', () => {

    it(`it throws error for not sumetric`, () => {
        let arr = [1, 2, 1];
        expect(() => isSymmetric(arr).to.throw());
    })

    it(`throws error for non-array params`, () => {
        // expect(() => isSymmetric(1)).to.throw();
        expect(() => isSymmetric(1)).to.equal(false);

    })

    it(`returns 0 from empty array`, () => {
        expect(isSymmetric([])).to.equal(true);
    });

    it(`input -> [1, '1'] -> false`, () => {
        expect(isSymmetric([1, '1'])).to.equal(false);
    })

    it(`input -> [0,1] -> false`, () => {
        expect(isSymmetric([0, 1])).to.equal(false);
    })

    it(`input -> 'a' -> false`, () => {
        expect(isSymmetric('')).to.equal(false);
    })

})