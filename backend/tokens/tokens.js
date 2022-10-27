const { sign } = require("jsonwebtoken");

exports.createAccessToken = ({_id}) => {
    return sign({id: _id}, process.env.JWT_SECRET,{
        expiresIn: '15m',
    });
};