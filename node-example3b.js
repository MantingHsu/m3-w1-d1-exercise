const rect = require('./node-example3a');

console.log(`Area of 6x2 rectangle: ${rect.area(6, 2)}`);
console.log(`Perimeter of 6x2 rectangle: ${rect.perimeter(6, 2)}`);


function solveRect(l, w) {
console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

if (l <= 0 || w <= 0) {
    console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
} else {
    console.log(`Area of rectangle: ${rect.area(l, w)}`);
    console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
}
}

solveRect(6, 2);
solveRect(8, 1);
solveRect(0, 9); 
solveRect(4, -1); 

