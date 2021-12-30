function addNumbers(x, y){
    if(!x || !y){
        return 'Please enter 2 numbers';
    }
    
    let num1 = Number(x);
    let num2 = Number(y);

    if(isNaN(num1)|| isNaN(num2)){
        return 'User did not enter numbers'
    }

    return num1+num2;
}


module.exports = addNumbers;
/*
//Can this add two numbers together
let actualAdd = addNumbers(10,20);
let expectedAdd = 30;
console.log(actualAdd===expectedAdd);

//How do we handle if input is not a number
let actualNaN = addNumbers('the', 'cat');
let expectedNaN= 'User did not enter numbers';
console.log(actualNaN===expectedNaN);

//How do we handle blank input
let actualNoInput = addNumbers();
let expectedNoInput = 'Please enter 2 numbers';
console.log(actualNoInput===expectedNoInput);

//How do we handle stringified numbers
let actualStrNums = addNumbers('5','6');
let expectedStrNums=11;
console.log(actualStrNums===expectedStrNums);
*/