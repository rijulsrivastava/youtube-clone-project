import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { useNavigate } from 'react-router'

function Video({ video }) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/videoplayer/${video._id}`)
    }

    return (
        <div>
            <div className="w-full aspect-video overflow-hidden rounded-lg bg-gray-300">
                <img className='w-full h-full object-cover cursor-pointer' onClick={handleClick} src={video.thumbnailUrl} alt={video.title} />
            </div>
            <div className='flex justify-between gap-2 items-center mx-2'>
                <div className="flex flex-col justify-between">
                    <h3 className='text-md font-bold line-clamp-1  cursor-pointer' onClick={handleClick} > {video.title} </h3>
                    <p className='text-sm'> {video.channelName || video.channelId || "YouTube Channel"} </p>
                    <p className='text-sm'>{video.views || 0} views</p>
                </div>
                <FaEllipsisV />
            </div>
        </div >
    );
}

export default Video