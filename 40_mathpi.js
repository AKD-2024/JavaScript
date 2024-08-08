// console.log(Math.PI); //3.141592653589793
// Math.PI = 5
// console.log(Math.PI); //3.141592653589793

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

const product = {
  name: "Coffee",
  price: 250,
  isAvailable: true,
  orderCoffee: function () {
    console.log("Not Available!");
  },
};

console.log(product);
// {
//     name: 'Coffee',
//     price: 250,
//     isAvailable: true,
//     orderCoffee: [Function: orderCoffee]
// }

console.log(Object.getOwnPropertyDescriptor(product, "name"));
// {
//     value: 'Coffee',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

Object.defineProperty(product, "name", {
  writable: false,
  enumerable: false,
//enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(product, "name"));
// {
//     value: 'Coffee',
//     writable: false,
//     enumerable: false,
//     configurable: true
// }

for (let [key, value] of Object.entries(product)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
// Since we have made name's enumerable property false it is not accessed here
// price : 250
// isAvailable : true