import { createComment, removeComment, updateComment } from '../controllers/comment.controller.js'

function commentRoute(app) {
    app.post("/api/comments", createComment)
    app.put("/api/comments/:id", updateComment)
    app.delete("/api/comments/:id", removeComment)
}

export default commentRoute
