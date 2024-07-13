import { EventEmitter } from "events"
import http from "http"

const server = http.createServer()

console.log(server instanceof EventEmitter)

server.on("request", (req, res) => {
    res.writeHead(200,{"content-type": "text/plain"})
    res.write("Welcome")
    res.end()
})

server.listen(8888, () => console.log("server started"))