import { createComment, readComment, removeComment, updateComment } from '../controllers/comment.controller.js'
import verifyToken from '../middleware/verifyToken.js'
// api routes for comment
function commentRoute(app) {
    app.get("/api/comments/:videoId", readComment) // to read comment of particular video
    app.post("/api/comments", verifyToken, createComment) // to add new comment
    app.put("/api/comments/:id", verifyToken, updateComment) // to update comment 
    app.delete("/api/comments/:id", verifyToken, removeComment) // to delete comment
}

export default commentRoute
