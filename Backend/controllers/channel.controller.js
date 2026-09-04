import ChannelModel from "../models/channel.model.js"
import UserModel from "../models/user.model.js"
import VideoModel from "../models/video.model.js"

// to create new channel if user is authentic
async function createChannel(req, res) {
    try {
        const { channelName, description, channelBanner, avatar } = req.body
        // below is to validate fields
        if (!channelName || channelName.trim() == "" || !description || description.trim() == "") {
            return res.status(400).json({ msg: "Enter Channel name and description" })
        }
        //to check if channel exist
        const channelExist = await ChannelModel.findOne({ owner: req.user._id })
        if (channelExist) {
            return res.status(409).json({ msg: "Channel already exists" });
        }
        const channel = await ChannelModel.create({
            channelName: channelName.trim(),
            description: description.trim(),
            channelBanner: channelBanner ? channelBanner.trim() : "",
            avatar: avatar ? avatar.trim() : "",
            owner: req.user._id
        })
        //to store channel info
        await UserModel.findByIdAndUpdate(req.user._id, { channelId: channel._id })
        res.status(201).json(channel)
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Error while creating channel' })
    }
}
// to read channel with particular id
async function readChannelById(req, res) {
    try {
        const { id } = req.params
        // to get channel info and add owner info
        const channel = await ChannelModel.findById(id).populate("owner", "username")
        if (!channel) {
            return res.status(404).json({ msg: "Channel does not exist" })
        }
        // below is to fetch all the videos for this channel
        const videos = await VideoModel.find({ channelId: channel._id }).populate("channelId", "channelName avatar").populate("uploader", "username")
        res.status(200).json({ channel, videos })
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error while fetching channel' });
    }
}

export { createChannel, readChannelById }