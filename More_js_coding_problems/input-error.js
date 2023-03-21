/// ==========Handle unexpected function input parameter error==========///

function addThreeNumber(num1, num2, num3) {
    const sum = num2 + num3 + num1;
    // console.log(sum)
    return sum;
}


const firstTotal = addThreeNumber(20, 2, 5);
console.log(firstTotal);

const secondTotal = addThreeNumber(2, 3, 4);
console.log(secondTotal);

const thirdTotal = addThreeNumber(23, 4, 5);
console.log(thirdTotal);

const fourthNumber = addThreeNumber(1 + 3, 4 + 2, 4 + 4);
console.log(fourthNumber);

/***
const a = 4;
const b = 2;
const c = a + b;

const x = 3;
const y = 2;
const z = x + y;

const one = 2;
const two = 3;
const total = one + two;

const fifthNumber = addThreeNumber(c, z, total);
console.log(fifthNumber);*///