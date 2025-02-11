import express from "express"
import cors from "cors"
import "dotenv/config.js"

// Import DB Function
import connectMongoDB from "./dbConfig/db.js"
import contactRouter from "./routes/contactDetailsRoute.js"

// Initialize Express App
const app = express()
app.use(express.json())


app.use(cors())

app.get("/", (req, res) => {
    res.send("Api is working")
})

app.use("/api/v1", contactRouter)

// defining and assigning PORT
const port = process.env.PORT

// Calling DB Function
connectMongoDB()

app.listen(port, () => {
    try {
        console.log("Server running Successfully!")
    } catch (error) {
        console.log("Error in server starting", error.message)
    }
})