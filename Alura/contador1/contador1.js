// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let num = 1;

while (num <= 10) {
    
    let par = document.createElement('p');
    let body = document.getElementById('conteiner')
    par.textContent = `Número ${num}`;
    par.setAttribute('id', 'res');
    body.appendChild(par);
    num++;
      
}