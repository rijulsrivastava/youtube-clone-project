import mongoose from "mongoose"
// to define schema for user
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
        // to get channel belong to the user
        channelId: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
            ref: "Channel"
        }
    },
    { timestamps: true }
)


// to create model for use
const User = mongoose.model("User", userSchema)

export default User