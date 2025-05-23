var botaoVerificar = document.getElementById('bt1')
var botaoLimpar = document.getElementById('bt2')

botaoLimpar.disabled = true

function verificar() {

    var data = new Date() // Cria a variável data que recebe o objeto new Date() [mostra a data atual do sistema]
    var ano = data.getFullYear() // Cria a variável ano que recebe o valor da data atual com o método FullYear, que significa o ano com os 4 dígitos
    var fano = document.getElementById('txtano') // Cria a variável fano e faz a ligação ao elemento HTML input com id=txtano
    var res = document.getElementById('res') // Cria a variável res e faz a ligação ao elemento HTML div com id=res

    if (fano.value.length == 0 || Number(fano.value) > ano) { // Leia se comprimento do valor digitado na caixa de texto referente a variável fano for igual a zero ou valor maior que o ano atual, aparece a mensagem de erro no window.alert abaixo
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { // Leia senão
        var fsex = document.getElementsByName('radsex') // Cria a variável fsex, e liga ela ao elemento HTML input do tipo radio, com opção masculino[0] ou feminino[1]
        var idade = ano - Number(fano.value) // Cria variável idade que recebe o valor da variável ano e subtrai do valor digitado na variável fano
        var genero = '' // Cria a variável genero que recebe inicialmente um valor vazio
        var img = document.createElement('img') // Cria a variável img que utiliza o método para criar um elemento HTML 'img'
        img.setAttribute('id', 'foto') // O elemento img será criado com id='foto'
        if (fsex[0].checked) { // Leia se na variável fsex for escolhida a opção 0[masculino], a variável genero recebe a string Homem, e começa a verificação das idades com as condições aninhadas if(), else if() e else abaixo
            genero = 'Homem'
            if (idade >= 0 && idade < 12) { // Leia se idade for maior ou igual a zero e idade for menor que 12
                // Criança
                img.setAttribute('src', 'foto-crianca-m.png') // A variável img será atualizada com o método setAttribute e receberá a foto de uma criança
            } else if (idade < 21) { // Leia se idade for menor que 21
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png') // A variável img será atualizada com o método setAttribute e receberá a foto de um jovem
            } else if (idade < 50) { // Leia se idade for menor que 50
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png') // A variável img será atualizada com o método setAttribute e receberá a foto de um adulto
            } else { // Leia senão
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png') // A variável img será atualizada com o método setAttribute e receberá a foto de um idoso
            }
        } else if (fsex[1].checked) { // Leia senão se na variável fsex for escolhida a opção 1[feminino], a variável genero recebe a string Mulher, e começa a verificação das idades com as condições aninhadas if(), else if() e else abaixo
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) { // Leia se idade for maior ou igual a zero e idade for menor que 12
                // Criança
                img.setAttribute('src', 'foto-crianca-f.png') // A variável img será atualizada com o método setAttribute e receberá a foto de uma criança
            } else if (idade < 21) { // Leia se idade for menor que 21
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png') // A variável img será atualizada com o método setAttribute e receberá a foto de uma jovem
            } else if (idade < 50) { // Leia se idade for menor que 50
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png') // A variável img será atualizada com o método setAttribute e receberá a foto de uma adulta
            } else { // Leia senão
                // Idoso
                img.setAttribute('src', 'foto-idosa-f.png') // A variável img será atualizada com o método setAttribute e receberá a foto de uma idosa
            }
        }
        res.style.textAlign = 'center' // Após alguma das condições ser atendida, a variável res alinha o texto ao centro so elemento HTML section
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // Após alguma das condições ser atendida, a variável res mostra o texto com gênero e idade definidos
        res.appendChild(img) // Aqui a variável res mostrará a imagem escolhida na condição que será executada, o método appendChild cria temporáriamente o elemento img como filho dentro do elemento pai div com id='res'
    }

    botaoLimpar.disabled = false // Habilita o botão limpar
    botaoVerificar.disabled = true // Desabilita o botao verificar
    fano.disabled = true // Desabilita a caixa de texto txtano

    var masc = document.getElementById('masc') // Cria a varável masc e faz referência ao elemento input radio com id='masc'
    var femi = document.getElementById('femi') // Cria a varável femi e faz referência ao elemento input radio com id='femi'

    masc.disabled = true // Desabilita o elemento input radio com id='masc'
    femi.disabled = true // Desabilita o elemento input radio com id='femi'
}

function limpar() {

    /* As 5 variáveis abaixo (fano, res, fsex, masc e femi) foram recriadas dentro desta função, para funcionar corretamente com os métodos e atributos aplicados */

    var fano = document.getElementById('txtano') // Cria a variável fano e faz a ligação ao elemento HTML input com id=txtano
    var res = document.getElementById('res') // Cria a variável res e faz a ligação ao elemento HTML div com id=res
    var fsex = document.getElementsByName('radsex') // Cria a variável fsex, e liga ela ao elemento HTML input do tipo radio, com opção masculino[0] ou feminino[1]
    var masc = document.getElementById('masc') // Cria a varável masc e faz referência ao elemento input radio com id='masc'
    var femi = document.getElementById('femi') // Cria a varável femi e faz referência ao elemento input radio com id='femi'

    fano.value = '' // Limpa o valor digitado na caixa de texto txtano - referente a variável fano
    res.innerHTML = '' // Limpa a resposta criada no parágrafo referente a variável res
    fsex = document.getElementById('masc').checked = [0] // Marca novamente o seu valor inicial em 0
    botaoLimpar.disabled = true // Desabilita o botão limpar
    botaoVerificar.disabled = false // Habilita o botão verificar
    fano.disabled = false // Habilita a caixa de texto txtano
    fano.focus() // Dá foco a caixa de texto

    masc.disabled = false // Habilita o elemento input radio com id='masc'
    femi.disabled = false // Habilita o elemento input radio com id='femi'
}