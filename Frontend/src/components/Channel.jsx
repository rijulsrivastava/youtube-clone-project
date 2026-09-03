// import React, { useState } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router"
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi"
import { MdKeyboardReturn } from "react-icons/md"
// import videos from "../utilis/mockData"
// import channels from "../utilis/mockChannelData";
import useFetch from '../utilis/useFetch.js'
import axios from "axios"

function Channel() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useOutletContext()

    const API = `http://localhost:5050/api/channels/${id}`
    const { data, setData, loading, error } = useFetch(API)

    const channel = data.channel
    const channelVideos = data.videos || []

    const isOwner = user && channel && channel.owner && channel.owner._id == user.id

    async function handleDelete(videoId) {
        try {
            const token = localStorage.getItem("token")
            await axios.delete(`http://localhost:5050/api/video/${videoId}`, { headers: { Authorization: `JWT ${token}` } })
            setData((prevData) => ({ ...prevData, videos: prevData.videos.filter((video) => video._id !== videoId) }))
        } catch (err) {
            console.log(err.response ? err.response.data.msg : err.message)
        }
    }

    function handleEdit(videoId) {
        navigate(`/editvideo/${videoId}`)
    }
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error} while fetching channel</h1>
    if (!channel) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold">Channel not exist</h2>
                <p className="text-gray-500 mt-2">Cannot find the channel</p>
                <button onClick={() => navigate("/")} className="flex items-center gap-1 mt-5 px-5 py-2 border ">
                    <MdKeyboardReturn />
                    HOME
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="w-full h-32 sm:h-40 md:h-48 overflow-hidden">
                <img src={channel.channelBanner} alt={`${channel.channelName} banner`} className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5 py-5 md:py-6 border-b">
                    <img src={channel.avatar} alt={channel.channelName} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold">{channel.channelName}</h1>
                        <p className="text-sm mt-1">
                            {(channel.subscribers || 0).toString()} subscribers
                        </p>
                        <p className="text-sm mt-3 max-w-2xl">{channel.description}</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 sm:gap-6 py-4 border-b">
                    <button className="font-semibold border-b-2  pb-3">Videos</button>
                    <button className="pb-3 ">About</button>
                </div>
                <section className="py-6">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-xl sm:text-2xl font-bold">Videos</h2>
                        {isOwner && (
                            <span className="text-sm">
                                {channelVideos.length} videos
                            </span>
                        )}

                    </div>

                    {channelVideos.length === 0 ? (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-semibold">No videos</h3>
                            {isOwner && (
                                <p className="mt-2">Add videos to show</p>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {channelVideos.map((video) => (
                                <div key={video._id}>
                                    <div className="relative cursor-pointer" onClick={() => navigate(`/videoplayer/${video._id}`)}>
                                        <img src={video.thumbnailUrl} className="w-full aspect-video object-cover rounded-xl" />
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="font-semibold text-sm line-clamp-2 cursor-pointer" onClick={() => navigate(`/videoplayer/${video._id}`)}>{video.title}</h3>
                                        <p className="text-sm mt-2">{video.views.toString() || 0}{" "}views</p>
                                        <p className="text-sm">{video.category}</p>
                                        {isOwner && (
                                            <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                                                <button className="flex items-center gap-1 px-3 py-1 border rounded-md text-sm" onClick={() => handleEdit(video._id)}>
                                                    <BiSolidEdit />
                                                    Edit
                                                </button>
                                                <button onClick={() => handleDelete(video._id)} className="flex items-center gap-1 px-3 py-1.5 border rounded-md text-sm">
                                                    <BiSolidTrash />
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}

export default Channel