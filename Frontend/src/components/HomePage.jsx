import CategoryFiltering from "./categoryFiltering";
import VideoList from "./VideoList";
import { useState } from "react";

function HomePage() {

    const videos = [
        {
            _id: "video01",
            title: "Learn React in 30 Minutes",
            thumbnailUrl: "https://picsum.photos/seed/react/500/280",
            description: "A quick tutorial to get started with React.",
            channelName: "Code With John",
            views: 15200,
            category: "Programming",
            uploadDate: "2024-09-20"
        },
        {
            _id: "video02",
            title: "JavaScript Full Course",
            thumbnailUrl: "https://picsum.photos/seed/javascript/500/280",
            description: "Learn JavaScript from beginner to advanced.",
            channelName: "Programming Hub",
            views: 45200,
            category: "Programming",
            uploadDate: "2024-09-18"
        },
        {
            _id: "video03",
            title: "Top Music Hits 2024",
            thumbnailUrl: "https://picsum.photos/seed/music/500/280",
            description: "Best music collection.",
            channelName: "Music World",
            views: 120000,
            category: "Music",
            uploadDate: "2024-09-15"
        },
        {
            _id: "video04",
            title: "Best Gaming Moments",
            thumbnailUrl: "https://picsum.photos/seed/gaming/500/280",
            description: "Amazing gaming moments.",
            channelName: "Game Zone",
            views: 85000,
            category: "Gaming",
            uploadDate: "2024-09-12"
        },
        {
            _id: "video05",
            title: "Learn Python From Scratch",
            thumbnailUrl: "https://picsum.photos/seed/python/500/280",
            description: "Complete Python tutorial.",
            channelName: "Code Academy",
            views: 67000,
            category: "Education",
            uploadDate: "2024-09-10"
        },
        {
            _id: "video06",
            title: "Latest Technology Trends",
            thumbnailUrl: "https://picsum.photos/seed/technology/500/280",
            description: "Latest developments in technology.",
            channelName: "Tech World",
            views: 34000,
            category: "Technology",
            uploadDate: "2024-09-08"
        },
        {
            _id: "video07",
            title: "Latest World News",
            thumbnailUrl: "https://picsum.photos/seed/news/500/280",
            description: "Today's latest news.",
            channelName: "News Today",
            views: 90000,
            category: "News",
            uploadDate: "2024-09-05"
        },
        {
            _id: "video08",
            title: "React Router Tutorial",
            thumbnailUrl: "https://picsum.photos/seed/router/500/280",
            description: "Learn React Router.",
            channelName: "Frontend Masters",
            views: 28000,
            category: "Programming",
            uploadDate: "2024-09-01"
        }
    ]

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