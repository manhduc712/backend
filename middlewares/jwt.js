import jwt from 'jsonwebtoken'

const accessToken = (uid, role) => {
    return jwt.sign({_id:uid, role: role}, process.env.JWT_SECRET_KEY, {expiresIn: '1d'})
}

export {
    accessToken
}