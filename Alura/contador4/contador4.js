// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let num = document.getElementById('num');

function start() {

    let valor = Number(num.value);
    let cont = 0

    while (cont <= valor) {
    
    let par = document.createElement('p');
    let body = document.getElementById('conteiner')
    par.textContent = `Número ${cont}`;
    par.setAttribute('id', 'res');
    body.appendChild(par);
    cont++;
      
    }
    
}

