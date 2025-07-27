import { body } from "express-validator";

export const userRegisterVal = [
    body('name')
        .trim()
        .notEmpty().withMessage('Username is required!')
        .isAlpha().withMessage('Username must contain only letters!'),
    body('email')
        .trim()
        .normalizeEmail()
        .notEmpty().withMessage('Email is required!')
        .isEmail().withMessage('Invalid email format!'),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is required!')
        .isLength({ min: 3, max: 8 }).withMessage('Password must be between 3 and 8 characters long!')
];

export const userLoginVal = [
    body('email')
        .trim()
        .normalizeEmail()
        .notEmpty().withMessage('Email is required!')
        .isEmail().withMessage('Invalid email format!'),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is required!')
        .isLength({ min: 3, max: 8 }).withMessage('Password must be between 3 and 8 characters long!')
]