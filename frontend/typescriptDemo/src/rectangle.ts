import Shape from "./shape";

export default class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }

  async calculateArea(): Promise<number> {
    return this.width * this.height;
  }

  toString() {
    return "Rectangle";
  }
}
