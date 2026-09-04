import CategoryFiltering from "./categoryFiltering";
import VideoList from "./VideoList";
import { useState } from "react";
// import videos from '../utilis/mockData.js'
import { useOutletContext } from 'react-router'
import useFetch from "../utilis/useFetch.js"

function HomePage() {
    // to read all videos
    const API = "http://localhost:5050/api/videos"
    const { error, loading, data: videos } = useFetch(API)
    // to filter video based on category choosen
    const [filterCategory, setFilterCategory] = useState("All")
    const categoryFiltering = filterCategory == "All"
        ? videos
        : videos.filter((video) => video.category === filterCategory)
    // to have search input from parent for filtering
    const { search = "" } = useOutletContext()
    const filteredVideos = categoryFiltering.filter(
        (video) => video.title.toLowerCase().includes(search.toLowerCase()))

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error while fetching: {error}</h1>

    return (
        <main className="min-h-screen px-2 sm:px-4">
            <CategoryFiltering filterCategory={filterCategory} setFilterCategory={setFilterCategory} /> {/*to show category buttons for filtering*/}
            {/* to show filtered videos */}
            {filteredVideos.length > 0
                ? <VideoList videos={filteredVideos} />
                : <h2 className="text-center text-lg sm:text-xl mt-10">No videos found</h2>}
        </main >
    )
}

export default HomePage