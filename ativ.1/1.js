 let forma = document.getElementById('forma')
forma.addEventListener('click',function(){
    if(forma.style.backgroundColor == 'green'){
        forma.style.backgroundColor = 'purple'
    } else {
        forma.style.backgroundColor = 'green'
    }
})
let forma2 = document.getElementById('forma2')
forma2.addEventListener('click',function(){
    if(forma2.style.backgroundColor == 'yellow'){
        forma2.style.backgroundColor = 'red'
    } else {
        forma2.style.backgroundColor = 'yellow'
    }
})
let forma3 = document.getElementById('forma3')
forma3.addEventListener('click',function(){
    if(forma3.style.backgroundColor == 'blue'){
        forma3.style.backgroundColor = 'pink'
    } else {
        forma3.style.backgroundColor = 'blue'
    }
})