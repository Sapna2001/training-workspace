import { error } from "console"
import fs from "fs/promises"

const readFile = async(fileName) => {
    return await fs.readFile(fileName) 
}

(async() => {
    try {
        const data = await readFile("data")
        console.log(data.toString())
    } catch(error) {
        console.error(error)
    }
})();

console.log("Before Reading")