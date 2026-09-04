import React, { useState } from "react"
import { useNavigate, useOutletContext } from "react-router"
import axios from "axios"

function CreateVideo() {
    const navigate = useNavigate()
    const { user } = useOutletContext()
    const [form, setForm] = useState({
        title: "",
        description: "",
        videoUrl: "",
        thumbnailUrl: "",
        category: ""
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const categories = [
        "News",
        "Music",
        "Gaming",
        "Technology",
        "Education",
        "Programming",
        "Entertainment",
        "Travel"
    ]
    // to update selected fields
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    // to validate input fields
    function validateForm() {
        if (!form.title.trim()) return "Enter video title"
        if (!form.description.trim()) return "Enter video description"
        if (!form.videoUrl.trim()) return "Enter video URL"
        if (!form.thumbnailUrl.trim()) return "Enter thumbnail URL"
        if (!form.category) return "Select video category"
        return null
    }
    // to create new video
    async function handleSubmit(e) {
        e.preventDefault()
        setError("")
        const validation = validateForm()
        if (validation) {
            setError(validation)
            return
        }
        // to ensure verified user is creating video
        if (!user) {
            navigate("/login")
            return
        }
        if (!user.channelId) {
            navigate("/createchannel")
            return
        }
        try {
            setLoading(true)
            const token = localStorage.getItem("token")
            const API = "http://localhost:5050/api/videos"
            // to send matadata for video to backend
            await axios.post(API, {
                title: form.title.trim(),
                description: form.description.trim(),
                videoUrl: form.videoUrl.trim(),
                thumbnailUrl: form.thumbnailUrl.trim(),
                category: form.category,
                channelId: user.channelId
            }, {
                headers: { Authorization: `JWT ${token}` }
            })
            navigate(`/channel/${user.channelId}`)
        } catch (err) {
            setError(err.response ? err.response.data.msg : err.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen flex justify-center px-4 py-8">
            <div className="w-full max-w-xl">
                <h1 className="text-3xl font-bold mb-6">Create Video</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Enter title" className="border border-gray-300 rounded-lg px-4 py-2" />
                    <textarea name="description" value={form.description} onChange={handleChange} placeholder="Enter description" className="border border-gray-300 rounded-lg px-4 py-2 min-h-28"></textarea>
                    <input type="text" name="videoUrl" value={form.videoUrl} onChange={handleChange} placeholder="Enter video link" className="border border-gray-300 rounded-lg px-4 py-2" />
                    <input type="text" name="thumbnailUrl" value={form.thumbnailUrl} onChange={handleChange} placeholder="Enter Thumbnail link" className="border border-gray-300 rounded-lg px-4 py-2" />
                    <select name="category" value={form.category} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2">
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex gap-3">
                        <button type="submit" disabled={loading} className="bg-black text-white px-5 py-2 rounded-lg">{loading ? "Creating..." : "Create Video"}</button>
                        <button type="button" onClick={() => navigate(`/channel/${user.channelId}`)} className="bg-gray-200 px-5 py-2 rounded-lg">Cancel</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default CreateVideo