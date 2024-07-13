import { EventEmitter } from "events";
import fs, { createReadStream, createWriteStream } from "fs"
import { createGzip } from "zlib";

const readFileUsingEventEmitter = (folderName) => {
    return createReadStream(folderName)
    .pipe(createGzip())
    .pipe(createWriteStream("a.gz"))
}

const emitter = readFileUsingEventEmitter("data1/data")

emitter.on("finish", () => console.log("Task accomplished"))

console.log("After Reading")