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


app.use("/api/v1", contactRouter)

app.get("/", (req, res) => {
    res.send(`
          <!DOCTYPE html>
          <html>
          <head>
          <link
        rel="icon"
        type="image/svg+xml"
        href="https://res.cloudinary.com/dvxkeeeqs/image/upload/v1739252237/AAPI_y3xqk8.webp"
      />
            <title>Contact Management API server</title>
            <style>
              div{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  background-color: black;
              }
              h1{
                  color: white;
              }
            </style>
          </head>
          <body>
              <div>
                  <h1>Contact Management API Server running Successfully</h1>
              </div>
          </body>
          </html>
        `);
  });

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