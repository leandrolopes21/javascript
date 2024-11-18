import express from "express"; // Importação do arquivo "express" do caminho instalike-back\node_modules\express

/*
Abaixo a criação de um servidor local
O app representa o servidor, e express() é uma função sem parâmetro definido.
listen() é a função de 'escutar' no javascript, utilizando dois parâmetros.
A porta 3000 é um dos parâmetros. O outro parâmetro é uma arrow function, que tem como sintaxe básica - () => {} -
*/

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

/*
Aqui ocorre a chamada ao servidor local, utilizando o parâmetro /api, e a req (requisição) - e a res (resposta)
*/
app.get("/api", (req, res) => {
    res.status(200).send("Servidor totalmente funcional!");
});