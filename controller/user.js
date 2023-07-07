import Users from '../models/user.js'
import asycnHandler from 'express-async-handler'
import { accessToken } from '../middlewares/jwt.js'
import jwt from 'jsonwebtoken'

const register = asycnHandler(async (req, res) => {
    const { firstname, lastname, email, password } = req.body
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    const userEmail = await Users.findOne({ email })
    if (userEmail) {
        return res.status(400).json({
            success: false,
            message: "Email already exists"
        })
    } else {
        const newUser = await Users.create({
            firstname,
            lastname,
            email,
            password
        })
        if (newUser) {
            return res.status(201).json({
                success: true,
                message: "User created successfully"
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "User not created"
            })
        }
    }
})

const login = asycnHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    const user = await Users.findOne({ email })
    if (user && await user.matchPassword(password)) {
        const token = accessToken(user._id, user.role)
        return res.status(200).json({
            success: true,
            token,
            message: "User logged in successfully"
        })
    } else {
        return res.status(400).json({
            success: false,
            message: "Invalid credentials"
        })
    }
})

const profile = asycnHandler(async (req, res) => {
    if (req.user) {
        const decode = req.user._id
        const user = await Users.findById(decode)
        if (user) {
            return res.status(200).json({
                success: true,
                user,
                message: "User profile"
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
    } else {
        return res.status(400).json({
            success: false,
            message: "User not found"
        })
    }
})

const editUser = asycnHandler(async (req, res) => {
    // const { firstname, lastname, gender, phone, address } = req.body
    // if (!firstname || !lastname || !gender || !phone || !address) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "All fields are required"
    //     })
    // }

    if (req.user) {
        const decode = req.user._id
        console.log(decode)
        const user = await Users.findById(decode)
        console.log(user)
        if (user) {
                user.firstname = firstname
                user.lastname = lastname
                user.gender = gender
                user.phone = phone
                user.address = address
                await user.save()
                return res.status(201).json({
                    success: true,
                    message: "User updated successfully"
                })
        } else {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
    } else {
        return res.status(400).json({
            success: false,
            message: "User not found"
        })
    }
})


export default {
    register,
    login,
    profile,
    editUser
}