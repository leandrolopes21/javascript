// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let num = document.getElementById('num');

function start() {

    let valor = Number(num.value);

    while (valor >= 0) {
    
    let par = document.createElement('p');
    let body = document.getElementById('conteiner')
    par.textContent = `Número ${valor}`;
    par.setAttribute('id', 'res');
    body.appendChild(par);
    valor--;
      
    }
    
}

