const expect = require('chai').expect;
const addNumbers = require('../src/main');

describe('addNumbers()',()=>{
    it("should add two numbers together",()=>{
        let actual = addNumbers(6,4);
        let expected = 10;
        expect(actual).to.equal(expected);
    })

    it("should notify user no values are entered",()=>{
        let actual = addNumbers();
        let expected= "Please enter 2 numbers";
        expect(actual).to.equal(expected)
    })
    it("should notify user if non numbers are entered",()=>{
        let actual = addNumbers('The', 'cat');
        let expected = 'User did not enter numbers';
        expect(actual).to.equal(expected);
    })


});
