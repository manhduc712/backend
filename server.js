import express from "express"
import * as dotenv from "dotenv"
dotenv.config()

import connectDB from "./config/database.js"
import initRoutes from "./routes/index.js"

const app = express()

const port = process.env.PORT || 8000
app.use(express.json())

initRoutes(app)
app.listen(port, () => {
    connectDB()
    console.log(`Server is running on port ${port}`)
})