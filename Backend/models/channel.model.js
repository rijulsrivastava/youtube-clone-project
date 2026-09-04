import mongoose from "mongoose"
const channelSchema = new mongoose.Schema( //to define schema for channel
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
        // below is to get owner of the channel
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            unique: true,
            required: true,
            ref: "User"
        }
    },
    { timestamps: true }
)
const Channel = mongoose.model("Channel", channelSchema) // to create model for channel
export default Channel