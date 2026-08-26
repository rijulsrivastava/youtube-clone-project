import Video from "./Video"

function VideoList({ videos }) {
    return (
        <div className="grid grid-cols-3 gap-5">
            {videos.map((video) => (
                <Video key={video._id} video={video} />
            ))}
        </div>
    )
}

export default VideoList