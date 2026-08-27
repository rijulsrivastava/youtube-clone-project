import React, { useState } from "react";

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function validateForm() {
        if (!form.email.trim()) return "Enter email"
        if (!form.password) return "Enter Password"
    }

    function handleSubmit(e) {
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
    };

    return (
        <div className="flex justify-center h-[90vh]  mt-5">
            < form className="flex flex-col w-[500px] items-center mt-10 mb-8 border p-6" onSubmit={handleSubmit}>
                <h1 className="text-4xl mb-2">Sign In</h1>
                <p><i>Sign in to youtube</i></p>
                {error && <p className="bg-red-100 border border-red-300 text-red-700 px-2 py-1 mt-5">{error}</p>}
                <div className="flex flex-col w-full my-6">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} className="border p-2 mt-2" />
                </div>
                <div className="flex flex-col w-full my-6">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter password" value={form.password} onChange={handleChange} className="border p-2 mt-2" />
                </div>
                <button type="submit" className="border p-2 w-full mt-8 mb-4" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
                <p>Don't have an account?
                    <button type="button"> Register</button>
                </p>
            </form >
        </div >
    )
}

export default Login;