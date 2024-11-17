alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 5;
console.log('Seu número secreto é ' + numeroSecreto);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    
    chute = window.prompt('Digite um número entre 1 e 10');

    if(chute == numeroSecreto) {
        alert(`Parabéns, você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas!`);
    } else {
        if(chute > numeroSecreto) {
            alert(`Seu palpite (${chute}) é maior que o número secreto, tente novamente!`);
        } else {
            alert(`Seu palpite (${chute}) é menor que o número secreto, tente novamente!`);
        }
        tentativas++;
    } 
}
