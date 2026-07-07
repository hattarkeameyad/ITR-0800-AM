let barray = [23, 43, 23, 65]

console.log(typeof (barray));

let person = {
    name:"Akshay Kumar",
    age:53,
    movie:"Khiladi",
};
console.log(typeof (person))
function myfunction() {

    console.log("This is function");
}

console.log(typeof (myfunction))

//All examples combined 
let num = 100;
let str = "JavaScript";
let bool = true;
let undef;
let empty = null;
let arr = [1, 2, 3];
let obj = { name: "Sam", age: 30 };
function test() {
return "Data Types";
}
console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof bool); // boolean
console.log(typeof undef); // undefi ned
console.log(typeof empty); // object
console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof test); // function

console.log("----------------------");
//immutable


let a = 20 ;
let b=a;

console.log("Valye of a is : ",a);
console.log("Valye of b is : ",b);
console.log("We are changing value of b");
b+=5;
console.log("Valye of a is : ",a);
console.log("Valye of b is : ",b);


console.log("------------------------");

let arra=[20,34,10];
let arrb=arra;

console.log("Value before changing or modification . . . .");
console.log(arra);
console.log(arrb);

console.log("After modification . . . .")
arra[1]=567;

console.log(arra);
console.log(arrb);

arrb[2]=999;

console.log(arra);
console.log(arrb);

console.log("------------------")
//Operators

let x,y,z;
x=20;
y=30;
z;
s=288;
t=10;
console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(s%t);
let v1=1,v2=1
console.log("checking the variable ------------ ",v1==v2);

console.log("This si the type variable "+typeof(v1)+" and the value is "+ v1)

let ab=52,ba=52;

if(ab<=ba)
    console.log("ab is greater then ba");

else
    console.log("ba is greater then ab")


console.log(2**8)


