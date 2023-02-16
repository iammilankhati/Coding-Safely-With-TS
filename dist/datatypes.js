"use strict";
/* ------------------------------------------------string,number,boolean,array----------------------- */
let fname = "Milan";
// fname = 5;
// invalid since fname is string
let newName = fname.toUpperCase();
console.log(newName);
/* number */
let age = 18;
// age = "24";
/* invalid as age is number */
console.log(age);
/* typecast */
let result = parseInt("35");
/* boolean */
let isValid;
isValid = true;
console.log(isValid);
/* array */
let empList;
let deptList;
let ages;
let heights;
heights = [1, 2, 3, 4, 5];
empList = ["ram", "hari"];
/*------------------------------------------------- filter, find, reduce function--------------------------- */
//filter
let results = heights.filter((each) => each > 2);
console.log(results);
//find
let num = heights.find((each) => each > 2);
console.log(num);
//reduce
let sum = heights.reduce((sum, each) => {
    sum += each;
    return sum;
}, 0);
console.log(sum);
let c = 0 /* Color.Red */;
//tuple
/* USECASE: IT IS AN ARRAY BUT MORE SPECIFIC swapNumbs:number[] => swapNumbs:[number, number]*/
let swapNumbs;
function swapNumber(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumber(2, 3);
console.log(swapNumbs);
//any
let department;
department = 13;
department = "Ram";
department = true;
//# sourceMappingURL=datatypes.js.map