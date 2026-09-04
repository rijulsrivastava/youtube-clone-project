import { login, register } from '../controllers/user.controller.js'
// to define api routes for user
function userRoute(app) {
    app.post("/api/register", register)//api to register new user
    app.post("/api/login", login)// api to login for existing user
}

export default userRoute


