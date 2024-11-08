let num = [5,4,1,2]
console.log(`Seu vetor é composto por: ${num}`)

// Todo vetor começa na posição 0, exemplo [0,1,2,3,4,5,...] Nestes números estou indicando a posição, e não o elemento que se encontra ali

num[4] = 6 // Aqui a variável num recebe o número 6 na quinta posição do vetor

console.log(`Agora seu vetor mudou, é composto por: ${num}`)

num.push(7) // num.push inclui mais um elemento ao final do vetor existente

console.log(`Agora seu vetor mudou novamente, é composto por: ${num}`)

// num.length apresenta a quantidade de elementos que está no vetor

console.log(`Seu vetor possui ${num.length} elementos`)

console.log(`Colocamos os elementos do seu vetor em ordem crescente: ${num.sort()}`)