import { error } from "console"
import fs from "fs"

const readFile = (fileName, callBack) => {
    const data = fs.readFileSync(fileName)

    return data
}

console.log(readFile("data").toString())

console.log("Before Reading")