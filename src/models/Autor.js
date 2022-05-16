import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String, required: true }
    },
    {versionKey: false});

const autores = mongoose.model('autores', schema);

export default autores;