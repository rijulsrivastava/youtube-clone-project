import React, { useState } from "react";

function RegisterUser() {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function validateForm() {
        if (!form.username.trim()) return "Enter username"
        if (!form.email.trim()) return "Enter email"
        if (!form.password) return "Enter Password"
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError("")

        const validation = validateForm();
        if (validation) {
            setError(validation)
        }
        try {
            setLoading(true)
            console.log(form)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center h-[90vh]  mt-5">
            <form onSubmit={handleSubmit} className="flex flex-col w-[500px] items-center mt-10 mb-8 border p-6">
                <h1 className="text-4xl mb-2">Create Account</h1>
                <p><i>Register yourself to youtube</i></p>
                {error && <p className="bg-red-100 border border-red-300 text-red-700 px-2 py-1 mt-5">{error}</p>}
                <div className="flex flex-col w-full my-6">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Enter username" value={form.username} onChange={handleChange} className="border mt-2 p-2" />
                </div>
                <div className="flex flex-col w-full mb-6">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} className="border mt-2 p-2" />
                </div>
                <div className="flex flex-col w-full mb-6">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Enter password" value={form.password} onChange={handleChange} className="border p-2 mt-2" />
                </div>
                <button type="submit" disabled={loading} className="border p-2 w-full mt-8 mb-4"> {loading ? "Creating Account..." : "Register"} </button>
                <p>Already have an account?
                    <button type="button" onClick={() => navigate("/login")}> Sign In</button>
                </p>
            </form>
        </div >
    )
}

export default RegisterUser;