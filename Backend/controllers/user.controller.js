import bcrypt from 'bcrypt'
import UserModel from '../models/user.model.js'

async function register(req, res) {
    try {
        let { username, email, password } = req.body
        if (!username?.trim() || !email?.trim() || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }
        let data = await UserModel.findOne({ email: email.trim() })
        if (data) {
            return res.status(409).json({ msg: "user already exists" })
        } else {
            let newUser = await UserModel.create({
                username,
                email,
                password: bcrypt.hashSync(password, 10)
            })
            return res.status(201).json({
                user: {
                    id: newUser._id,
                    username: newUser.username,
                    email: newUser.email
                }
            })
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ msg: "Error while registering user" })
    }
}

async function login(req, res) {
    try {
        let { email, password } = req.body
        if (!email?.trim() || !password) {
            return res.status(400).json({ msg: "Email and password are required" });
        }
        let data = await UserModel.findOne({ email: email.trim() })
        if (!data) {
            return res.status(401).json({ msg: "user does not exists" })
        } else {
            let validPassword = bcrypt.compareSync(password, data.password)
            if (!validPassword) {
                return res.status(401).json({ msg: "Invalid credentials" })
            }

            return res.status(200).json({
                user: {
                    id: data._id,
                    username: data.username,
                    email: data.email
                }
            })
        }
    }
    catch (err) {
        return res.status(500).json({ msg: "Error while login" })
    }
}

export { register, login }