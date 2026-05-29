
import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    const conexao = mongoose.connection;

    conexao.on("error", (erro) => {
        console.error("erro de conexao", erro);
    });

    conexao.once("open", () => {
        console.log("conexao com o banco feita com sucesso");
    });

    return conexao;
}

export default conectaNaDatabase;
