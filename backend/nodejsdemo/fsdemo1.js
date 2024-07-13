import { error } from "console"
import fs from "fs"

const readFile = (fileName, callBack) => {
    fs.readFile(fileName, (error, data) => {
        if(error) {
            return callBack(error)
        } else {
            callBack(null, data.toString().split("\n").map(Number).filter(d => d % 2 == 0))
        }
    })
}

readFile("data", (error, data) => {
    if(error) {
        console.error("Error reading the file.")
    } else {
        console.log(data)
    }
})

console.log("Before Reading")