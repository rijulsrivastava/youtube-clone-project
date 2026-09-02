import { dislikeVideo, likeVideo, readVideo, readVideoById, removeVideo, updateVideo } from '../controllers/video.controller.js'
import verifyToken from '../middleware/verifyToken.js'

function videoRoute(app) {
    app.get("/api/videos", readVideo)
    app.get("/api/video/:id", readVideoById)
    app.put("/api/videos/:id", verifyToken, updateVideo)
    app.delete("/api/videos/:id", verifyToken, removeVideo)
    app.put("/api/videos/:id/like", verifyToken, likeVideo)
    app.put("/api/videos/:id/dislike", verifyToken, dislikeVideo)
}



export default videoRoute