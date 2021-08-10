// -Browser Object Model (BOM) Elementos do window
console.log(
    window.screen.width,
    window.screen.height,
    window.navigator,
    //window.location.href = "https://www.linkedin.com/in/mateus-pereira-00b705133/"
)

function voltar(){
    history.back()
}

function avancar(){
    history.forward()
}

console.log(window) // mostra todos os atributos do windows no console



// -Document Object Model (DOM)Elementos da página
//alert("Olá Mundo")
console.log(
    document.getElementById("titulo").innerHTML
)

document.getElementById("largura").innerHTML = screen.width

console.log(
    document.getElementsByClassName("carro")[0]
)

console.log(
    document.getElementsByTagName("div")[4].innerHTML
)

console.log(
    document.querySelector(".div2") //se for class usa ponto e id usa #
)

console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")
)

var paragrafo = document.getElementById("p1");
paragrafo.innerHTML = "Novo paragrafo";
paragrafo.style.color = "red";
paragrafo.style.backgroundColor = "blue";
paragrafo.style.height = "20px";

var imagem = document.getElementById("imagem")
imagem.src = "./imagens/javascript.jpg"
imagem.alt = "Teste de imagem"
imagem.width = "80"

//Create Element
var imagem = document.createElement('img')
imagem.src = "./imagens/javascript.jpg"

var paragrafo = document.createElement("p")
paragrafo.innerHTML = "Olá pessoal"

console.log(
    imagem, paragrafo
)

//appendChild e RemoveChild
var el = document.createElement("p")
el.innerHTML = "Elemento filho!"

var im = document.createElement("im")
im.src = "./imagens/javascript.jpg"

document.getElementById("idConteudo").appendChild(el),
document.getElementById("idConteudo").appendChild(im)

document.getElementById("idConteudo").removeChild(im)

//childNodes
// console.log(
//     document.body.childNodes //retorna todos os filhos do body
// )

//nodeName, nodeType, nodeValue
var lista = document.body.childNodes //retorna todos os filhos do body
//alert(lista[12].nodeName) 
    //nodeType retorna 1- nó de elemento, 2 - atributo, 3 - texto, 8 - comentário
    //nodeValue retorna o valor do nó

//parentNode
console.log(
    document.getElementById("brasil").parentNode
)


//setAttribute, getAtribute, removeAttribute
document.getElementById("btn-set").addEventListener("click", function() {
    document.getElementById("title").setAttribute("class", "red")
})

document.getElementById("btn-remove").addEventListener("click", function() {
    document.getElementById("title").removeAttribute("class")
})

document.getElementById("btn-get").addEventListener("click", function() {
    var value = document.getElementById("title").getAttribute("class")
    document.getElementById("class").innerHTML = value
})

//createTextNode, textContent
var title = document.querySelector("h2")
var txt = document.createTextNode("Um texto qualquer")

title.appendChild(txt)
title.textContent = "Um novo texto qualquer"


//Listas children e insertBefore
var list = document.getElementsByTagName("ul")[0]
var itens = list.children

var novoItem = document.createElement("li")
novoItem.textContent = "Suco de Uva"

list.insertBefore(novoItem, itens[2])// ele vai colocar o suco de uva depois do indice 2

var list2 = document.getElementsByTagName("ul")[1]
var itens2 = list2.children

var novoItem2 = document.createElement("li")
novoItem2.textContent = "Margarina"

list2.replaceChild(novoItem2, itens2[2])

console.log(list2)