import CommentModel from "../models/comment.model.js"
import VideoModel from "../models/video.model.js"

async function createComment(req, res) {
    try {
        const { videoId, text } = req.body;
        if (!videoId || !text || text.trim() == "") {
            return res.status(400).json({ msg: "All fields are required" })
        }
        const video = await VideoModel.findById(videoId);
        if (!video) {
            return res.status(404).json({ msg: "VideoModel does not exist" })
        }
        const comment = await CommentModel.create({
            videoId,
            userId: req.user._id,
            text: text.trim()
        })
        const newComment = await CommentModel.findById(comment._id).populate("userId", "username")
        res.status(201).json(newComment)

    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Error while creating comment" })
    }
}

async function updateComment(req, res) {
    try {
        const { id } = req.params
        const comment = await CommentModel.findById(id)
        const { text } = req.body
        if (!comment) {
            return res.status(404).json({ msg: "CommentModel does not exist" })
        }
        if (!text || text.trim() == "") {
            return res.status(400).json({ msg: "Add comment to update" })
        }
        comment.text = text.trim()
        await comment.save()
        const updatedComment = await CommentModel.findById(comment._id).populate("userId", "username")
        res.status(200).json(updatedComment)

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error while updating comment" });
    }
}

async function removeComment(req, res) {
    try {
        const { id } = req.params
        const comment = await CommentModel.findById(id)
        if (!comment) {
            return res.status(404).json({ msg: "CommentModel does not exist" })
        }
        await comment.deleteOne()
        res.status(200).json({ message: "CommentModel deleted successfully" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Error while deleting comment" })
    }
}

export { createComment, updateComment, removeComment }
