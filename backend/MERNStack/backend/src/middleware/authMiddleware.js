import jwt from "jsonwebtoken";
import AsyncHandler from "express-async-handler";
import User from "../model/userModel.js"

const secure = AsyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]

            // Verify token
            const decoded = jwt.verify(token, "password")
            req.user = await User.findById(decoded.id).select("-password")

            if(!req.user) {
                res.status(401)
                throw new Error("Not Authorized")
            }

            next()
        } catch(error) {
            console.log(error)
            res.status(401)
            throw new Error("Not Authorized")
        }

        if(!token) {
            res.status(401)
            throw new Error("Not Authorized")
        }
    }
})

export default secure