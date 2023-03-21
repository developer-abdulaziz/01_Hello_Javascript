
// akta array er modde sobcheye boro songkha ber korar upai

function largestElement(numbers) {
    // let largest = 0;
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;
}


const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
// -2 negative dik theke jeta sobcheye soto setai boro
const oldest2 = largestElement([-12, -6, -17]);
// console.log(oldest);
console.log(oldest2);