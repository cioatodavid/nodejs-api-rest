import autores from "../models/Autor.js";


class AutorController {
    static listarAutores(req, res) {
        autores.find({}, (err, autores) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).json(autores);
            }
        });
    }

    static listarAutorPorId(req, res) {
        autores.findById(req.params.id, (err, autor) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(autor);
            }
        });
    }

    static cadastrarAutor(req, res) {
        let autor = new autores(req.body);
        autor.save((err, autor) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    }

    static atualizarAutor(req, res) {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: 'autor atualizado com sucesso' });
            }
        });
    }

    static deletarAutor(req, res) {
        const id = req.params.id;
        autores.findOneAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: 'autor deletado com sucesso' });
            }
        });
    }

}

export default AutorController;