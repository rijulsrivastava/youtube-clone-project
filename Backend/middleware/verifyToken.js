import jwt from "jsonwebtoken"
import UserModel from '../models/user.model.js'

function verifyToken(req, res, next) {
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] == "JWT"
    ) {
        jwt.verify(req.headers.authorization.split(" ")[1], "secretKeyForYoutubeClone",
            async (err, verifiedToken) => {
                if (err) {
                    return res.status(403).json({ msg: "Invalid JWT token" })
                }

                let user = await UserModel.findById(verifiedToken.id)
                if (!user) {
                    return res.status(404).json({ msg: "User does not exist" })
                }
                req.user = user
                next()
            })
    } else {
        return res.status(404).json({ msg: "token doesnot exists" })
    }
}

export default verifyToken