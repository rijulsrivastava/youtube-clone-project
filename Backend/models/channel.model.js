import mongoose from "mongoose"
const channelSchema = new mongoose.Schema(
    {
        channelName: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        channelBanner: {
            type: String,
            trim: true
        },
        avatar: {
            type: String,
            trim: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            unique: true,
            required: true
        }
    },
    { timestamps: true }
)
const Channel = mongoose.model("Channel", channelSchema)
export default Channel