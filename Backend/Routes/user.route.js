import { login, register } from '../controllers/user.controller.js'

function userRoute(app) {
    app.post("/api/register", register)
    app.post("/api/login", login)
}

export default userRoute


