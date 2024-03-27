import mongoose from "mongoose";
mongoose.set("strictQuery", false);

mongoose.connect(process.env.DB_CONNECTION_STRING)

let db = mongoose.connection;

export default db;