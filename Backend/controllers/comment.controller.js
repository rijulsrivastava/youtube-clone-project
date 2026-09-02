import Comment from "../models/comment.model.js"
import Video from "../models/video.model.js"

async function createComment(req, res) {
    try {
        const { videoId, text } = req.body;
        if (!videoId || !text || text.trim() == "") {
            return res.status(400).json({ msg: "All fields are required" })
        }
        const video = await Video.findById(videoId);
        if (!video) {
            return res.status(404).json({ msg: "Video does not exist" })
        }
        const comment = await Comment.create({
            videoId,
            userId: req.user._id,
            text: text.trim()
        })
        const newComment = await Comment.findById(comment._id).populate("userId", "username")
        res.status(201).json(newComment)

    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Error while creating comment" })
    }
}

async function updateComment(req, res) {
    try {
        const { id } = req.params
        const comment = await Comment.findById(id)
        const { text } = req.body
        if (!comment) {
            return res.status(404).json({ msg: "Comment does not exist" })
        }
        if (!text || text.trim() == "") {
            return res.status(400).json({ msg: "Add comment to update" })
        }
        comment.text = text.trim()
        await comment.save()
        const updatedComment = await Comment.findById(comment._id).populate("userId", "username")
        res.status(200).json(updatedComment)

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error while updating comment" });
    }
}

async function removeComment(req, res) {
    try {
        const { id } = req.params
        const comment = await Comment.findById(id)
        if (!comment) {
            return res.status(404).json({ msg: "Comment does not exist" })
        }
        await comment.deleteOne()
        res.status(200).json({ message: "Comment deleted successfully" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Error while deleting comment" })
    }
}

export { createComment, updateComment, removeComment }
