import mongoose from 'mongoose';

export const userauth = async () => {
    try {
        await mongoose.connect(process.env.USER_DB_CONN);
        console.log(`Database Connected Successfully..!`);
    } catch (error) {
        console.error(`Database errot : ${error.message}`);
        process.exit(1);
    }
}