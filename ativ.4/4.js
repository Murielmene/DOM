let botao = document.getElementById("botao")
let texto = document.getElementById("texto")
botao.addEventListener('click',function(){
    let textoNovo= prompt("Me diga uma frase nova: ")
    texto.innerText = textoNovo
})