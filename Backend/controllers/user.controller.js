import bcrypt from 'bcrypt'
import UserModel from '../models/user.model.js'
import jwt from "jsonwebtoken"
//below is to register new user
async function register(req, res) {
    try {
        let { username, email, password } = req.body
        //to validate input fields
        if (!username?.trim() || !email?.trim() || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }
        if (password.length < 10) { // to ensure minimum password length is 10 or more
            return res.status(400).json({ msg: "Password must be 10 characters or more" })
        }
        //to check if user exists or not
        let data = await UserModel.findOne({ email: email.trim() })
        if (data) {
            return res.status(409).json({ msg: "user already exists" })
        } else {
            let newUser = await UserModel.create({
                username: username.trim(),
                email: email.trim(),
                password: bcrypt.hashSync(password, 10) //to encode the password for safety
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
// below function is to login
async function login(req, res) {
    try {
        let { email, password } = req.body
        if (!email?.trim() || !password) { // to validate input fields
            return res.status(400).json({ msg: "Email and password are required" });
        }
        let data = await UserModel.findOne({ email: email.trim() }) // to find user with specific email
        if (!data) {
            return res.status(401).json({ msg: "user does not exists" })
        } else {
            // to compare stored password and user input password
            let validPassword = bcrypt.compareSync(password, data.password)
            if (!validPassword) {
                return res.status(401).json({ msg: "Invalid credentials" })
            }
            // to create JWT token with 1day validity
            const token = jwt.sign({ id: data._id }, "secretKeyForYoutubeClone", { expiresIn: '1d' })

            return res.status(200).json({
                user: {
                    id: data._id,
                    username: data.username,
                    email: data.email,
                    channelId: data.channelId
                },
                accessToken: token
            })
        }
    }
    catch (err) {
        return res.status(500).json({ msg: "Error while login" })
    }
}

export { register, login }