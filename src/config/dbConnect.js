import mongoose from "mongoose";
mongoose.set("strictQuery", false);

async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection;
};

export default conectaNaDatabase;