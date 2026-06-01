import livro from "../models/Livro.js";
import { autor } from "../models/autor.js";

class LivroController {

  static async listarLivros (req, res) {
    try {
      const listaLivros = await livro.find({})
      res.status(200).json(listaLivros)
  } catch (erro) {
    res.status(500).json({ message: `${erro.message } - falha na requisicao}` });
  }}
;

static async listarLivroPorId (req, res) {
    try {
      const id = req.params.id;
        const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado)
  } catch (erro) {
    res.status(500).json({ message: `${erro.message } - falha na requisicao do livro}` });
  }
}

  static async cadastrarLivro (req, res) {
    const novoLivro =req.body
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: {...autorEncontrado.
        _doc }; }
        const livroCriado = await livro.create(livroCompleto);
        res.status(201).json({message: "criado com sucesso", livro: novoLivro});
    } catch (erro) {
        res.status(500).json({ message: erro.message });
    }
  }
  
 static async atualizarLivro (req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message } - falha na atualizacao do livro}` });
    }
  }

 static async deletarLivro (req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro excluido com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message } - falha na exclusao do livro}` });
    }
  }
};

export default LivroController;