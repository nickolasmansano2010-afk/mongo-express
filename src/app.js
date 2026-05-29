import express from "express";
import livro from "./models/Livro.js";

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('curso de node.js');
});


app.get("/livros/:id", async (req, res) => {
    try {
        const livroEncontrado = await livro.findById(req.params.id);
        res.status(200).json(livroEncontrado);
    } catch (erro) {
        res.status(500).json({ message: erro.message });
    }
});

// app.post("/livros", async (req, res) => {
//     try {
//         const novoLivro = await livro.create(req.body);
//         res.status(201).json({ message: "livro cadastrado com sucesso", livro: novoLivro });
//     } catch (erro) {
//         res.status(500).json({ message: erro.message });
//     }
// });

app.put("/livros/:id", async (req, res) => {
    try {
        const livroAtualizado = await livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(livroAtualizado);
    } catch (erro) {
        res.status(500).json({ message: erro.message });
    }
});

app.delete("/livros/:id", async (req, res) => {
    try {
        await livro.findByIdAndDelete(req.params.id);
        res.status(200).send("livro excluido");
    } catch (erro) {
        res.status(500).json({ message: erro.message });
    }
});

export default app
