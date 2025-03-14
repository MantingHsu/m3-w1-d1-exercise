const rect = require('./node-example3a');

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);
    
    if (l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be greater than zero. Values: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
    }
}

solveRect(6, 2);
solveRect(8, 1);
solveRect(0, 9); // Should trigger an error
solveRect(4, -1); // Should trigger an error
