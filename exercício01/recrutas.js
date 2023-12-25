let nome = prompt('Nome:')
let sobrenome = prompt('Sobrenome:')
let campoDeEstudo = prompt('Seu campo de estudo:')
let anoDeNascimento = prompt('Ano de Nascimento:')

alert(
    "Cadastro realizado com sucesso!\n" + 
    "\n Nome completo: " + nome + " " + sobrenome + 
    "\n Campo de estudo: " + campoDeEstudo +
    "\n Idade: " + (2023 - anoDeNascimento) + " anos"
)

