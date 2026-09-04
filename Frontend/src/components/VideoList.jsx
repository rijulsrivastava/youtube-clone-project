import Video from "./Video"

function VideoList({ videos }) {
    return (
        //to show videos in grid layout
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
            {videos.map((video) => (
                <Video key={video._id} video={video} />
            ))}
        </div>
    )
}

export default VideoList