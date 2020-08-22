const input = require ("readline-sync")
console.log ("== Calculadora de media ==")

const nota1 = input.question("Insira a primeira nota ")
const nota2 = input.question("Insira a segunda nota ")
const nota3 = input.question("Insira a terceira nota ")
const nota4 = input.question("Insira a quarta nota ")
const nota5 = input.question("Insira a quinta nota ")
const nota6 = input.question("Insira a sexta nota ")

const media = (parseFloat (nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) /6)




const resultado = media.toFixed(1)

if (media >= 7) {
    console.log("Estudante APROVADA/O")
} else if (media < 5 ) {
    console.log("Estudante REPROVADA/O")
} else {
    console.log("Estudante em RECUPERAÇÃO")
}