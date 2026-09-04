import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import axios from 'axios'

function Login() {

    const navigate = useNavigate()
    const { setUser } = useOutletContext();
    const [form, setForm] = useState({ // this is to store login input
        email: "",
        password: ""
    })

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // below is to update particular input
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    // to validate input  fields
    function validateForm() {
        if (!form.email.trim()) return "Enter email"
        if (!form.password) return "Enter Password"
        if (form.password.length < 10) return "Password must be 10 characters or more"
        return null
    }
    //this is to verify user backend apis
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
            const API = "http://localhost:5050/api/login"
            const data = await axios.post(API, {
                email: form.email.trim(),
                password: form.password
            })
            console.log(data)
            // to store user info and token
            localStorage.setItem("user", JSON.stringify(data.data.user))

            localStorage.setItem("token", data.data.accessToken)
            setUser(data.data.user)// to update user state to parent
            navigate("/")

        } catch (err) {
            setError(err.response ? err.response.data.msg : err.message)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center px-4">
            <form className="flex flex-col w-full max-w-[500px] items-center my-8 sm:my-10 shadow-md border p-4 sm:p-6 md:p-8 rounded-2xl border-gray-200" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold sm:text-4xl mb-2">Sign In</h1>
                <p className="text-sm sm:text-base text-center"><i>Sign in to youtube</i></p>
                {error && <p className="w-full bg-red-100 border border-red-300 rounded-lg text-red-700 text-center text-sm px-3 py-2 mt-5">{error}</p>}
                <div className="flex flex-col w-full my-6">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg mt-2 px-3 py-2 outline-none" />
                </div>
                <div className="flex flex-col w-full my-6">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter password" value={form.password} onChange={handleChange} className="w-full border border-gray-300 rounded-lg mt-2 px-3 py-2 outline-none" />
                </div>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition p-2 w-full mt-8 mb-4 disabled:cursor-not-allowed disabled:bg-green-400" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
                <p>Don't have an account?
                    <button type="button" onClick={() => navigate("/register")} className="text-blue-600 font-bold hover:text-blue-800 transition ml-1"> Register</button>
                </p>
            </form>
        </div>
    )
}

export default Login;