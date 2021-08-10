//Tipos de dados

//string
var nomeCompleto = "mateus pereira"
//number
var idade = 25
//boolean
var solteiro = true
//array
var frutas = ["goiaba", "maça", "banana"]
//object
var carro = new Object()
carro.fabricacao = "2025"
carro.cor = "azul"
//function
var somar = function(a, b) {return a+b}

//alert(typeof(soma(6,7)))


//variáveis
//escopo global, escopo local
//var (escopo global), let (dentro do bloco), const

//Const não consegue alterar a variável
const meuNome = "Mateus Pereira"

if(true) {
    //se utilizar var ele escapa do escopo e pode ser lido no console.log
    var nome = "Mateus"

    //se utilizar let ele não sera reconhecido fora do escopo
    let name = "Pereira"
}

console.log(nome)

//Array
//E uma estrutura de dados que armazena uma coleção de elementos
let meuArray = [
    "notebook", 
    1500.00, 
    {memoria: '16gb', hd: '1tb'},
    ['notebook dell', 'modelo 1000']
]
console.log(meuArray[2].memoria)// será acessado o atributo do objeto
console.log(meuArray[3][1])

//Objeto com propriedades
let pessoa = {
    nome: "camila",
    idade: 35,
    feliz: true,
    pets: ["tartaruga", "coelho"],
    objeto(){

    },
    carro: { //Objeto dentro de um objeto
        camaro: {
            placa: "123456",
            cor: "amarelo"
        },
        uno: {
            placa: "kmx-1546",
            cor: "branco"
        }
    },

    andar: function(km){
        //alert(pessoa.nome+" andou "+km+" km")
    }
}

//pessoa.andar(20)
console.log(pessoa.pets[0])
console.log(pessoa.carro.camaro.cor)

//Operadores Aritméticos
let x = 10
let y = 5
let resultado = x*y //x%y //x**y

let n1 = 8
let n2 = 7
let n3 = 6
let media = (n1+n2+n3)/3

console.log(x+y)
console.log(resultado)
console.log(media)

//Operadores de Atribuição
let m = 5
let n = 3
//m = m+n
m += n //x **= n
m++
console.log(m)


//Operadores Lógicos, Comparação e Ternário
let o = 5
let idadeEleitor = 16
console.log(o === "5")//Comparação 3 iguais compara se o tipo tbm é igual
// !== verifica o tipo e apresenta true
// < <= > >= && ||
let eleitor = (idadeEleitor >= 16) ? "pode votar" : "não pode votar"
console.log(eleitor)// Ternário

/* Condicionais: 
If
Else
ElseIf
Switch
*/
let pais = "Brasil"
let estado = "RJ"

if(pais == "Brasil") {
    console.log("Sou Brasileiro")
} else if (estado == "RJ") {
    console.log("Sou carioca")
}else {
    console.log("Sou gringo")
}

switch(pais){
    case 'Brasil':
        console.log("Sim, Brasil")
        break
    case 'Canada': 
        console.log("Opa, Canadá")
        break
    default:
        console.log("Padrão")
        break
}

/* Condicionais:
for
while
*/
let paises = document.getElementsByClassName('pais')
let inc = 0

for (let i = 0; i < paises.length; i++) {
    console.log(paises[i].innerHTML)
}

// while(inc < paises.length) {//enquanto
//     console.log(paises[inc].innerHTML)
//     inc++
// }
do {
        console.log(paises[inc].innerHTML)
        inc++
    }
while (inc < paises.length) //enquanto

/* Loops: 
for in
for of
*/

let fruta = {
    nome: "Banana", 
    preco: 5.99, 
    unidade:1
}

let aparelhos = [
    "Celular", 
    "Fone de ouvido", 
    "Microfone",
    "Mouse"
]

for (let valor in fruta) {
    console.log(fruta[valor]) //valor
}

for (let val of aparelhos) {
    console.log(val)
}

//Function
function soma (x, y) {
    //alert("Funcionou!")
    return x+y
}
console.log(soma(30, 5))
document.getElementById("resultado").innerHTML = soma(30, 10)


/* Alert = notifica, Prompt = recebe parametros e Confirm = true ou false */
let caixaTexto = prompt("Digite seu nome")
console.log(caixaTexto)
alert(caixaTexto)
let resposta = confirm("Tem certeza que deseja excluir esse item?")

if(resposta == true) {
    alert("Item excluido com sucesso!")
} else { alert("Exclusão cancelada") }