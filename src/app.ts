import "express-async-errors"
import express, {json} from "express"
import cors from "cors"
import routes from "./routes/index.routes.js"

const server = express()

server.use([json(),cors()])

server.get("/", (req,res) => {
    res.send("Hello")
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
