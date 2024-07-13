class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  async calculateArea() {
    return 0.0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
    this.name = "Rectangle";
  }

  async calculateArea() {
    return this.width * this.height;
  }

  toString() {
    return "Rectangle";
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
    this.name = "Triangle";
  }

  async calculateArea() {
    return 0.5 * this.width * this.height;
  }

  toString() {
    return "Triangle";
  }
}

class Main {
    static async display(shape) {
        const area = await shape.calculateArea();
        console.log(`Area of ${shape} is ${area}`);
    }
}

Main.display(new Rectangle(23.4, 34.5));
Main.display(new Triangle(23.4, 34.5));
