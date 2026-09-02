function videoRoute(app) {
    app.get("/api/videos")
    app.get("/api/videos/:id")
    app.put("/api/videos/:id")
    app.delete("/api/videos/:id")
    app.put("/api/videos/:id/like")
    app.put("/api/videos/:id/dislike")
}



export default videoRoute