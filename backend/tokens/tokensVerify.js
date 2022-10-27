const {verify} = require("jsonwebtoken");
const AppError = require("../utils/AppError");


exports.protect = (req, res, next) => {
    try {
        const aunthorization = req.headers.aunthorization;
        const token = aunthorization && aunthorization.split(" ")[1];
        if(!token)return res.sendStatus(403);
        const decoded = verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.userId = decoded.id;
        next()
    } catch (error) {
        next(new AppError(`${error.message}`, 403))
    }
}