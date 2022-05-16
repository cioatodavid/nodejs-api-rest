import mongoose from "mongoose";

mongoose.connect('mongodb+srv://root:root@cluster0.ldeyy.mongodb.net/node-api')

let db = mongoose.connection;

export default db;