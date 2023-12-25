let valor1 = prompt('Primeiro valor:')
let valor2 = prompt('Segundo valor:')

let primeiroValor = parseFloat(valor1)
let segundoValor = parseFloat(valor2)

let soma = primeiroValor + segundoValor
let subtração = primeiroValor - segundoValor
let multiplicacao = primeiroValor * segundoValor
let divisao = primeiroValor / segundoValor

alert(
    "Resultado\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtração +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao 
)
