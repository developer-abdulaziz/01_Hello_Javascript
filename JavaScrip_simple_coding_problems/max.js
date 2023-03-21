

// const business = 450;
// // const minister = 350;
// const minister = 550;
// const army = 850;
// if (business > minister) {
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('Ministerer pola is bigger');
// }


/*compare three 
if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else(army > business && army > minister) {
    console.log('army is bigger');
}*/



// akhon uporer tintar modde konta boro ba soto seta ber korar sohoj upai

// var max = Math.max(business, minister, army);
// console.log('largest is', max);


function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const larger = findLargest(354, 241, 500);
console.log('largest is', larger);