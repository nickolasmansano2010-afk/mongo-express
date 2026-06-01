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

app.delete("/livros/:id", async (req, res) => {
    try {
        await livro.findByIdAndDelete(req.params.id);
        res.status(200).send("livro excluido");
    } catch (erro) {
        res.status(500).json({ message: erro.message });
    }
});

export default app
