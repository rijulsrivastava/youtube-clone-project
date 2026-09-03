import { useNavigate, useParams, useOutletContext } from "react-router";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi"
import { MdKeyboardReturn } from "react-icons/md"
import Comments from "./Comments";
import { useState, useEffect } from "react";
import useFetch from "../utilis/useFetch.js"
import axios from "axios"

function VideoPlayer() {

    const { id } = useParams()
    const navigate = useNavigate()
    const { user } = useOutletContext()

    const API = `http://localhost:5050/api/video/${id}`
    const { data: video, error, loading } = useFetch(API)
    const API_ALL = "http://localhost:5050/api/videos"
    const { data: allVideos } = useFetch(API_ALL)
    const suggestedVideos = allVideos.filter((video) => video._id != id)

    const [likeCount, setLikeCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)

    useEffect(() => {
        if (video) {
            setLikeCount((video.previousLikes || 0) + (video.likes ? video.likes.length : 0))
            setDislikeCount((video.previousDislikes || 0) + (video.dislikes ? video.dislikes.length : 0))
        }
    }, [video])
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error} while fetching video</h1>

    async function handleLike() {
        if (!user) {
            alert("Login to like the video")
            navigate("/login")
            return
        }
        try {
            const token = localStorage.getItem("token")
            const API_LIKE = `http://localhost:5050/api/video/${id}/like`

            const data = await axios.put(API_LIKE, {}, {
                headers: { Authorization: `JWT ${token}` }
            })
            setLikeCount(data.data.likes)
            setDislikeCount(data.data.dislikes)
        } catch (err) {
            console.log(err.response ? err.response.data.msg : err.message)
        }
    }

    async function handleDislike() {
        if (!user) {
            alert("Login to dislike the video")
            navigate("/login")
            return
        }
        try {
            const token = localStorage.getItem("token")
            const API_DISLIKE = `http://localhost:5050/api/video/${id}/dislike`
            const data = await axios.put(API_DISLIKE, {}, {
                headers: { Authorization: `JWT ${token}` }
            })
            setLikeCount(data.data.likes)
            setDislikeCount(data.data.dislikes)
        } catch (err) { console.log(err.response ? err.response.data.msg : err.message) }
    }

    if (!video) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="font-bold text-2xl">Video not found</h2>
                <p className="mt-1">Video can't be fetched</p>
                <button onClick={() => navigate("/")} className="flex items-center  font-bold gap-1 mt-5 px-5 py-2 border"> <MdKeyboardReturn /> HOME</button>
            </div>
        )
    }

    return (
        <div className="min-h-screen px-4 py-5 md:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex-1 min-w-0">
                    <div className="w-full aspect-video rounded-xl overflow-hidden">
                        {video.videoUrl ? (
                            < video src={video.videoUrl} poster={video.thumbnailUrl} controls className="w-full h-full object-contain" ></video>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <p>Video unavailable</p>
                            </div>
                        )}
                    </div>
                    <div className="mt-4 sm:mt-5">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{video.title}</h1>
                        <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p onClick={() => navigate(`/channel/${video.channelId._id}`)} className="text-lg font-bold cursor-pointer">{video.channelId ? video.channelId.channelName : "Sample Channel"}</p>
                                <p className="text-sm text-gray-500 mt-1"> {video.views ? video.views.toString() : 0} views</p>
                            </div>
                            <div className="flex items-center w-fit border border-gray-300 rounded-full overflow-hidden">
                                <button className="flex items-center gap-2 px-4 sm:px-5 py-2 hover:bg-gray-100 transition" onClick={handleLike}>
                                    <span className="text-lg">
                                        <BiSolidLike />
                                    </span>
                                    <span className="font-medium">{likeCount}</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 sm:px-5 py-2 border-l border-gray-300 hover:bg-gray-100 transition" onClick={handleDislike}>
                                    <span className="text-lg">
                                        <BiSolidDislike />
                                    </span>
                                    <span className="font-medium">{dislikeCount}</span>
                                </button>
                            </div>
                        </div>
                        <div className="mt-5 bg-gray-200 rounded-lg p-4 md:p-5">
                            <p className="font-bold mb-2">Description</p>
                            <p className="text-sm text-gray-700 whitespace-pre-line">{video.description || "No description available."}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Comments id={id} />
                    </div>
                </div>


                <div className="w-full lg:w-[340px] xl:w-[360px] lg:flex-shrink-0">
                    <h3 className="text-2xl font-bold mb-4">Suggested Videos</h3>
                    <div className="flex flex-col gap-4">
                        {suggestedVideos.map((suggestedVideo) => (
                            <div key={suggestedVideo._id} onClick={() => navigate(`/videoplayer/${suggestedVideo._id}`)} className="flex gap-3 rounded-xl p-1 hover:bg-gray-100 transition cursor-pointer">
                                <div className="w-[130px] sm:w-[150px] flex-shrink-0">
                                    <img src={suggestedVideo.thumbnailUrl} alt={suggestedVideo.title} className="w-full rounded-xl aspect-video object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-sm line-clamp-1">{suggestedVideo.title}</h3>
                                    <p className="text-xs mt-2">{suggestedVideo.channelId ? suggestedVideo.channelId.channelName : "Sample Channel"}</p>
                                    <p className="text-xs mt-1">
                                        {suggestedVideo.views
                                            ? suggestedVideo.views.toString()
                                            : 0}{" "}
                                        views
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div>
    )
}

export default VideoPlayer;