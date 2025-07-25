
import { Rectangle, Square } from './squaresModule.js';
import Circle from './circleModule.js';

// shapes
const rect = new Rectangle(10, 5, 'red');
const square = new Square(7, 'blue');
const circle = new Circle(3, 0, 0, 'green');

// Call function
console.log(`Rectangle Area: ${rect.getArea()}`);
console.log(`Square Area: ${square.getArea()}`);
console.log(`Circle Area: ${circle.getArea().toFixed(2)}`);