let numeroSecreto = 5
console.log('Seu número secreto é ' + numeroSecreto)
let chute = window.prompt('Digite o número secreto:')
if(chute == numeroSecreto) {
    alert(`Parabéns, você acertou o número secreto! ${numeroSecreto}`)
} else {
    alert('Você errou! Tente novamente.')
}