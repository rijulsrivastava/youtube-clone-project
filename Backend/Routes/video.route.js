import { dislikeVideo, likeVideo, readVideo, readVideoById, removeVideo, updateVideo } from '../controllers/video.controller.js'

function videoRoute(app) {
    app.get("/api/videos", readVideo)
    app.get("/api/video/:id", readVideoById)
    app.put("/api/videos/:id", updateVideo)
    app.delete("/api/videos/:id", removeVideo)
    app.put("/api/videos/:id/like", likeVideo)
    app.put("/api/videos/:id/dislike", dislikeVideo)
}



export default videoRoute