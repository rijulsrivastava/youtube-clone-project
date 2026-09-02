import React, { useState } from "react";
import { useNavigate } from "react-router";

function RegisterUser() {

    const navigate = useNavigate()

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
        return null
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError("")

        const validation = validateForm();
        if (validation) {
            setError(validation)
            return
        }
        try {
            setLoading(true)
            console.log(form)
            const newUser = {
                _id: `user${Date.now()}`,
                username: form.username.trim(),
                email: form.email.trim(),
                password: form.password
            }
            localStorage.setItem("registered-user", JSON.stringify(newUser))

            navigate('/login')
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className=" flex justify-center items-center px-4">
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-[500px] items-center my-8 sm:my-10 shadow-md border p-4 sm:p-6 md:p-8 rounded-2xl border-gray-200">
                <h1 className="text-3xl font-bold sm:text-4xl mb-2">Create Account</h1>
                <p className="text-sm sm:text-base text-center"><i>Register yourself to youtube</i></p>
                {error && <p className="w-full bg-red-100 border border-red-300 rounded-lg text-red-700 text-center text-sm px-3 py-2 mt-5">{error}</p>}
                <div className="flex flex-col w-full my-6">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Enter username" value={form.username} onChange={handleChange} className="w-full border border-gray-300 rounded-lg mt-2 px-3 py-2 outline-none" />
                </div>
                <div className="flex flex-col w-full mb-6">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg mt-2 px-3 py-2 outline-none" />
                </div>
                <div className="flex flex-col w-full mb-6">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Enter password" value={form.password} onChange={handleChange} className="w-full border border-gray-300 rounded-lg mt-2 px-3 py-2 outline-none" />
                </div>
                <button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition p-2 w-full mt-8 mb-4 disabled:cursor-not-allowed disabled:bg-green-400"> {loading ? "Creating Account..." : "Register"} </button>
                <p>Already have an account?
                    <button type="button" className="text-blue-600 font-bold hover:text-blue-800 transition ml-1" onClick={() => navigate("/login")}> Sign In</button>
                </p>
            </form>
        </div >
    )
}

export default RegisterUser;