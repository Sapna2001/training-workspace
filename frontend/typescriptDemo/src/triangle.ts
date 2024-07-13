import Shape from "./shape";

export default class Triangle extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }

  async calculateArea(): Promise<number> {
    return 0.5 * this.width * this.height;
  }

  toString() {
    return "Triangle";
  }
}
