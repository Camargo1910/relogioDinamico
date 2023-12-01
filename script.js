function carregar() {
    

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var h1 = document.getElementsByTagName('h1')[0]
var footer = document.getElementsByTagName('footer')[0]
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

msg.innerHTML = (`Agora são ${hora}:${min}`)
if (hora >=0 && hora <12) {
    img.src = 'fotos/fotomanha.jpg'
    document.body.style.background = "#FFEBCD"
    msg.style.color = 'black'
    h1.style.color = 'grey'
    footer.style.color ="grey"

} else if (hora >=12 && hora <18) {
    img.src = "fotos/fototarde.jpg" 
    document.body.style.background = "#CD853F"
    
} else {
    img.src = "fotos/fotonoite.jpg"
    document.body.style.background = "#696969"
    
}

}