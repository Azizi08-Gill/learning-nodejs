const fs = require('fs');

let a=5;
let b=5;

let sum = a+b;
let product = a * b;

let data = `Sum: ${sum} \nProduct: ${product}`;
console.log(data);

fs.writeFile('output.txt', data, (err) => {
    if (err) throw err;
    console.log("Data has been written into the file successfully");
});

