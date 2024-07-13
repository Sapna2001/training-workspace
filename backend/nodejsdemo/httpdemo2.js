import { EventEmitter } from "events"
import http from "http"
import fs from "fs"

const server = http.createServer()

const products = [
    {
        id: 1,
        name: "Iphone15"
    },
    {
        id: 2,
        name: "Oneplus12"
    }
]

console.log(server instanceof EventEmitter)

server.on("request", (req, res) => {
    switch(req.url) {
        case "/api":
            res.writeHead(200,{"Content-type":"application/json"})
            res.end(JSON.stringify(products))
            break
        case "/home":
        case "/about":
            res.writeHead(200,{"Content-type":"text/html"})
            res.end(fs.readFileSync(`.${req.url}.html`))
            break
        case "/":
            res.writeHead(301,{"Location" : "/home"})
            res.end()
            break
        default:
            res.writeHead(404)
            res.end()
            break
    }
})

server.listen(8888, () => console.log("server started"))