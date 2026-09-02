import CategoryFiltering from "./categoryFiltering";
import VideoList from "./VideoList";
import { useState } from "react";
import videos from '../utilis/mockData.js'
import { useOutletContext } from 'react-router'

function HomePage() {

    const [filterCategory, setFilterCategory] = useState("All");
    const categoryFiltering = filterCategory == "All"
        ? videos
        : videos.filter((video) => video.category === filterCategory)

    const { search = "" } = useOutletContext()
    const filteredVideos = categoryFiltering.filter(
        (video) => video.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <main className="min-h-screen px-2 sm:px-4">
            <CategoryFiltering filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
            {filteredVideos.length > 0
                ? <VideoList videos={filteredVideos} />
                : <h2 className="text-center text-lg sm:text-xl mt-10">No videos found</h2>}
        </main >
    )
}

export default HomePage