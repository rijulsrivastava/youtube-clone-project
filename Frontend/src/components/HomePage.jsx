import CategoryFiltering from "./categoryFiltering";
import VideoList from "./VideoList";
import { useState } from "react";
import videos from '../utilis/mockData.js'

function HomePage() {

    const [filterCategory, setFilterCategory] = useState("All");
    const filteredVideos = filterCategory == "All"
        ? videos
        : videos.filter((video) => video.category === filterCategory)

    return (
        <main>
            <CategoryFiltering filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
            {filteredVideos.length > 0
                ? <VideoList videos={filteredVideos} />
                : <h2>No videos found</h2>}
        </main >
    )
}

export default HomePage