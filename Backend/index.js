import express from 'express'
import dotenv from "dotenv"
import { connectionDB } from './db/connectDB.js'
import authRoutes from "./routes/auth.route.js"


dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())// allow us to parse incomming requests: req.body
// app.get('/', (req, res) => {
//     res.send("Hello World")
// })
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectionDB()
    console.log("Server is running on port:", PORT)
})

