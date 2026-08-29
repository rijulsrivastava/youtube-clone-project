import React, { useState } from "react";
import { useNavigate } from "react-router"
import channels from "../utilis/mockChannelData";

function CreateChannel() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        channelName: "",
        description: "",
        channelBanner: "",
        avatar: ""
    })

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function validateForm() {
        if (!form.channelName.trim()) {
            return "Enter channel name"
        }
        if (!form.description.trim()) {
            return "Enter description"
        }
        return null
    }

    function handleSubmit(e) {
        e.preventDefault()
        setError("")

        const validation = validateForm()

        if (validation) {
            setError(validation)
            return
        }

        try {
            setLoading(true);
            const createdChannel = {
                _id: `channel${Date.now()}`,
                channelName: form.channelName.trim(),
                description: form.description.trim(),
                channelBanner: form.channelBanner.trim(),
                avatar: form.avatar.trim()
            }

            console.log(createdChannel)
            channels.push(createdChannel)
            //////////////////
            navigate(`/channel/${createdChannel._id}`)

        } catch (err) {
            console.error(err)
            setError(err.message)

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-8">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl p-6 md:p-8">
                <h1 className="text-3xl font-bold">Create Channel</h1>
                <p className="mt-2 mb-6">To upload and manage videos create channel</p>
                {error && (<div className="mb-5 px-4 py-3 text-sm">{error}</div>)}
                <div className="mb-5">
                    <label className="block text-sm font-semibold mb-2"> Channel Name</label>
                    <input type="text" name="channelName" value={form.channelName} onChange={handleChange} placeholder="Enter channel name" className="w-full px-4 py-3 border" />
                </div>
                <div className="mb-5">
                    <label className="block text-sm font-semibold mb-2">Description</label>
                    <textarea name="description" value={form.description} onChange={handleChange} placeholder="enter description" rows="5" className="w-full px-4 py-3 border" />
                </div>
                <div className="mb-5">
                    <label className="block text-sm font-semibold mb-2">Channel Banner URL</label>
                    <input type="url" name="channelBanner" value={form.channelBanner} onChange={handleChange} placeholder="https://abc.com/xyz.jpg" className="w-full px-4 py-3 border" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-semibold  mb-2">Channel Avatar URL</label>
                    <input type="url" name="avatar" value={form.avatar} onChange={handleChange} placeholder="https://abc.com/xyz.jpg" className="w-full px-4 py-3 border" />
                </div>
                <div className="flex flex-col gap-3">
                    <button type="submit" disabled={loading} className="flex-1 font-semibold py-3 border disabled:cursor-not-allowed">
                        {loading
                            ? "Creating Channel..."
                            : "Create Channel"}
                    </button>
                    <button type="button" onClick={() => navigate("/")} className="flex-1 border font-semibold py-3">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default CreateChannel