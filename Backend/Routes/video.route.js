import { createVideo, dislikeVideo, likeVideo, readVideo, readVideoById, removeVideo, updateVideo } from '../controllers/video.controller.js'
import verifyToken from '../middleware/verifyToken.js'
// to define api routes for video
function videoRoute(app) {

    app.get("/api/videos", readVideo) // api to read all videos
    app.get("/api/video/:id", readVideoById)// api to read a particular video
    app.post("/api/videos", verifyToken, createVideo)//api to create new video
    app.put("/api/video/:id", verifyToken, updateVideo)// api to update particular video
    app.delete("/api/video/:id", verifyToken, removeVideo)// api to remove particular video
    app.put("/api/video/:id/like", verifyToken, likeVideo)//api to add/remove like
    app.put("/api/video/:id/dislike", verifyToken, dislikeVideo)//api to add/remove dislike
}



export default videoRoute