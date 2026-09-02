function channelRoute(app) {
    app.post("/api/channels")
    app.get("/api/channels/:id")
}

export default channelRoute