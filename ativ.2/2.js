let clique = document.getElementById('clique')
let contador = document.getElementById('contador')
let deletar = document.getElementById('deletar')
 
let contagem = 0
 
clique.addEventListener('click',function(){
    contagem = contagem + 1
    contador.innerText = contagem
})
deletar.addEventListener('click',function(){
   contagem = 0
   contador.innerText = contagem
})