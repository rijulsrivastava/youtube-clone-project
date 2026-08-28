import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { useNavigate } from 'react-router'

function Video({ video }) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/videoplayer/${video._id}`)
    }

    return (
        <div className='border' onClick={handleClick}>
            <img src={video.thumbnailUrl} alt={video.title} />
            <div className='flex justify-between items-center mx-2'>
                <div>
                    <h3 className='text-xl font-bold'> {video.title} </h3>
                    <p> {video.channelName || "YouTube Channel"} </p>
                    <p >{video.views || 0} views</p>
                </div>
                <FaEllipsisV />
            </div>
        </div>
    );
}

export default Video