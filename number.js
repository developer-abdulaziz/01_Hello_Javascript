
/*
-5 ====> Math.abs(x) ===> 5

5.003 ====> Math.ceil(x) ===> 6

5.999 ====> Math.floor(x) ===> 5

5.999 ====> Math.round(x) ===> 6

5.255 ====> Math.round(x) ===> 5

Math.random ====> 0.3111
*/

var country = 'bangladesh';
let nm = ['cake', 'apple', 'banana', 'anaros']
let num = [12, 34, 35, 67, 90]
// for(let i = 0; i < nm.length; i++){
//   let index = i;
//   let element = nm[index];
//   console.log(`index: ${i}`, element);
//   console.log(element);
// }

let sum = 0;
for(let i = 0; i < num.length; i++){
  let index = i;
  let element = num[index];
  // console.log(`index: ${i}`, element);
   sum = sum + element;
  console.log(sum);
}



