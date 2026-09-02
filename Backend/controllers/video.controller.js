import VideoModel from '../models/video.model.js'

async function readVideo(req, res) {
    try {
        const allVideos = await VideoModel.find()
        return res.status(200).json(allVideos)
    }
    catch (err) {
        return res.status(500).json({ msg: 'Error while fetching videos' })
    }
}

async function readVideoById(req, res) {
    try {
        const filteredVideo = await VideoModel.findById(req.params.id)

        if (!filteredVideo) {
            return res.status(404).json({ msg: "Video doesn't exist" })
        }
        return res.status(200).json(filteredVideo)
    }
    catch (err) {
        return res.status(500).json({ msg: 'Error while fetching video' })
    }
}

async function updateVideo(req, res) {
    try {
        const { id } = req.params
        const { title, description, thumbnailUrl, videoUrl, category, channelId } = req.body
        const updatedVideo = await VideoModel.findByIdAndUpdate(id, { title, description, thumbnailUrl, videoUrl, category, channelId }, { new: true })

        if (!updatedVideo) {
            return res.status(404).json({ msg: "Video doesn't exist" })
        }
        return res.status(200).json(updatedVideo)

    } catch (er) {
        return res.status(500).json({ msg: 'Error while updating video' })
    }
}

async function removeVideo(req, res) {
    try {
        const { id } = req.params

        const video = await VideoModel.findById(id)
        if (!video) {
            return res.status(404).json({ msg: "Video doesn't exist" })
        }

        await VideoModel.findByIdAndDelete(id)

        return res.status(200).json({ msg: "Video is removed" })

    } catch (er) {
        return res.status(500).json({ msg: er.message })
    }
}

async function likeVideo(req, res) {
    try {
        const { id } = req.params
        const video = await VideoModel.findById(id)
        if (!video) {
            return res.status(404).json({ msg: "Video doesn't exist" })
        }
        const uploader = req.user._id.toString()
        const liked = video.likes.some((id) => id.toString() == uploader)
        if (liked) {
            video.likes = video.likes.filter((id) => id.toString() != uploader)
        } else {
            video.likes.push(uploader);
            video.dislikes = video.dislikes.filter((id) => id.toString() != uploader)
        }

        await video.save()
        return res.status(200).json({ likes: video.likes.length, dislikes: video.dislikes.length })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

async function dislikeVideo(req, res) {
    try {
        const { id } = req.params
        const video = await VideoModel.findById(id)
        if (!video) {
            return res.status(404).json({ msg: "Video doesn't exist" })
        }
        const uploader = req.user._id.toString()
        const disliked = video.dislikes.some((id) => id.toString() == uploader)
        if (disliked) {
            video.dislikes = video.dislikes.filter((id) => id.toString() != uploader)
        } else {
            video.dislikes.push(uploader)
            video.likes = video.likes.filter((id) => id.toString() != uploader)
        }
        await video.save()
        return res.status(200).json({ likes: video.likes.length, dislikes: video.dislikes.length })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

export { readVideo, readVideoById, updateVideo, removeVideo, likeVideo, dislikeVideo }