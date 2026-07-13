function myfunction() {

    console.log("Hello world")
}
//this is function expression
let myfunction2 = function () {
    console.log("This is function expression");
}

//arrow function

let function3 = () => console.log("This is single line arrow function ");

let addition = (a, b) => {
    let c = a + b;
    return c;
}
myfunction();
myfunction2();
function3();
let result = addition(100, 200);
console.log("Result of an addition arrow function is ", result);
(function () {
    console.log("This iS IEEE Immmediately envoked function.");
})();
