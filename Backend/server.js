import express from "express"
import userRoute from './Routes/user.route.js'
import mongoose from "mongoose"

const app = express()
const PORT = 5050

app.use(express.json())

mongoose.connect("mongodb+srv://rijulsrivastva_db_user:tN8TszFMzH5NTSS8@cluster0.ttucwly.mongodb.net/")
    .then(() => {
        console.log("DB connected with cloud")
    })
    .catch((err) => {
        console.log("DB not connected", err)
    })


userRoute(app)

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})