import jwt from 'jsonwebtoken'
import asycnHandler from 'express-async-handler'

const verifyToken = asycnHandler(async(req, res, next) => {
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        const tokenVerify = req.headers.authorization.split(' ')[1];
        jwt.verify(tokenVerify, process.env.JWT_SECRET_KEY, (err, decode) => {
            if (err)
                return res.status(401).json({
                    success: false,
                    message: 'Invalid token'
                })
            req.user = decode;
            next();

        });
    } else {
        return res.status(401).json({
            success: false,
            message: 'Token not found'
        })
    }
})

export default verifyToken;