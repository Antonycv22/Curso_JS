function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 3 //data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
    // Bom Dia!
        img.src = 'Amanhecer.png'
        document.body.style.background = '#febc3b'
    } else if (hora >= 12 && hora < 18) {
    // Boa Tarde!
        img.src = 'Entardecer.png'
        document.body.style.background = '#cf6500' 
    } else {
    // Boa Noite!
        img.src = 'Anoitecer.png'
        document.body.style.background = '#2a3148' 
    }
}

