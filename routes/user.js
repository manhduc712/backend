import express from 'express'
import ctrl from '../controller/user.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = express.Router()

router.post('/register', ctrl.register)
router.post('/login', ctrl.login)
router.get('/profile', verifyToken, ctrl.profile)
router.post('/editUser', verifyToken, ctrl.editUser)

export default router