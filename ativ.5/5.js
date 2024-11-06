let texto = document.getElementById('texto')
document.addEventListener('keydown', function(event){
texto.innerText = `Você digitou a tecla: ${event.key}`
})