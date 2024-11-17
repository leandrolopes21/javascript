// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let num = 10;

function start() {

    while (num >= 0) {
    
    let par = document.createElement('p');
    let body = document.getElementById('conteiner')
    par.textContent = `Número ${num}`;
    par.setAttribute('id', 'res');
    body.appendChild(par);
    num--;
      
    }
    
}

