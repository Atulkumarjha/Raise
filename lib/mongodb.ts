import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if(!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI environment variable insidce the .env file");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
    if(cached.comm) return cached.conn;

    if(!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}