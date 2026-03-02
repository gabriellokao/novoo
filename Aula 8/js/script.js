//Mapeamento dos elementos HTML
const numero = document.getElementById ("numero")
const btnAdd = document.getElementById ("btn-add")
const txtContar = document.getElementById ("txt-contar")
const inseridos = document.getElementById ("inseridos")
const lixo = document.getElementById ("lixo")
const primeiro = document.getElementById ("primeiro")
const soma = document.getElementById ("soma")
const ultimo = document.getElementById ("ultimo")
const maior = document.getElementById ("maior")
const menor = document.getElementById ("menor")
const finalizar = document.getElementById ("btn-finalizar")
const reiniciar = document.getElementById ("btn-reiniciar")

//lógica

var listaNumero = Array()

finalizar.style.cursor = "not-allowed"
finalizar.setAttribute ("disable", null)
lixo.style.cursor = "not-allowed"
lixo.setAttribute("disable", null)


btnAdd.addEventListener("click", ()=>{
    if( numero.value =="") {
         alert("Insira um número!")
    } else {
        listaNumero.push( Number (numero.value) )
        txtContar.innerHTML = "Restam " +
        (10 - listaNumero.length) +
        " números"


        const newOption = document.createElement("option")
        newOption.value = numero.value
        newOption.text = numero.value
        inseridos.appendChild(newOption)

        inseridos.size = listaNumero.length

        if(listaNumero.length > 0){
            lixo.style.cursor = "pointer"
            lixo.removeAttribute("disabled")
            document.getElementById("opt1").style.display = "none"
        }

        if(listaNumero.length == 10){
            numero.style.cursor = "not-allowed"
            numero.setAttribute("readonly", null)
            btnAdd.style.cursor = "not=allowed"
            btnAdd.setAttribute("disable", null)
            finalizar.style.cursor = "pointer"
            finalizar.removeAttribute("disable")
        }

        //console.log(listaNumero)
    }
}) 

finalizar.addEventListener("click", ()=>{
    primeiro.innerHTML = listaNumero[0]
    ultimo.innerHTML = listaNumero.at(-1)
    soma.innerHTML = listaNumero.reduce((a, b) => a + b )
    maior.innerHTML = listaNumero.reduce((a, b) => Math.max(a, b))
    menor.innerHTML = listaNumero.reduce((a, b) => Math.min(a, b))
})

reiniciar.addEventListener("click", ()=>{
    window.location.reload()
})