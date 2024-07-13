import Shape from "./shape.js";

export default class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  async calculateArea() {
    return 0.5 * this.width * this.height;
  }

  toString() {
    return "Triangle";
  }
}
