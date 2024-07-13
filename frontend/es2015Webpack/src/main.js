import Rectangle from "./rectangle.js";
import Triangle from "./triangle.js";

class Main {
    static async display(shape) {
        const area = await shape.calculateArea();
        console.log(`Area of ${shape} is ${area}`);
    }
}

Main.display(new Rectangle(23.4, 34.5));
Main.display(new Triangle(23.4, 34.5));
