// squaresModule.js
import Shape from './shapeModule.js';

class Rectangle extends Shape {
    constructor(width, height, color) {
        super();
        this.width = width;
        this.height = height;
        this.Color = color; 
    }

    getArea() {
        this.DrawShape();
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side, color) {
        super(side, side, color);
    }
}

export { Rectangle, Square };