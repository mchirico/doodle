import {removeZeroes, sortAscending, take} from '../tacobell/tacobell';
import {expect} from 'chai';
import 'mocha';
// npm install @types/node --save-de
const axios = require('axios');



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


describe('take first n', () => {

    it('returns an array of first n', () => {
        const orig = [
            ["blue", 1],
            ["red", 0],
            ["green", 2]
        ];
        const expected = [
            ["blue", 1],
            ["red", 0],
        ];

        expect(take(2, orig)).to.eql(expected);
    });
});


describe('Test Async', () => {

    it('axios get example', (done) => {
        const expected = 'mce9 aipiggybot\n';
        let url = "https://aipiggybot.io/";
        axios.get(url).then(response => {
            console.log(response.data);
            expect(response.data).to.equal(expected);
            done();
        });

    });
});
