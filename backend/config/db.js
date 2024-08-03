import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Shashidhar:SHASHIdhar100@cluster0.pgb9ofh.mongodb.net/FlavorFleet').then(()=>{console.log("DB connected")});
}