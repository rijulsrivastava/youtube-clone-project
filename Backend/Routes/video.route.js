import { dislikeVideo, likeVideo, readVideo, readVideoById, removeVideo, updateVideo } from '../controllers/video.controller.js'
import verifyToken from '../middleware/verifyToken.js'

function videoRoute(app) {
    app.get("/api/videos", readVideo)
    app.get("/api/video/:id", readVideoById)
    app.put("/api/video/:id", verifyToken, updateVideo)
    app.delete("/api/video/:id", verifyToken, removeVideo)
    app.put("/api/video/:id/like", verifyToken, likeVideo)
    app.put("/api/video/:id/dislike", verifyToken, dislikeVideo)
}



export default videoRoute