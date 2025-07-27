import express from 'express';
import dotenv from 'dotenv';
import { userauth } from './lib/database.js';
import userRouter from './router/user.router.js';
dotenv.config();

const app = express();
userauth();

app.use(express.json());

const PORT = process.env.USER_PORT || 5000;

app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server Running from : http://localhost:${PORT}`);
});