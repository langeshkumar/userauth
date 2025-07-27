import express from 'express';
import { userLogin, userRegister } from '../controller/user.controller.js';

const userRouter = express.Router();

// user registre path 
userRouter.post('/register', userRegister);

// user login path 
userRouter.post('/login', userLogin);


export default userRouter;