let a = [35, 45, 67];
console.log("Values within the array a ", a);
let b = a;
console.log("Values within array b", b);

b[2] = 88;
console.log("Values within the array a ", a);
console.log("Values within array b", b);


//for each iterator
let z = [522, 632, 842, 952];
console.log(z);
z.forEach(function (item) {
    item += 100;
    console.log(item);
});

//map function
let y = z.map(function (item) {
    let discount = (item / 100) * 10;
    return item - discount;
});

z.forEach(function (item) {
    console.log("Value before discount was : ", item)
});

y.forEach(function (item) {
    console.log("Value after discount is : ", item);
})

let ab = [234, 12, 34, 67, 345, 234, 45, 343, 78, 35, 9, 3, 12, 324234, 45];

let even_ele = ab.filter(function (item) {
    return item % 2 === 0;
});

ab.forEach(function (item) {
    console.log(`This is the element --- ${item} --- before filter`);
});

even_ele.forEach(
    function (item) {
        console.log(`This is after filteration returned valiue ${item}`);
    }
);

console.log(`THis is before filter ${ab} ${ab.length} after filteration ${even_ele}`);
// Every method
let even = [12, 34, 56, 22, , 88, 44, 888];

let result = even.every((item) => {

    return item % 2 === 0;
});

console.log(`The Result of even checking is : ${result}`);

let height = [188, 185, 186, 185, 188, 185, 188];

result = height.every((item) => {
    return item > 183;
})
console.log("Is your team above height 183 cm : " + result);

// Find method 

let pq = [57, 2341, 13, 367, 53, 200];

let found_number = pq.find((item) => {

    return item % 2 === 0

});

ab.forEach((item) => {
    console.log(`This is array item : ${item}`)
})

console.log(`From above this number ${found_number} is the first element who satifies the condition..`);

//reduce 

let qr = [20, 35, 55, 68, 98];

result = qr.reduce((pre, curr) => {
    return pre + curr;
})

console.log(result);
//push method
console.log("Current array " + qr);

qr.push(5555);

console.log("After push array " + qr);

//pop method

let poppedelement = qr.pop();

console.log(`Popped element is ${poppedelement}  and now the array is ${qr}`)

poppedelement = qr.pop();

console.log(`Popped element is ${poppedelement}  and now the array is ${qr}`)
poppedelement = qr.pop();

console.log(`Popped element is ${poppedelement}  and now the array is ${qr}`)
poppedelement = qr.pop();

console.log(`Popped element is ${poppedelement}  and now the array is ${qr}`)

//shift it removes element from the begining
qr = [25, 2, 34, 54, 45, 3, 434, 23, 23, 89];
let shifted_element = qr.shift();
console.log(`Shifted element is ${shifted_element}  and now the array is ${qr}`)

shifted_element = qr.shift();
console.log(`Shifted element is ${shifted_element}  and now the array is ${qr}`)

shifted_element = qr.shift();
console.log(`Shifted element is ${shifted_element}  and now the array is ${qr}`)

shifted_element = qr.shift();
console.log(`Shifted element is ${shifted_element}  and now the array is ${qr}`)

//unshift array

qr.unshift(45);
qr.unshift(22222);
qr.unshift(2111);
qr.unshift(99992);
console.log(`array after unshifting elements ${qr}`)

//splice with one parameter

let mr = [8, 37, 48, 37, 2, 834, 2, 398, 47, 293, 47];

console.log(mr);
mr.splice(2);

console.log(mr);

//splice with 2 prameter
mr = [8, 37, 48, 37, 2, 834, 2, 398, 47, 293, 47];

console.log(mr);
mr.splice(2, 5);

console.log(mr);

//splice with 3 parameters 

mr = [8, 37, 48, 37, 2, 834, 2, 398, 47, 293, 47];

console.log(mr);
mr.splice(2, 5, 999, 8888, 7777, 6666, 555);
console.log(mr);

