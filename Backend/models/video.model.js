import mongoose from "mongoose"

const videoSchema = new mongoose.Schema(
    {
        videoUrl: {
            type: String,
            required: true,
            trim: true
        },
        thumbnailUrl: {
            type: String,
            required: true,
            trim: true
        },
        title: {
            type: String,
            required: true,
        },
        channelId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Channel",
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId
        }],
        dislikes: [{
            type: mongoose.Schema.Types.ObjectId
        }],
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: [
                "News",
                "Music",
                "Gaming",
                "Technology",
                "Education",
                "Programming"
            ]
        },
        uploader: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
    },
    { timestamps: true }
)

const Video = mongoose.model("Video", videoSchema)

export default Video

