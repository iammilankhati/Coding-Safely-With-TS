"use strict";
/* -------------------------------------------functions----------------------------------------- */
/*  we speficify initially what are going in and what is coming out, */
//1. function should take two number: not other exactly two number
//2. function should not return anything (void)
//eg. thing will show error as there is return
// function add(a: number, b: number): void {
// 	return a + b;
// }
/* correct way */
function add(a, b) {
    return a + b;
}
/* function expression */
const mult = function (a, b) {
    return a * b;
};
/* arrow functions */
const sub = (num1, num2) => {
    return num1 - num2;
};
/* ------------------------------------------------parameter: required, optional, rest----------------------------------------------- */
/*optional : c?:number */
function addition(a, b, c) {
    return c ? a + b + c : a + b;
}
addition(2, 3);
/* default or required parameter */
function subtraction(a, b, c = 10) {
    return c ? a + b + c : a + b;
}
subtraction(2, 3);
/* rest parameters */
function add2(num1, num2, ...nums) {
    return num1 + num2 + nums.reduce((sum, each) => (sum += each), 0);
}
let nums = [2, 3, 4, 5];
add2(3, 4, ...nums);
add2(3, 4, ...[2, 3, 4, 5]);
add2(3, 4, 2, 3, 4, 5);
/* --------------------------------------------------------generic functions------------------------------------------------- */
function getItems(items) {
    return new Array().concat(items);
}
getItems([0, 5, 4, 5]);
getItems([0, 5, 4, 5]);
getItems(["ram", "hari"]);
//# sourceMappingURL=functions.js.map