

import Shape from './shapeModule.js';

class Circle extends Shape {
    constructor(radius, x, y, color) {
        super();
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.Color = color;
    }

    getArea() {
        this.DrawShape();
        return Math.PI * this.radius * this.radius;
    }
}

export default Circle;