import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
import videos from "../utilis/mockData.js";

function Comments({ id }) {

    const navigate = useNavigate();
    const [commentText, setCommentText] = useState("");
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editText, setEditText] = useState("");
    const [error, setError] = useState("");

    const video = videos.find((video) => video._id === id);
    const [comments, setComments] = useState(video ? video.comments : [])
    const { user } = useOutletContext()

    const handleAddComment = (e) => {
        e.preventDefault()
        if (!user) {
            alert("Login to comment on  the video")
            navigate("/login")
            return
        }
        if (!commentText.trim()) {
            return
        }

        const newComment = {
            commentId: Date.now().toString(),
            text: commentText.trim(),
            userId: user.username,
            timestamp: new Date().toISOString()
        }

        setComments((prevComments) => [...prevComments, newComment])
        setCommentText("")
    }
    const handleEditStart = (comment) => {
        setEditingCommentId(comment.commentId)
        setEditText(comment.text)
    }
    const handleUpdateComment = (commentId) => {
        if (!editText.trim()) {
            return
        }
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.commentId === commentId
                    ? { ...comment, text: editText.trim() }
                    : comment
            )
        )
        setEditingCommentId(null)
        setEditText("")
    }
    const handleDeleteComment = (commentId) => {
        setComments((prevComments) =>
            prevComments.filter(
                (comment) => comment.commentId !== commentId
            )
        )
    }
    if (!video) {
        return (
            <section className="w-full">
                <p className="text-red-600">
                    Video not found.
                </p>
                <button onClick={() => navigate("/")} className="mt-3 px-4 py-2">
                    Go Home
                </button>
            </section>
        )
    }
    return (
        <section className="w-full">
            <h2 className="text-xl font-bold  mb-6">
                {comments.length}{" "}{comments.length === 1 ? "Comment" : "Comments"}
            </h2>
            {error && (
                <div className="mb-5 px-4 py-3 bg-red-100 border border-red-300 text-red-700">
                    {error}
                </div>
            )}
            <form onSubmit={handleAddComment} className="mb-8">
                <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Add a comment" rows="3" className="w-full border p-3 outline-none " />
                <div className="flex justify-end mt-3">
                    <button type="submit" disabled={!commentText.trim()} className="px-5 py-2 font-medium border  disabled:cursor-not-allowed">
                        Comment
                    </button>
                </div>
            </form>
            {comments.length === 0 ? (
                <div className="py-8 text-center ">No comments</div>
            ) : (
                <div className="space-y-7">
                    {comments.map((comment) => (
                        <div key={comment.commentId} className="flex gap-3">
                            <div className="w-10 h-10 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                                {comment.userId ? comment.userId.charAt(0).toUpperCase() : "U"}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-sm">
                                        {comment.userId ? comment.userId : "User"}
                                    </p>
                                    {comment.timestamp && (
                                        <span className="text-xs">
                                            {new Date(comment.timestamp).toDateString()}
                                        </span>
                                    )}
                                </div>
                                {editingCommentId === comment.commentId ? (
                                    <div className="mt-2">
                                        <textarea value={editText} onChange={(e) => setEditText(e.target.value)} rows="3" className="w-full border rounded-lg p-3" />
                                        <div className="flex gap-2 mt-2">
                                            <button type="button" onClick={() => handleUpdateComment(comment.commentId)} disabled={!editText.trim()} className="px-4 py-2 text-sm  disabled:bg-gray-300">
                                                Save
                                            </button>

                                            <button type="button" onClick={() => { setEditingCommentId(null); setEditText(""); }} className="px-4 py-2 text-sm bg-gray-200 rounded-lg">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="mt-1 text-sm break-words">{comment.text}</p>
                                )}

                                {user && comment.userId === user.username && editingCommentId !== comment.commentId && (
                                    <div className="flex items-center gap-4 mt-2">
                                        <button type="button" onClick={() => handleEditStart(comment)} className="flex items-center gap-1 text-sm">
                                            <BiSolidEdit />
                                            Edit
                                        </button>
                                        <button type="button" onClick={() => handleDeleteComment(comment.commentId)} className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600">
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