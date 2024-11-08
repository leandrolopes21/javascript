// Aqui calculamos o fatorial de um número utilizando uma function

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

/* Explicação:
Criei a function com parâmetro n;
criei uma variável fat que inicialmente recebe o valor 1;
Criei um laço de repetição for;
Dentro do for, criei uma variável c que recebe o valor do parâmetro n da function; enquanto o valor de c for maior que 1; o valor de c será decrementado em 1;
Dentro do for, a variável fat recebe o valor inicial dela que é 1 e multiplica pelo valor de c e recebe esse novo valor;
Como o valor indicado no parâmetro n da function é 5, esse laço fará toda a verificação e ficará no loop, enquanto c for maior que 1;
fat *= c significa: fat = 1 * 5 _--> fat tem um novo valor que é 5 e decrementa essa valor em 1 --> fat = 5 * 4 --> fat = 20 * 3 -- > fat = 60 * 2 --> fat = 120, aqui acaba o loop;
O último valor recebido por fat foi 120, o return chama a variável fat que agora vale 120;
*/