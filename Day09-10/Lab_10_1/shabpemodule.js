class Shape {
    color;

    set Color(value) {
        this.color = value;
    }

    get Color() {
        return this.color;
    }

    DrawShape() {
        console.log(`Shape color is: ${this.color}`);
    }
}

export default Shape;