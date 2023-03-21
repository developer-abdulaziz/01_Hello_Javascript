function isLeapyear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2087;
const isMyLeapYear = isLeapyear(myYear);
console.log('Is my year leap year', isMyLeapYear);

const yourYear = 2224;
const isYourYearLeapYear = isLeapyear(yourYear);
console.log('Is your LeapYear', isYourYearLeapYear);