// ----------------- variable -------------------
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

//------------------- array ------------------------
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
// array et sas dik theke element add remove
partners.push('kajit');
partners.pop();
// array er surur dike element add or remove
partners.shift();
partners.unshift('rofik');
console.log(partners);


// ----------------------- conditional -------------------
if (bookPrice < 120) {
    console.log('I will buy this book');
}
else {
    console.log('Mama, Kichu discount den na, apni na mama!');
}

//--------------------- while, for loop -----------------
var i = 0;
while (i <= 17) {
    // do some work
    i++;
}
for (var i = 0; i <= 17; i++) {

}


// ------------------------ function --------------------------

function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(21);


// ======================= let const ================

// value of variable could change

let price = 27;
price = 29;
price = 31;

// value of the variable will not change
const myName = 'lal e lal mr. Helal';
console.log(myName);
myName = 22;