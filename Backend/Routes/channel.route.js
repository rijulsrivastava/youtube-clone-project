import verifyToken from '../middleware/verifyToken.js'
import { createChannel, readChannelById } from '../controllers/channel.controller.js'
// to define api routes
function channelRoute(app) {
    app.post("/api/channels", verifyToken, createChannel) // api to create new channel
    app.get("/api/channels/:id", readChannelById) // to get channel info
}

export default channelRoute