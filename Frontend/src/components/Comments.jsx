import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
// import videos from "../utilis/mockData.js";
import useFetch from '../utilis/useFetch.js'
import axios from "axios"

function Comments({ id }) {

    const navigate = useNavigate();
    const [commentText, setCommentText] = useState("");
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editText, setEditText] = useState("");
    const [error, setError] = useState("");

    // const video = videos.find((video) => video._id === id);
    // const [comments, setComments] = useState(video ? video.comments : [])
    const { user } = useOutletContext()

    const API = `http://localhost:5050/api/comments/${id}`
    const { data: comments, setData: setComments, loading, error: err } = useFetch(API)

    async function handleAddComment(e) {
        e.preventDefault()
        if (!user) {
            alert("Login to comment on the video")
            navigate("/login")
            return
        }
        if (!commentText.trim()) {
            return
        }
        try {
            setError("")
            const token = localStorage.getItem("token")
            const API_COMMENT = "http://localhost:5050/api/comments"
            const data = await axios.post(API_COMMENT, {
                videoId: id,
                text: commentText.trim()
            }, {
                headers: { Authorization: `JWT ${token}` }
            })
            setComments((prevComments) => [...prevComments, data.data])
            setCommentText("")
        } catch (err) {
            setError(err.response ? err.response.data.msg : err.message)
        }
    }
    const handleEditStart = (comment) => {
        setEditingCommentId(comment._id)
        setEditText(comment.text)
    }
    async function handleUpdateComment(_id) {
        if (!editText.trim()) {
            return
        }
        try {
            setError("")
            const token = localStorage.getItem("token")
            const API_UPDATE = `http://localhost:5050/api/comments/${_id}`
            const data = await axios.put(API_UPDATE, {
                text: editText.trim()
            }, {
                headers: { Authorization: `JWT ${token}` }
            })
            setComments((prevComments) => prevComments.map((comment) =>
                comment._id === _id ? data.data : comment
            ))
            setEditingCommentId(null)
            setEditText("")
        } catch (err) { setError(err.response ? err.response.data.msg : err.message) }
    }
    async function handleDeleteComment(_id) {
        try {
            setError("")
            const token = localStorage.getItem("token")
            const API_DELETE = `http://localhost:5050/api/comments/${_id}`
            await axios.delete(API_DELETE, {
                headers: { Authorization: `JWT ${token}` }
            })
            setComments((prevComments) => prevComments.filter((comment) => comment._id !== _id))
        } catch (err) {
            setError(err.response ? err.response.data.msg : err.message)
        }
    }
    if (loading) return <h1>Loading...</h1>
    if (err) return <h1>{err} while fetching comments</h1>

    return (
        <section className="w-full max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">
                {comments.length}{" "}{comments.length === 1 ? "Comment" : "Comments"}
            </h2>
            {error && (
                <div className="mb-5 px-4 py-3 bg-red-100 border rounded-lg border-red-300 text-red-700">
                    {error}
                </div>
            )}
            <form onSubmit={handleAddComment} className="mb-8 md:mb-11">
                <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Add a comment" rows="3" className="w-full min-h-24 md:min-h-28 border border-gray-300 rounded-xl p-3 md:p-4 outline-none resize-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200 text-sm md:text-base" />
                <div className="flex justify-end mt-3">
                    <button type="submit" disabled={!commentText.trim()} className="px-5 sm:px-6 py-2 rounded-full bg-black text-white font-medium border border-gray-300 hover:bg-black/75 transition disabled:bg-gray-100 disabled:border-none disabled:text-black disabled:cursor-not-allowed">
                        Comment
                    </button>
                </div>
            </form>
            {comments.length === 0 ? (
                <div className="py-8 text-center ">No comments</div>
            ) : (
                <div className="space-y-6 md:space-y-7">
                    {comments.map((comment) => (
                        <div key={comment._id} className="flex gap-3 md:gap-4">
                            <div className="w-8 md:w-10 h-8 md:h-10 text-sm md:text-base flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                                {comment.userId ? comment.userId.username.charAt(0).toUpperCase() : "U"}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                    <p className="font-semibold text-sm">
                                        {comment.userId ? comment.userId.username : "User"}
                                    </p>
                                    {comment.createdAt && (
                                        <span className="text-xs">
                                            {new Date(comment.createdAt).toDateString()}
                                        </span>
                                    )}
                                </div>
                                {editingCommentId === comment._id ? (
                                    <div className="mt-2">
                                        <textarea value={editText} onChange={(e) => setEditText(e.target.value)} rows="3" className="w-full border border-gray-300 rounded-xl p-3 outline-none resize-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200" />
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <button type="button" onClick={() => handleUpdateComment(comment._id)} disabled={!editText.trim()} className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-black/75 transition disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
                                                Save
                                            </button>

                                            <button type="button" onClick={() => { setEditingCommentId(null); setEditText(""); }} className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300 transition">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="mt-1 text-sm md:text-base break-words">{comment.text}</p>
                                )}

                                {user && comment.userId && comment.userId._id == user.id && editingCommentId !== comment._id && (
                                    <div className="flex flex-wrap items-center gap-4 mt-2">
                                        <button type="button" onClick={() => handleEditStart(comment)} className="flex items-center gap-1 text-sm hover:scale-110 transition">
                                            <BiSolidEdit />
                                            Edit
                                        </button>
                                        <button type="button" onClick={() => handleDeleteComment(comment._id)} className="flex items-center gap-1 text-sm hover:text-red-600 transition">
                                            <BiSolidTrash />
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Comments;