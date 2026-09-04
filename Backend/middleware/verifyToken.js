import jwt from "jsonwebtoken"
import UserModel from '../models/user.model.js'
// below function is to verify JWT token
function verifyToken(req, res, next) {
    //below is to ensure autherization contains JWT token
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] == "JWT"
    ) {
        //to verify token with key
        jwt.verify(req.headers.authorization.split(" ")[1], "secretKeyForYoutubeClone",
            async (err, verifiedToken) => {
                if (err) {
                    return res.status(403).json({ msg: "Invalid JWT token" })
                }
                //to get verified user using id that is stored in token
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