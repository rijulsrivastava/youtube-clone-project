function commentRoute(app) {
    app.post("/api/comments")
    app.put("/api/comments/:id")
    app.delete("/api/comments/:id")
}

export default commentRoute
