

function myfunction() {
    console.log("Hello world . . . ");
    let p = 23;
    let q = 55;
    console.log(p + q);
}
function addition(a, b) {
    console.log(a + b);
}
let x = myfunction;
x();

addition(35, 20);

function mul(b, c = 25) {
    console.log(b * c);
}
mul(5);
