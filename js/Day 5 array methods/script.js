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