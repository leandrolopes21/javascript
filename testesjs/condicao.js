/*
O laço "do/while" executa a primeira instrução antes de testar a condição fornecida. Nesse caso, a instrução consiste em incrementar, de 1 em 1, o valor da variável “cont”. Como se inicia em 1 e vai até 9, ao final o seu valor será 10
*/


// No laço "do/while" a condição é testada ao final do código.
// Em função da posição do teste, o valor apresentado aqui será o valor atribuído a variável em sua condição "while (cont < 8)"
var cont = 0;
do {
    cont += 1;
} while (cont < 8);
console.log(cont)



// No laço "while" a condição é testada no início do código
// Em função da posição do teste, o valor apresentado aqui será o laço com a contagem de 0 até 9
/*
var cont = 0
while (cont < 10) {
    console.log(cont)
    cont += 1    
}
*/

// Este código foi utilizado com a condição for, e o resultado será o mesmo da condição while acima
/*
for(cont = 1; cont < 10; cont++) {
    console.log(cont)
}
*/