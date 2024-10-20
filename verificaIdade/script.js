function verificar() {

    var data = new Date()
    var ano = data.getFullYear() // FullYear significa pega o ano com os 4 dígitos
    var fano = document.getElementById('txtano') // Variável fano faz referência ao elemento HTML input com id=txtano
    var res = document.getElementById('res') // Variável res faz referência ao elemento HTML div com id=res

    if (fano.value.length == 0 || Number(fano.value) > ano) { // Leia se comprimento do valor digitado na caixa de texto referente a variável fano for igual a zero ou valor maior que o ano atual, aparece a mensagem de erro no window.alert abaixo
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { // Leia senão
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

