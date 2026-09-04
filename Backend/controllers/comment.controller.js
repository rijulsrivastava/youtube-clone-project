import CommentModel from "../models/comment.model.js"
import VideoModel from "../models/video.model.js"
//below function is to read comments for a video
async function readComment(req, res) {
    try {
        const { videoId } = req.params
        // to get chamments and add username for the comment
        const comments = await CommentModel.find({ videoId }).populate("userId", "username")
        return res.status(200).json(comments)
    } catch (err) {
        return res.status(500).json({ msg: "Error while fetching comments" })
    }
}
// below function is used to add new comments
async function createComment(req, res) {
    try {
        const { videoId, text } = req.body;
        //to validate fields
        if (!videoId || !text || text.trim() == "") {
            return res.status(400).json({ msg: "All fields are required" })
        }
        //to check if video exists or not
        const video = await VideoModel.findById(videoId);
        if (!video) {
            return res.status(404).json({ msg: "Video does not exist" })
        }
        const comment = await CommentModel.create({
            videoId,
            userId: req.user._id,
            text: text.trim()
        })
        // below is to create new comment by the user   
        const newComment = await CommentModel.findById(comment._id).populate("userId", "username")
        res.status(201).json(newComment)

    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Error while creating comment" })
    }
}
//below is used to update existing comment of an user
async function updateComment(req, res) {
    try {
        const { id } = req.params
        const comment = await CommentModel.findById(id)
        const { text } = req.body
        if (!comment) {
            return res.status(404).json({ msg: "Comment does not exist" })
        }
        //to ensure that comments are the ones belongs to the user
        if (comment.userId.toString() != req.user._id.toString()) {
            return res.status(403).json({ msg: "Not authorized to update comment" })
        }
        if (!text || text.trim() == "") { // this it to avoid storing empty comments
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
//below is to remove comments of a user
async function removeComment(req, res) {
    try {
        const { id } = req.params
        const comment = await CommentModel.findById(id)
        if (!comment) {
            return res.status(404).json({ msg: "Comment does not exist" })
        }
        //to ensure that comments are the ones belongs to the user
        if (comment.userId.toString() != req.user._id.toString()) {
            return res.status(403).json({ msg: "Not authorized to delete comment" })
        }
        await comment.deleteOne()
        res.status(200).json({ message: "Comment deleted successfully" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Error while deleting comment" })
    }
}

export { createComment, updateComment, removeComment, readComment }
