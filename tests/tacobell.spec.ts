
import {removeZeroes, sortAscending} from '../tacobell/tacobell';
import {expect} from 'chai';
import 'mocha';

// Ref: https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
describe('sort ascending', () => {

    it('returns an array sorted by index 1', () => {
        const orig = [
            ["blue", 1],
            ["red", 0],
            ["green", 2]
        ];
        const expected = [
            ["red", 0],
            ["blue", 1],
            ["green", 2]
        ];

        expect(sortAscending(orig)).to.eql(expected);
    });
});

describe('remove zeroes', () => {

    it('returns an array with no zeroes', () => {
        const orig = [
            ["blue", 1],
            ["red", 0],
            ["green", 2]
        ];
        const expected = [
            ["blue", 1],
            ["green", 2]
        ];

        expect(removeZeroes(orig)).to.eql(expected);
    });
});
