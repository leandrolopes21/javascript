let frutas = ['laranja', 'manga', 'uva', 'maçã'] // Vetor de frutas com 4 elementos


// Estrutura de repetição com for, percorre o vetor e verifica a quantidade de elementos, e os exibe na tela
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

frutas.push('mimosa') // Inclui um novo elemente ('mimosa') ao final do vetor

console.log(frutas)

frutas.sort() // Organiza os elementos do vetor em ordem alfabética

console.log(frutas)