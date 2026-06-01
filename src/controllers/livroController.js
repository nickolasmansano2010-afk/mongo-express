import livro from "../models/Livro.js";

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
    res.status(500).json({ message: `${erro.message } - falha na requisicao do }` });
  }
}

  static async cadastrarLivro (req, res) {
    try {
       const novoLivro = await livro.create(req.body)
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
};

export default LivroController;