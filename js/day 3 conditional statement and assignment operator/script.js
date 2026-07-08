let a = 56, b = 20;

console.log(a += b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);
console.log(a **= b);
console.log(a -= b);


// increament decrement 

let c = 25;

console.log("Value of c before post increment: ", c);
console.log("While Post increment : ", c++);
console.log("Value of c after post increment: ", c);

console.log("Value of c before pre increment: ", c);
console.log("While pre increment", ++c);
console.log("Value of c after pre increment: ", c);

//tirnary operators

let x = 220, y = 55;
let result;
result = (x > y) ? "The x is greater then y" : "The y is greater then x"
console.log(result);
result=null

//unary + 

a = 5, b = "5";

console.log(a - b);
console.log(a + (-b));

//COnditional statements

let q = 55, r = 44, d = 22;
if (q > r) {
    console.log("If block executed")
}
else if (r > d) {
    console.log("else if block executed")

}
else if (r > d) {
    console.log("else if block executed")

}
else if (r > d) {
    console.log("else if block executed")

}
else if (r > d) {
    console.log("else if block executed")

}
else if (r > d) {
    console.log("else if block executed")

}
else if (r > d) {
    console.log("else if block executed")

}
else if (r > d) {
    console.log("else if block executed")

}
else if (r > d) {
    console.log("else if block executed")

}
else {
    console.log("Else block executed");
}

q = 25, r = 34, d = 54;

if (q > r) {
    if (q > d) {
        console.log("The q is greater in all")
    }
    else {
        console.log("The d is greater in all")

    }
}
else {
    if (r > d) {
        console.log("The r is greater in all")
    }
    else {
        console.log("The d is greater in all")
    }
}

let choice = prompt("What is the time now - evening/morning/afternoon ");
console.log(choice);
switch (choice) {
    case 'evening':
        console.log("Good evening");
        break;
    case "morning":
        console.log("Good morning");
        break;
    case "afternoon":
        console.log("Good afternoon");
        break;
    default:
        console.log("Wrong selection . . . . ");
        break;
}

//By using switch case create a calculator take input from user for two variable and ask user wht operation he want to perform on it.

let var1 = prompt("Enter first variable");
let var2 = prompt("Enter second variable");

let choice1 = prompt("Please make choice out of : + - / * % **");
switch (choice1) {
    case '+':
        result = (+var1) + (+var2)
        break;
    case '-':
        result = (+var1) - (+var2)
        break;
    case '/':
        result = (+var1) / (+var2)
        break;
    case '*':
        result = (+var1) * (+var2)
        break;
    case '**':
        result = (+var1) ** (+var2)
        break;
    case '%':
        result = (+var1) % (+var2)
        break;
    default:
        console.log("Either your variable is not a number or we cant serve your request ");
        break;

}
if (result === NaN) {
    console.log("Please enter proper numbers or make a good choice.")
}
else {
    alert("Your result is : " + result);
}