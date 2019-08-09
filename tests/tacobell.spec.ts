import {sortAscending} from '../tacobell/tacobell';
import {expect} from 'chai';
import 'mocha';

describe('sort ascending', () => {

    it('returns an array sorted by index 1', () => {
        const orig = [
            ["blue",1],
            ["red",0],
            ["green",2]
        ];
        const expected = [
            ["red",0],
            ["blue",1],
            ["green",2]
        ];

        expect(sortAscending(orig)).to.eql(expected);
    });
});
