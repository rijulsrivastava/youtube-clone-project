import React from "react";
import { useNavigate, useParams } from "react-router";
import videos from "../utilis/mockData";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi"
import { MdKeyboardReturn } from "react-icons/md"

function VideoPlayer() {

    const { id } = useParams();
    const navigate = useNavigate();
    const video = videos.find((video) => video._id == id)
    console.log(video)

    const suggestedVideos = videos.filter((video) => video._id != id)

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
        <div className="flex min-h-screen gap-5 px-4 py-6 md:px-8">
            <div className="max-w-8xl flex-1 mx-auto">
                <div className="w-full aspect-video">
                    {video.videoUrl ? (
                        < video src={video.videoUrl} poster={video.thumbnailUrl} controls className="w-full h-full object-contain" ></video>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <p>Video unavailable</p>
                        </div>
                    )}
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl font-bold">{video.title}</h1>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
                        <div>
                            <p className="text-lg font-bold">{video.channelName || "Sample Channel"}</p>
                            <p className="text-sm text-gray-500 mt-1"> {video.views ? video.views.toString() : 0} views</p>
                        </div>
                        <div className="flex items-center">
                            <button className="flex items-center gap-2 px-5 py-2 border">
                                <span className="text-lg">
                                    <BiSolidLike />
                                </span>
                                <span className="font-medium">
                                    {Array.isArray(video.likes)
                                        ? video.likes.length
                                        : video.likes || 0}
                                </span>
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2 border">
                                <span className="text-lg">
                                    <BiSolidDislike />
                                </span>
                                <span className="font-medium">
                                    {Array.isArray(video.dislikes)
                                        ? video.dislikes.length
                                        : video.dislikes || 0}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 border p-4">
                        <p className="font-bold mb-2">Description</p>
                        <p className="text-sm text-gray-700 whitespace-pre-line">{video.description || "No description available."}</p>
                    </div>
                </div>

                <div className="mt-8">
                    Comments
                </div>
            </div>


            <div className="w-[360px]">
                <h3 className="text-2xl font-bold mb-4">Suggested Videos</h3>
                <div className="flex flex-col gap-4">
                    {suggestedVideos.map((suggestedVideo) => (
                        <div key={suggestedVideo._id} onClick={() => navigate(`/watch/${suggestedVideo._id}`)} className="flex gap-3 cursor-pointer">
                            <div className="w-[150px] flex-shrink-0">
                                <img src={suggestedVideo.thumbnailUrl} alt={suggestedVideo.title} className="w-full aspect-video object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-sm ">{suggestedVideo.title}</h3>
                                <p className="text-xs mt-2">{suggestedVideo.channelName || "Sample Channel"}</p>
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
    )
}

export default VideoPlayer;