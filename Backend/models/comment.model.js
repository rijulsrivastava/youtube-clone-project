import mongoose from "mongoose"
const commentSchema = new mongoose.Schema(
    {
        videoId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const Comment = mongoose.model("Comment", commentSchema)

export default Comment
