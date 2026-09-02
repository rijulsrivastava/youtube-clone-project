import { createComment, readComment, removeComment, updateComment } from '../controllers/comment.controller.js'
import verifyToken from '../middleware/verifyToken.js'

function commentRoute(app) {
    app.get("/api/comments/:videoId", readComment)
    app.post("/api/comments", verifyToken, createComment)
    app.put("/api/comments/:id", verifyToken, updateComment)
    app.delete("/api/comments/:id", verifyToken, removeComment)
}

export default commentRoute
