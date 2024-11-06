let mensagem = document.getElementById('mensagem')
let mostrar = document.getElementById('mostrar')
let ocultar = document.getElementById('ocultar')
mensagem.style.display = 'none'
mostrar.addEventListener('click', function(){
    mensagem.style.display = 'inline'
})
ocultar.addEventListener('click', function(){
    mensagem.style.display = 'none'
})