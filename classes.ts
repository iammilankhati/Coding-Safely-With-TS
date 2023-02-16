/* --------------------------------------Classes: visibility, constructor, member functions, getter, setter----------------------------- */
import { Login, User } from "./interfaces";
// import * as UserLogin from "./interfaces";

class Employee {
	// variables and member visibility
	// id!:number; if no data initialized
	private id: number; /* private */

	protected name: string; /* protected */

	address: string;

	//getter
	get getId(): number {
		return this.id; /* giving excess the private variables */
	}

	// setter
	set setId(id: number) {
		this.id = id;
	}

	// constructor
	constructor(id: number, name: string, address: string) {
		this.address = address;
		this.id = id;
		this.name = name;
	}

	// memeber function
	getNameWithAddress(): string {
		return `${this.name} ${this.address}`;
	}
}

// instances
let john = new Employee(1, "John", "Highway 71");

// john.id = 1;   id is private can't access here
// john.name = "John";
// john.address = "America";

console.log(john);
console.log(john.getNameWithAddress());

/* -------------------------------------------------------Inheritance:--------------------------------------------------- */

/* excessing protect memeber in inheritance */

class Manager extends Employee implements Login {
	constructor(id: number, name: string, address: string) {
		super(id, name, address);
	}

	display(): void {
		// console.log(this.id); id is private, can't be excessed
		console.log(this.name);
	}

	Login(): User {
		return { name: this.name };
	}
}

let manager1 = new Manager(1, "Ram", "Nepal");

//id and name are not accessible to manager1
manager1.getNameWithAddress();
