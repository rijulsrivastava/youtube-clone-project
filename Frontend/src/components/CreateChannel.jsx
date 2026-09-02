import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router"
import channels from "../utilis/mockChannelData";

function CreateChannel() {

    const navigate = useNavigate()
    const { user, setUser } = useOutletContext();
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
            const updatedUser = { ...user, channelId: createdChannel._id }
            localStorage.setItem("demo-user", JSON.stringify(updatedUser))
            setUser(updatedUser)
            navigate(`/channel/${createdChannel._id}`)

        } catch (err) {
            console.error(err)
            setError(err.message)

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-6 sm:py-8">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl p-4 sm:p-6 md:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold">Create Channel</h1>
                <p className="mt-2 mb-6 text-sm sm:text-base">To upload and manage videos create channel</p>
                {error && (<div className="mb-5 px-4 py-3 text-sm text-center text-red-700 bg-red-100 border border-red-300 rounded-lg">{error}</div>)}
                <div className="mb-5">
                    <label className="block text-sm font-semibold mb-2"> Channel Name</label>
                    <input type="text" name="channelName" value={form.channelName} onChange={handleChange} placeholder="Enter channel name" className="w-full px-4 py-3 border-gray-300 rounded-lg outline-none border" />
                </div>
                <div className="mb-5">
                    <label className="block text-sm font-semibold mb-2">Description</label>
                    <textarea name="description" value={form.description} onChange={handleChange} placeholder="enter description" rows="5" className="w-full px-4 py-3 border-gray-300 rounded-lg outline-none border" />
                </div>
                <div className="mb-5">
                    <label className="block text-sm font-semibold mb-2">Channel Banner URL</label>
                    <input type="url" name="channelBanner" value={form.channelBanner} onChange={handleChange} placeholder="https://abc.com/xyz.jpg" className="w-full px-4 py-3 border-gray-300 rounded-lg outline-none border" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-semibold  mb-2">Channel Avatar URL</label>
                    <input type="url" name="avatar" value={form.avatar} onChange={handleChange} placeholder="https://abc.com/xyz.jpg" className="w-full px-4 py-3 border-gray-300 rounded-lg outline-none border" />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <button type="submit" disabled={loading} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition disabled:cursor-not-allowed disabled:bg-green-400">
                        {loading
                            ? "Creating Channel..."
                            : "Create Channel"}
                    </button>
                    <button type="button" onClick={() => navigate("/")} className="flex-1 border border-gray-300 font-semibold py-3 rounded-lg hover:bg-gray-100 transition">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default CreateChannel