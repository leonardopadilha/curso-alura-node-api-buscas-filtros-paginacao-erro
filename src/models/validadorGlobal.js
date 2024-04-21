import mongoose from "mongoose";

mongoose.Schema().Types.String.set({
  validador: (valor) => valor !== "",
  message: ({ path }) `Um campo ${path} foi fornecido em branco.`
});