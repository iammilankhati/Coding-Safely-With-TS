"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as UserLogin from "./interfaces";
class Employee {
    //getter
    get getId() {
        return this.id; /* giving excess the private variables */
    }
    // setter
    set setId(id) {
        this.id = id;
    }
    // constructor
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    // memeber function
    getNameWithAddress() {
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
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    display() {
        // console.log(this.id); id is private, can't be excessed
        console.log(this.name);
    }
    Login() {
        return { name: this.name };
    }
}
let manager1 = new Manager(1, "Ram", "Nepal");
//id and name are not accessible to manager1
manager1.getNameWithAddress();
//# sourceMappingURL=classes.js.map