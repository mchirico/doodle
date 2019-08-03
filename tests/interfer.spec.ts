import {myObj} from '../simple/interfer'
import {printLabel} from "../simple/interfer";
import {expect} from 'chai';
import 'mocha';

describe('Hello function', () => {

    it('should return hello world', () => {

        printLabel(myObj)
        const result = myObj

        expect(result.size).to.equal(10)
        expect(result.label).to.equal("Size 10 Object")

    });

});

