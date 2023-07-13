import mongoose  from "mongoose";
import 'dotenv/config';

export const connect= async () => {
await mongoose.connect('mongodb://localhost/cometlabs')
}