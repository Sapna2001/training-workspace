export default abstract class Shape {
  constructor(public width: number, public height: number) {
 
  }

  abstract calculateArea() : Promise<number>;
}
