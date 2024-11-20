import express from "express"; // Importação do arquivo "express" do caminho instalike-back\node_modules\express

// Foi criado um array com o nome posts

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato fofo dormindo",
        imagem: "https://placekitten.com/400/200"
    },
    {
        id: 3,
        descricao: "Gatinho brincando com um novelo de lã",
        imagem: "https://placekitten.com/200/300"
    },
    {
        id: 4,
        descricao: "Olhos de gato brilhando no escuro",
        imagem: "https://placekitten.com/300/300"
    },
    {
        id: 5,
        descricao: "Gato curioso olhando pela janela",
        imagem: "https://placekitten.com/400/200"
    },
    {
        id: 6,
        descricao: "Grupo de gatinhos brincando",
        imagem: "https://placekitten.com/500/300"
    }
  ];

/*
Abaixo a criação de um servidor local
O app representa o servidor, e express() é uma função sem parâmetro definido.
listen() é a função de 'escutar' no javascript, utilizando dois parâmetros.
A porta 3000 é um dos parâmetros. O outro parâmetro é uma arrow function, que tem como sintaxe básica - () => {} -
*/

const app = express();
app.use(express.json())
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

/*
Aqui ocorre a chamada ao servidor local, utilizando o parâmetro /api, e a req (requisição) - e a res (resposta)
*/
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});