import express from "express";

const app = express();
app.use(express.json())

const livros = [
    {
        id: 1,
        'titulo': "O Nome do Vento",
        'autor': "Patrick Rothfuss",
        'ano': "2007"
    },
    {
        id: 2,
        'titulo': "Trono de Vidro",
        'autor': "Sarah J. Maas",
        'ano': "2012"
    }
]

app.get('/', (req, res) => {
    res.status(200).send('index');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.get('/livros/:id', (req, res) => {
    let id = findLivro(req.params.id)
    res.json(livros[id]);

})


app.post('/livros', (req, res) => {
    let livro = req.body
    livros.push(livro)
    res.status(201).send('Livro criado');
})

app.put('/livros/:id', (req, res) => {
    let id = findLivro(req.params.id)
    livros[id].titulo = req.body.titulo
    res.json(livros);

})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = findLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} deletado`);

})


function findLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app