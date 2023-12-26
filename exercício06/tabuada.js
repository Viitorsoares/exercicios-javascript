const numero = prompt(
    "Olá, eu sou o robô da tabuada!" +
    "\nDigite um número que você deseja calcular na tabuada: "
    )
let calculo = ""

for (let fator = 1; fator <= 20; fator++) {
    calculo += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("O resultado da tabuada de " + numero + ":\n\n" + calculo)