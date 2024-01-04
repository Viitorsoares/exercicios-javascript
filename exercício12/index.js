let nomePessoaVelha = prompt("Informe o nome da pessoa mais velha:")
let idadePessoVelha = parseFloat(prompt("Informe a idade da pessoa mais velha:"))
let nomePessoaNova = prompt("Informe o nome da pessoa mais nova:")
let idadePessoaNova = parseFloat(prompt("Informe a idade da pessoa mais nova:"))

let diferencaIdade = idadePessoVelha - idadePessoaNova

alert( 
    "A pessoa mais velha é:" + 
    "\nNome: " + nomePessoaVelha + 
    "\nIdade: " + idadePessoVelha + " anos" +
    "\n\nA pessoa mais nova é: " + 
    "\nNome: " + nomePessoaNova + 
    "\nIdade: " + idadePessoaNova + " anos" +
    "\n\nA diferença de idade entre " + nomePessoaVelha + " e " + nomePessoaNova + " é de " + diferencaIdade + " anos"
)