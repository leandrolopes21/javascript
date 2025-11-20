let dados = [];

async function iniciarBusca() {
    let resposta = await fetch("data.json"); // fetch significa buscar, nesse caso ele trará o arquivo data.json
    dados = await resposta.json();
    console.log(dados);
}