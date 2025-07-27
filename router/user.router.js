import express from 'express';
import { userLogin, userRegister } from '../controller/user.controller.js';
import { userLoginVal, userRegisterVal } from '../validation/user.validation.js';

const userRouter = express.Router();

// user registre path 
userRouter.post('/register', userRegisterVal, userRegister);

// user login path 
userRouter.post('/login', userLoginVal, userLogin);


export default userRouter;