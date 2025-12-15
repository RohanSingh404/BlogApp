import mongoose from "mongoose";

export const connectdb = async() => {
    await mongoose.connect('mongodb+srv://rohansinghiitian6395:rohan_database404@rohancluster.pnkft5m.mongodb.net/blog-app');
    console.log('Database Connected');
}