var altura = 0
var largura = 0

    function ajustaTamanhoPalco(){
        altura = window.innerHeight
        largura = window.innerWidth
        console.log(altura, largura)
    }

ajustaTamanhoPalco()

var posicaoX = Math.random() * largura
var posicaoY = Math.random() * altura

console.log(posicaoX, posicaoY)