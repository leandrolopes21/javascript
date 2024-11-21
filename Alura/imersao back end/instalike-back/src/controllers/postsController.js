import getTodosPosts from "../models/postModel.js";

export async function listarPosts(req, res) {
    // Chama a função getTodosPosts para obter todos os posts
    const posts = await getTodosPosts();
    // Envia os posts como resposta em formato JSON com o status HTTP 200 (OK) 
    res.status(200).json(posts);
} 