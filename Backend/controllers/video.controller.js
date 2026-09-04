import VideoModel from '../models/video.model.js'
// to create new video for a particular user
async function createVideo(req, res) {
    try {
        const { title, description, thumbnailUrl, videoUrl, category, channelId } = req.body
        // to validate input fields
        if (!title?.trim() || !description?.trim() || !thumbnailUrl?.trim() || !videoUrl?.trim() || !category || !channelId) {
            return res.status(400).json({ msg: "All fields are required" })
        }
        const video = await VideoModel.create({
            title: title.trim(),
            description: description.trim(),
            thumbnailUrl: thumbnailUrl.trim(),
            videoUrl: videoUrl.trim(),
            category,
            channelId,
            uploader: req.user._id
        })
        return res.status(201).json(video)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ msg: "Error while creating video" })
    }
}
//below is to read all videos
async function readVideo(req, res) {
    try {
        const allVideos = await VideoModel.find().populate("channelId", "channelName avatar").populate("uploader", "username")
        return res.status(200).json(allVideos)
    }
    catch (err) {
        return res.status(500).json({ msg: 'Error while fetching videos' })
    }
}
// to read video of a particular id
async function readVideoById(req, res) {
    try {
        const filteredVideo = await VideoModel.findById(req.params.id).populate("channelId", "channelName avatar").populate("uploader", "username")
        if (!filteredVideo) {
            return res.status(404).json({ msg: "Video doesn't exist" })
        }
        return res.status(200).json(filteredVideo)
    }
    catch (err) {
        return res.status(500).json({ msg: 'Error while fetching video' })
    }
}
// below functiion is used to update a paritcular video of a verified user
async function updateVideo(req, res) {
    try {
        const { id } = req.params
        const { title, description, thumbnailUrl, videoUrl, category, channelId } = req.body
        const video = await VideoModel.findById(id)
        if (!video) {
            return res.status(404).json({ msg: "Video doesn't exist" })
        }
        // to ensure only video belongs to verified user can be updated
        if (video.uploader.toString() != req.user._id.toString()) {
            return res.status(403).json({ msg: "Not authorized to update this video" })
        }
        const updatedVideo = await VideoModel.findByIdAndUpdate(id, { title, description, thumbnailUrl, videoUrl, category, channelId }, { new: true })
        return res.status(200).json(updatedVideo)

    } catch (err) {
        return res.status(500).json({ msg: 'Error while updating video' })
    }
}
// to remove a particular video belong to verified user
async function removeVideo(req, res) {
    try {
        const { id } = req.params

        const video = await VideoModel.findById(id)
        if (!video) {
            return res.status(404).json({ msg: "Video doesn't exist" })
        }
        if (video.uploader.toString() != req.user._id.toString()) {
            return res.status(403).json({ msg: "Not authorized to delete this video" })
        }
        await VideoModel.findByIdAndDelete(id)

        return res.status(200).json({ msg: "Video is removed" })

    } catch (er) {
        return res.status(500).json({ msg: er.message })
    }
}
// to update like of a video
async function likeVideo(req, res) {
    try {
        const { id } = req.params
        const video = await VideoModel.findById(id)
        if (!video) {
            return res.status(404).json({ msg: "Video doesn't exist" })
        }
        const uploader = req.user._id.toString()
        // to know if user had liked the video
        const liked = video.likes.some((id) => id.toString() == uploader)
        if (liked) {
            //if liked and clicked then it will be unliked
            video.likes = video.likes.filter((id) => id.toString() != uploader)
        } else {
            // if not liked then it will be liked and if user had disliked then it will remove disliked
            video.likes.push(uploader);
            video.dislikes = video.dislikes.filter((id) => id.toString() != uploader)
        }

        await video.save()
        return res.status(200).json({ likes: video.previousLikes + video.likes.length, dislikes: video.previousDislikes + video.dislikes.length })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
// to update dislike of a video
async function dislikeVideo(req, res) {
    try {
        const { id } = req.params
        const video = await VideoModel.findById(id)
        if (!video) {
            return res.status(404).json({ msg: "Video doesn't exist" })
        }
        const uploader = req.user._id.toString()
        // to know if user had disliked the video
        const disliked = video.dislikes.some((id) => id.toString() == uploader)
        if (disliked) {
            //if disliked and clicked then it will remove disliked
            video.dislikes = video.dislikes.filter((id) => id.toString() != uploader)
        } else {
            // if not disliked then it will be disliked and if user had liked then it will remove liked
            video.dislikes.push(uploader)
            video.likes = video.likes.filter((id) => id.toString() != uploader)
        }
        await video.save()
        return res.status(200).json({ likes: video.previousLikes + video.likes.length, dislikes: video.previousDislikes + video.dislikes.length })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

export { readVideo, readVideoById, updateVideo, removeVideo, likeVideo, dislikeVideo, createVideo }