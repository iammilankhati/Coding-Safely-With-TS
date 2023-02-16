/* -------------------------------------------functions----------------------------------------- */
/*  we speficify initially what are going in and what is coming out, */

//1. function should take two number: not other exactly two number
//2. function should not return anything (void)

//eg. thing will show error as there is return
// function add(a: number, b: number): void {
// 	return a + b;
// }

/* correct way */
function add(a: number, b: number): number {
	return a + b;
}

/* function expression */
const mult = function (a: number, b: number): number {
	return a * b;
};

/* arrow functions */
const sub = (num1: number, num2: number): number => {
	return num1 - num2;
};

/* ------------------------------------------------parameter: required, optional, rest----------------------------------------------- */
/*optional : c?:number */

function addition(a: number, b: number, c?: number): number {
	return c ? a + b + c : a + b;
}
addition(2, 3);

/* default or required parameter */
function subtraction(a: number, b: number, c: number = 10): number {
	return c ? a + b + c : a + b;
}
subtraction(2, 3);

/* rest parameters */
function add2(num1: number, num2: number, ...nums: number[]): number {
	return num1 + num2 + nums.reduce((sum, each) => (sum += each), 0);
}

let nums = [2, 3, 4, 5];
add2(3, 4, ...nums);
add2(3, 4, ...[2, 3, 4, 5]);
add2(3, 4, 2, 3, 4, 5);

/* --------------------------------------------------------generic functions------------------------------------------------- */
function getItems<Type>(items: Type[]): Type[] {
	return new Array<Type>().concat(items);
}

getItems([0, 5, 4, 5]);
getItems<number>([0, 5, 4, 5]);
getItems<string>(["ram", "hari"]);
