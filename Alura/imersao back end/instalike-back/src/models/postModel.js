import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO e armazena a conexão em uma constante
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export default async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instabytes" na conexão estabelecida
    const db = conexao.db("imersao-instabytes");
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Executa uma consulta para encontrar todos os documentos na coleção e retorna os resultados como um array
    return colecao.find().toArray();
}