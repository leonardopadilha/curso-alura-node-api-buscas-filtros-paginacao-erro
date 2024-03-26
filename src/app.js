import express from "express";
import conectaNaDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js"

const db = await conectaNaDatabase();

db.on('error', function(err){
  console.error("connection error;", err);
});

db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())
routes(app);

export default app