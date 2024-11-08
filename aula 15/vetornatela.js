let valores = [1,5,6,8,2,3,32,12,56,100]

console.log(`Quantidade de elementos: ${valores.length}`)

// console.log(`Estes são os valores do vetor: ${valores}`)

/*

// estrutura for abaixo

for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)    
}
*/

// estrutura for in abaixo

for (let posicao in valores) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}