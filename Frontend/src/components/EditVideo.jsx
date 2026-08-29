import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import videos from "../utilis/mockData";

function EditVideo() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
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
        "News"
    ];

    const video = videos.find((video) => video._id == id)

    useEffect(() => {
        if (video) {
            setForm({
                _id: video._id,
                title: video.title || "",
                description: video.description || "",
                videoUrl: video.videoUrl || "",
                thumbnailUrl: video.thumbnailUrl || "",
                category: video.category || ""
            })
        }
        setLoading(false);
    }, [id])

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

    function handleSubmit(e) {
        e.preventDefault()
        setError("")

        const validation = validate()
        if (validation) {
            setError(validation)
            return
        }
        try {
            setSaving(true)
            const index = videos.findIndex((video) => video._id == id)
            if (index === -1) {
                throw new Error("Video does not exist")
            }
            videos[index] = {
                ...videos[index],
                title: form.title.trim(),
                description: form.description.trim(),
                videoUrl: form.videoUrl.trim(),
                thumbnailUrl: form.thumbnailUrl.trim(),
                category: form.category
            }

            console.log(videos[index])

            if (videos[index].channelId?._id) {
                navigate(`/channel/${videos[index].channelId._id}`)
            } else if (videos[index].channelId) {
                navigate(`/channel/${videos[index].channelId}`)
            } else {
                navigate("/")
            }

        } catch (err) {
            console.error(err)
            setError(err.message)
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

    return (
        <div className="min-h-[calc(100vh-64px)] px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="border p-6">
                    <h1 className="text-3xl font-bold">Edit Video</h1>
                    <p className="mt-2 mb-6">Update video content</p>
                    {error && (
                        <div className="mb-5 px-4 py-3">
                            {error}
                        </div>
                    )}
                    <div className="mb-5">
                        <label className="block text-sm font-semibold mb-2">Video Title</label>
                        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Enter video title" className="w-full px-4 py-3 border" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-semibold mb-2">Description</label>
                        <textarea name="description" value={form.description} onChange={handleChange} rows="5" placeholder="Enter video description" className="w-full px-4 py-3 border" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-semibold mb-2">Video URL</label>
                        <input type="url" name="videoUrl" value={form.videoUrl} onChange={handleChange} placeholder="https://abc.com/xyz.mp4" className="w-full px-4 py-3 border" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-semibold mb-2">Thumbnail URL</label>
                        <input type="url" name="thumbnailUrl" value={form.thumbnailUrl} onChange={handleChange} placeholder="https://abc.com/xyz.jpg" className="w-full px-4 py-3 border" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2">Category</label>
                        <select name="category" value={form.category} onChange={handleChange} className="w-full px-4 py-3 border">
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button disabled={saving} className="flex-1 font-semibold py-3 disabled:cursor-not-allowed">
                            {saving
                                ? "Saving Changes..."
                                : "Save Changes"}
                        </button>
                        <button type="button" onClick={() => navigate('/')} className="flex-1 font-semibold py-3">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditVideo;