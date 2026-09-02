import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            minlength: 10,
            required: true
        },
        channelId: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
            ref: "Channel"
        }
    },
    { timestamps: true }
)



const User = mongoose.model("User", userSchema)

export default User