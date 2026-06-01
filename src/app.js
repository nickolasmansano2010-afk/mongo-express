import express from "express";
import conectaNaBase from "./dbConnect.js";
import routes from "./routes/index.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("conexao com o banco feita com sucesso");
});

const app = express();
routes(app);

export default app
