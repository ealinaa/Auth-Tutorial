import jwt from "jsonwebtoken"
export const generateTokenAndSetCookie = (res,userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
    res.cookie("token", token, {
        httpOnly: true,// prevent xss attack
        secure: process.env.Node_Env === "production", //secure cookie in production only
        sameSite: "strict",
        maxAge: 7 * 24* 60 * 60 *1000,// 7 days in millisecond

    })
    return token

}