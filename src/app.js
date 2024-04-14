import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipulador404 from "./middlewares/Manipulador404.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

db.on("error", function(err){
  console.error("connection error;", err);
});

db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

export default app;