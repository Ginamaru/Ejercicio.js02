let cuadrado = document.getElementById('cuadrado')
let imagen = document.getElementById('postre')

cuadrado.onmouseover = function() {
    cuadrado.style.backgroundColor = "write"
    imagen.style.width = "300px"
    imagen.style.height= "200px"
}

cuadrado.onmouseout = function(){
    cuadrado.style.remove('backgroundcolor')
}