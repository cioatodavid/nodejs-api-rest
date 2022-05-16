import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";


db.on("error", console.error.bind(console, "connection error "));
db.once("open", function () {
    console.log("Connected to MongoDB");
});

const app = express();
app.use(express.json())

routes(app);

function findLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app