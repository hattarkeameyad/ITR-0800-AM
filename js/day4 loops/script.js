

function dowhiledemo() {
    let i = 0;
    do {
        console.log("Iteration time : ", i);
        i++;
    } while (i > 2);

}

function whiledemo() {
    let j = 0;
    while (j < 2) {
        console.log("Iteration time for while loop : ", j);
        j++;
    }
}

function normalfor() {
    for (let i = 1; i <= 10; i++) {

        console.log("------------", i, "-----------------");
    }
}

function for_of() {

    let array_a = [25, 53, 54, 25, 76, 98, 54, 25, 76, 98, 54, 25, 76, 98, 54, 25, 76, 98, 54, 25, 76, 98, 54, 25, 76, 98, 54, 25, 76, 98, 54, 25, 76, 98, 54, 25, 76, 98, 54, 25, 76, 98, 54, 25, 76, 98];

    for (let value of array_a) {

        console.log("Value of the array ---- ", value);
    }

}
function for_in_demo() {
    let array_a = [25, 53, 54, 25, 76, 54, 25, 76, 54, 25, 76, 54, 25, 76];
    for (let index in array_a) {
        console.log("---The index is : ", index, "-------- The vlaue of it is ", array_a[index]);
    }
}


console.log("Calling the do while loop . . . .")
dowhiledemo();
console.log("Calling the while loop ");
whiledemo();

console.log("Calling the for loop ----");
normalfor();

console.log("Calling the for of loop ----");
for_of();

console.log("Calling the for in loop ----");
for_in_demo();

