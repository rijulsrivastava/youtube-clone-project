import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
// import videos from "../utilis/mockData";
import axios from "axios"
import useFetch from "../utilis/useFetch.js"

function EditVideo() {

    const { id } = useParams()
    const navigate = useNavigate()
    const API = `http://localhost:5050/api/video/${id}`
    const { data: video, loading, error: err } = useFetch(API)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState("")

    const [form, setForm] = useState({
        title: "",
        description: "",
        videoUrl: "",
        thumbnailUrl: "",
        category: ""
    });

    const categories = [
        "Programming",
        "Music",
        "Gaming",
        "Education",
        "Technology",
        "News",
        "Entertainment",
        "Travel"
    ]
    useEffect(() => {
        if (video && video._id) {
            setForm({
                title: video.title || "",
                description: video.description || "",
                videoUrl: video.videoUrl || "",
                thumbnailUrl: video.thumbnailUrl || "",
                category: video.category || ""
            })
        }
    }, [video])

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function validate() {
        if (!form.title.trim()) {
            return "Enter title"
        }
        if (!form.description.trim()) {
            return "Enter description"
        }
        if (!form.videoUrl.trim()) {
            return "Enter URL"
        }
        if (!form.thumbnailUrl.trim()) {
            return "Enter Thumbnail URL"
        }
        if (!form.category) {
            return "Please select a category."
        }
        return null
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError("")
        const validation = validate()
        if (validation) {
            setError(validation)
            return
        }
        try {
            setSaving(true)
            const token = localStorage.getItem("token")
            await axios.put(`http://localhost:5050/api/video/${id}`, {
                title: form.title.trim(),
                description: form.description.trim(),
                videoUrl: form.videoUrl.trim(),
                thumbnailUrl: form.thumbnailUrl.trim(),
                category: form.category,
                channelId: video.channelId._id
            }, {
                headers: { Authorization: `JWT ${token}` }
            })
            navigate(`/channel/${video.channelId._id}`)
        } catch (err) {
            setError(err.response ? err.response.data.msg : err.message)
        } finally {
            setSaving(false)
        }
    }
    if (loading) {
        return (
            <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
                <p>Loading video...</p>
            </div>
        )
    }
    if (err) {
        return <h1>{err} while fetching video</h1>
    }
    return (
        <div className="min-h-[calc(100vh-64px)] px-4 py-6 sm:py-8">
            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="border border-gray-300 rounded-2xl shadow-md p-4 sm:p-6 md:p-8">
                    <h1 className="text-2xl sm:text-3xl font-bold">Edit Video</h1>
                    <p className="mt-2 mb-6 text-sm sm:text-base">Update video content</p>
                    {error && (
                        <div className="mb-5 px-4 py-3 text-center text-sm  text-red-700 bg-red-100 border border-red-300 rounded-lg">
                            {error}
                        </div>
                    )}
                    <div className="mb-5">
                        <label className="block text-sm font-semibold mb-2">Video Title</label>
                        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Enter video title" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-semibold mb-2">Description</label>
                        <textarea name="description" value={form.description} onChange={handleChange} rows="5" placeholder="Enter video description" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-semibold mb-2">Video URL</label>
                        <input type="url" name="videoUrl" value={form.videoUrl} onChange={handleChange} placeholder="https://abc.com/xyz.mp4" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-semibold mb-2">Thumbnail URL</label>
                        <input type="url" name="thumbnailUrl" value={form.thumbnailUrl} onChange={handleChange} placeholder="https://abc.com/xyz.jpg" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2">Category</label>
                        <select name="category" value={form.category} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none">
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button disabled={saving} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition disabled:cursor-not-allowed disabled:bg-green-400">
                            {saving
                                ? "Saving Changes..."
                                : "Save Changes"}
                        </button>
                        <button type="button" onClick={() => navigate('/')} className="flex-1 border border-gray-300 font-bold py-3 rounded-lg hover:bg-gray-100 transition">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditVideo;