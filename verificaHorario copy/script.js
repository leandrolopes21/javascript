function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() // Aqui a aplicação recebe o horário atual do sistema
    // var hora = 14 // Aqui eu forço a aplicação a receber um horário digitado pelo usuário
    
    // msg.innerHTML = `Olá!! Agora são ${hora} horas.` - Aqui é uma msg automática, independente do horário

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        msg.innerHTML = `Bom dia!! Agora são ${hora} horas.`
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#fdc06e'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        msg.innerHTML = `Boa tarde!! Agora são ${hora} horas.`
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#b3c6d5'
    } else {
        // Boa noite!
        msg.innerHTML = `Boa noite!! Agora são ${hora} horas.`
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#1f273b'
    }
}

