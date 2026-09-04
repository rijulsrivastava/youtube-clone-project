import express from "express"
import userRoute from './Routes/user.route.js'
import mongoose from "mongoose"
import videoRoute from "./Routes/video.route.js"
import commentRoute from "./Routes/comment.route.js"
import channelRoute from "./Routes/channel.route.js"
import cors from "cors"

const app = express()
const PORT = 5050

app.use(express.json()) // to parse json objects
app.use(cors()) // to make communication between frontend and backend
//below is to connect mongoDB
mongoose.connect("mongodb+srv://rijulsrivastva_db_user:tN8TszFMzH5NTSS8@cluster0.ttucwly.mongodb.net/")
    .then(() => {
        console.log("DB connected with cloud")
    })
    .catch((err) => {
        console.log("DB not connected", err)
    })

// below are to user API routes for applications
userRoute(app)
videoRoute(app)
commentRoute(app)
channelRoute(app)
//to start the server
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})