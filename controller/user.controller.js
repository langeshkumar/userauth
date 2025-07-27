import { validationResult } from "express-validator";
import bcrypt from 'bcrypt';
import userModel from "../models/user.model.js";

export const userRegister = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: 'Validation Failed'
        });
    }

    const { name, email, password } = req.body;

    try {
        const checkEmail = await userModel.findOne({ email });
        if (checkEmail) {
            return res.status(400).json({
                message: `User already exists`
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const saveUser = new userModel({
            name,
            email,
            password: hashPassword,
        });

        await saveUser.save();

        return res.status(200).json({ message: `User Data saved successfully..!` });

    } catch (error) {
        return res.status(500).json({ message: `Somethink went wrong..!` });
    }
}

export const userLogin = async (req, res) => {
    try {
        console.log('Success');
    } catch (error) {
        console.error(error.message);
    }
}