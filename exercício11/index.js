alert("Bem vindo! A seguir pediremos que informe alguns dados.")

const nome = prompt("Informe o seu nome:")
const idade = prompt("Informe a sua idade:")
const confirmacao = confirm("Você confirma essa idade " + idade + " ?")

if (confirmacao) {
    alert(
        "Nome: " + nome +
        "\nIdade: " + idade + 
        "\nConfirmação: " + confirmacao
    )
}
