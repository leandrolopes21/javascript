// Aqui mostro como uma function recebe parâmetros para o cálculo

function parimp(n) {
    if(n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(11)

console.log(`O valor é: ${res}`)