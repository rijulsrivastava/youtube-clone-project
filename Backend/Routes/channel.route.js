import { createChannel, readChannelById } from '../controllers/channel.controller.js'

function channelRoute(app) {
    app.post("/api/channels", createChannel)
    app.get("/api/channels/:id", readChannelById)
}

export default channelRoute