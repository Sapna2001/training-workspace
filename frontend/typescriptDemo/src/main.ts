import Rectangle from "./rectangle";
import Triangle from "./triangle";
import Shape from "./shape"

class Main {
    static async display(shape: Shape): Promise<void> {
        const area = await shape.calculateArea();
        console.log(`Area of ${shape} is ${area}`);
    }
}

Main.display(new Rectangle(23.4, 34.5));
Main.display(new Triangle(23.4, 34.5));
