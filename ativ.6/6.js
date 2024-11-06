// ex6
let votar = document.getElementById("votar")
let imagemG = document.getElementById("generico")
document.addEventListener("click",function(){
    let pergunta = Number(prompt("Em qual canidato você quer votar: \n(12)murimenedela \n(21)manoGabi\n(8)Arnord \n(24)loirin"))
   switch (pergunta) {
        case 12:
            let confirmar1 = prompt("Você deseja confirmar seu voto no candidato murimenedela: (S/N)")
            if (confirmar1 == 'S'){
                alert("Você votou no candidato murimenedela")  
            }
            else{
            alert("Reinicie a pagina e escolha outro candidato")    
        }
        break
        case 21:
        let confirmar2 = prompt("Você deseja confirmar seu voto no candidato manoGabi: (S/N)")
        if(confirmar2 == 'S'){
            alert("Você votou no candidato manoGabi")
        }    
        else{
            alert("Reinicie a pagina e escolha outro candidato")    
            }
        break
            case 8:
        let confirmar3 = prompt("Você deseja confirmar seu voto no candidato Arnord: (S/N)")
        if(confirmar3 == 'S'){
            alert("Você votou no candidato Arnord")
        }    
        else{
            alert("Reinicie a pagina e escolha outro candidato")    
            }
        break
            case 24:
        let confirmar4 = prompt("Você deseja confirmar seu voto no candidato loirin: (S/N)")
        if(confirmar4 == 'S'){
            alert("Você votou no candidato loirin")
        }    
        else{
            alert("Reinicie a pagina e escolha outro candidato")    
            }
        break
            
   }
})