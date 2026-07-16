
let product = {
    name: "Keyboard",
    price: 600,
    product_description: "Used to give input to computer",
    run: function () {
        console.log("This is inside the object function ");
    }
}

console.log(`Product name is : ${product.name} and price is : ${product.price} and description is -- ${product.product_description}`);
product.run();

product.name = "Mouse";
console.log(product.name)

console.log(product);
delete product.product_description;
console.log("After deletion ", product);


//freeze
let car = {
    brand: "Mahindra",
    carname: "xuv700",
    description: "7 seater suv"
}
Object.freeze(car);

console.log(car);
car.name = "Mercedes";
console.log(car);
let bike = {
    brand: "RE",
    model: "Hunter",
    engine: 350
}
//delete
delete car.description;

delete bike.engine;
console.log(car, bike);

let bike_car = { ...car, ...bike };

console.log(bike_car);

let mobile = {
    brand: "samsung",
    ram: "8gb",
    storage: "256gb"
}

console.log(mobile);
console.log(Object.entries(mobile))

let info_required = Object.keys(mobile);
let info_sent = Object.values(mobile);

console.log(info_required, "And the value for it is ", info_sent);


let tourism = {
    place: "Ellora",
    type: "Historical",

}

console.log(tourism,"Then the values of it", Object.values(tourism));
tourism.ticket_price=20;
console.log(tourism,"Then the values of it", Object.values(tourism));

let laptop={
    brand: "asus",
    ram: "16GB",
    storage: "256GB"
}
console.log(laptop,"before freezing");
Object.seal(laptop);
laptop.camera="20px";
delete laptop.storage;
console.log("Now changing the exhisting values . . . ");
laptop.ram="32gb"
laptop.brand="macbook"
console.log(laptop);
console.log(laptop,"after sealing");


