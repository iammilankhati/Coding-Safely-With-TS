/* --------------------------------------------Interfaces----------------------------------------- */
/* USECASE: use to define userdefined datatypes */
export interface User {
	name: string;
	age?: number; //make age optional
	id?: number;
	email?: string;
}

let user: User = { name: "John", id: 23, email: "john@example.com" };

/* extending the interfaces */
interface Employees extends User {
	salary: number;
}

let emp: Employees = {
	name: "John",
	id: 23,
	email: "john@example.com",
	salary: 123,
};

/* method defination in interface */
/* CLASSES SHOULD BE RESPONSIBLE FOR EMPLIMENTING THIS INTERFACE */
export interface Login {
	Login(): User;
}

//SO USECASE IN CLASS

/* ------------------------------array and obj destructuring----------------------------------- */

//object destructuring
let user1: User = { name: "ram", id: 1, email: "" };
let { name: userName, id }: User = { name: "ram", id: 1, email: "" };

// array destructuring
let users: User[] = [
	{ name: "ram", id: 1, email: "" },
	{ name: "ram", id: 1, email: "" },
];
let [user3, user2, ...userss]: User[] = [
	{ name: "ram", id: 1, email: "" },
	{ name: "ram", id: 1, email: "" },
	{ name: "ram", id: 1, email: "" },
];
