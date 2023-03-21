// var number = [12, 45, 54, 67, 44, 18];

//------------------
/*
number [3] = 55;
console.log(number);
*/


//------------------
// var indexOfNumber = number.indexOf(54);
// console.log(indexOfNumber);


//------------------
/*
var sortNumber = number.sort();
console.log(sortNumber);

var reverseNumber = number.reverse();
console.log(reverseNumber);
*/


//------------------
/*
 number.push(500);
console.log(number);

 number.pop();
console.log(number);
*/


//------------------
/*
 number.unshift(50);
console.log(number);

 number.shift();
console.log(number);
*/

//-----------
// var joinNumber = number.join();
// console.log(joinNumber);


//-----------
// var check =number.includes(54);
// console.log(check);




//--------------
/*
var number = [12, 45, 54, 67, 44, 18];
if(number[1] === 45){
   console.log('i am number');
}
else{
   console.log('i am not number');
}
*/


//----------- index and array element aksathe dekhanor khetre -------------
/*
var number = [12, 45, 54, 67, 44, 18];
for(var i = 0; i < number.length; i++){
   var index = i;
   var element = number[index];
   console.log(index, element);
}
*/

//----------- index and array element aksathe dekhano and aksathe jog kora -------------
/*
let number = [12, 45, 54, 67, 44, 18];
let sum = 0;
for (let i = 0; i < number.length; i++){
   let index = i;
   let element = number[index];
   console.log(`index: ${i}`, element, `total: ${sum}`);
   sum = sum + element;
   // console.log(`total: ${sum}`);
}
*/



//-----------------------
// sobcheye boro number ber koro
/*
function largestNumber(num){
   var largest = num[0]; // ekhane array er o index theke suru hobe
   for(var i = 0; i < num.length; i++){
      var index = i;
      var element = num[index];
      if(element > largest){
         largest = element;
      }
   }
   return largest;
}
var number = [12, 45, 54, 67, 44, 18];
var large = largestNumber(number)
console.log(large);
*/



// sobcheye soto number ber koro
/*
function smallestNumber (numbers){
   var small = numbers[0]; // ekhane array er o index theke suru hobe
   for(var i = 0; i < numbers.length; i++){
      var index = i;
      var element = numbers[index];
      // console.log(index, element);
      if(element < small){
         small = element;
      }
   }
   return small
}
var number = [100, 12, 45, 54, 67, 44, 18, 4];
var smallNumber = smallestNumber(number);
console.log(smallNumber);
*/


// Find the largest element of an array
// array er element er modde boro songkha konti

// function maxInArray(numbers) {
//     // console.log(numbers);
//     let largest = numbers[0]; // ekhane array er o index theke suru hobe
//     for (i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('tallest person is: ', tallest);



//  akta array theke double namegulo remove kora:
/*
function removeDuplicate(names){
   let unique = [];
   for(let i = 0; i < names.length; i++){
       let index = i;
       let element = names[index];
       console.log(index, element);
       if(unique.includes(element)===false){
         unique.push(element);
       }
   }
   return unique;
}

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

let duplicateName = removeDuplicate(names);
console.log(duplicateName);
*/

/*
Problem 4: Finding Bad data

তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

Sample Input & Output:-

Input: [ 1,2,5 ]

Output: 0

Input: [ 2, -5, -7, -13 ]

Output: 3

Input: [ -4, -9, -5, -33, -55 ]

Output: 5



//  Finding Bad data
/*
function findingBadData(arr) {
   let badDataCount = 0;
 
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] < 0) {
       console.log(`Bad Data: ${arr[i]}`);
       badDataCount++;
     } else {
       console.log(`Good Data: ${arr[i]}`);
     }
   }
 
   return badDataCount;
 }
const number = [2, -5, -7, -13];
const badNumber = findingBadData(number);
console.log(badNumber);
*/
