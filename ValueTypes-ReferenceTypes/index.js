let a1 = 1;
let a2 = 1;
console.log(a1 === a2); //true

let obj1 = { a: 1};
let obj2 = { a: 1};
console.log(obj1 === obj2); //false

let a3 = a2;
console.log(a3 === a2);
a3 = 2;
console.log(a3 === a2);


let obj3 = ob2;
console.log(obj3 === obj2);
ob3.a = 2;
console.log(obj3 === obj2);



