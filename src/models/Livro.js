import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    ano: { type: Number, required: true },
    autor: { type: mongoose.Schema.Types.ObjectId,ref: 'autores', required: true }
});

const livros = mongoose.model('livros', schema);

export default livros;