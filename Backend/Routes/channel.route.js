import verifyToken from '../middleware/verifyToken.js'
import { createChannel, readChannelById } from '../controllers/channel.controller.js'

function channelRoute(app) {
    app.post("/api/channels", verifyToken, createChannel)
    app.get("/api/channels/:id", readChannelById)
}

export default channelRoute