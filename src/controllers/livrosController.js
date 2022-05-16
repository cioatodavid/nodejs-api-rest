import livros from "../models/Livro.js";

class LivroController {

    static listarLivros(req, res) {
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).json(livros);
            }
        });
    }

    static listarPorId(req, res) {
        livros.findById()
        .populate('autor')
        .exec(req.params.id, (err, livro) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(livro);
            }
        });
    }

    static cadastrarLivro(req, res) {
        let livro = new livros(req.body);
        livro.save((err, livro) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    }

    static atualizarLivro(req, res) {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: 'Livro atualizado com sucesso' });
            }
        });
    }

    static deletarLivro(req, res) {
        const id = req.params.id;
        livros.findOneAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: 'Livro deletado com sucesso' });
            }
        });
    }

    static buscarPorTitulo(req, res) {
        let titulo = req.params.titulo;
        livros.find({titulo: new RegExp('^'+titulo+'$', "i")}, (err, livro) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(livro);
            }
        });
    }
}

export default LivroController;