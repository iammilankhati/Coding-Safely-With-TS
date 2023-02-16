"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", id: 23, email: "john@example.com" };
let emp = {
    name: "John",
    id: 23,
    email: "john@example.com",
    salary: 123,
};
//SO USECASE IN CLASS
/* ------------------------------array and obj destructuring----------------------------------- */
//object destructuring
let user1 = { name: "ram", id: 1, email: "" };
let { name: userName, id } = { name: "ram", id: 1, email: "" };
// array destructuring
let users = [
    { name: "ram", id: 1, email: "" },
    { name: "ram", id: 1, email: "" },
];
let [user3, user2, ...userss] = [
    { name: "ram", id: 1, email: "" },
    { name: "ram", id: 1, email: "" },
    { name: "ram", id: 1, email: "" },
];
//# sourceMappingURL=interfaces.js.map