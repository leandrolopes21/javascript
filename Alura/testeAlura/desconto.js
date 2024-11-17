
let porcentagemDesconto = 0;
let quantidadeMilhas = 60

if(quantidadeMilhas >= 30000) {
    porcentagemDesconto = 20;
} else {
     if (quantidadeMilhas > 5000) {
       porcentagemDesconto = 10; 
    }
}

console.log(porcentagemDesconto)