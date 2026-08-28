import React, { useState } from "react";
import { useNavigate, useParams } from "react-router"
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi"
import { MdKeyboardReturn } from "react-icons/md"
import videos from "../utilis/mockData"

function Channel() {

    const { id } = useParams();
    const navigate = useNavigate();

    const channels = [
        {
            _id: "channel01",
            channelName: "Code With John",
            owner: "user01",
            description:
                "Coding tutorials and technology videos.",
            channelBanner:
                "https://picsum.photos/seed/banner/1200/300",
            avatar:
                "https://picsum.photos/seed/avatar/150/150",
            subscribers: 5200
        },
        {
            _id: "channel02",
            channelName: "Tech World",
            owner: "user02",
            description:
                "Latest technology news, reviews and tutorials.",
            channelBanner:
                "https://picsum.photos/seed/techbanner/1200/300",
            avatar:
                "https://picsum.photos/seed/techavatar/150/150",
            subscribers: 8300
        }
    ]

    const channel = channels.find(
        (channel) => channel._id === id
    )

    const channelVideos = videos.filter(
        (video) => video.channelId === id
    )

    // const isOwner = true
    const isOwner = false

    function handleDelete(videoId) {
        console.log("Delete video:", videoId);
    };

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
            <div className="w-full h-40 overflow-hidden">
                <img src={channel.channelBanner} alt={`${channel.channelName} banner`} className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center gap-5 py-6 border-b">
                    <img src={channel.avatar} alt={channel.channelName} className="w-20 h-20  rounded-full object-cover" />
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold">{channel.channelName}</h1>
                        <p className="text-sm mt-1">
                            {channel.subscribers.toString() || 0}{" "}
                            subscribers
                        </p>
                        <p className="text-sm 700 mt-3 max-w-2xl">{channel.description}</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 py-4 border-b">
                    <button className="font-semibold border-b-2  pb-3">Videos</button>
                    <button className="pb-3 ">About</button>
                </div>
                <section className="py-6">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-2xl font-bold">Videos</h2>
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
                        <div className="grid grid-cols-4 gap-5">
                            {channelVideos.map((video) => (
                                <div key={video._id} onClick={() => navigate(`/videoplayer/${video._id}`)}>
                                    <div className="relative cursor-pointer">
                                        <img src={video.thumbnailUrl} className="w-full aspect-video object-cover rounded-xl" />
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="font-semibold text-sm line-clamp-2 cursor-pointer">{video.title}</h3>
                                        <p className="text-sm mt-2">{video.views.toString() || 0}{" "}views</p>
                                        <p className="text-sm">{video.category}</p>
                                        {isOwner && (
                                            <div className="flex gap-3 mt-3">
                                                <button className="flex items-center gap-1 px-3 py-1 border rounded-md text-sm">
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