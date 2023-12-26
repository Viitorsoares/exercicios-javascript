let valorInicial = parseFloat(prompt("Informe o valor inicial:"))
let opcao = ""

do {
   opcao = prompt("Saldo disponível: R$ " + valorInicial +
   "\n1 - Adicionar dinheiro" + 
   "\n2 - Remover dinheiro" +
   "\n3 - Sair") 

   switch (opcao) {
    case "1":
        valorInicial += parseFloat(prompt("Informe o valor a ser adicionado: "))
        break
    case "2":
        valorInicial -= prompt("Informe o valor a ser removido: ")
        break
    case "3":
        alert("Saindo...")
    default:
        alert("Opção inválida!")
   }

} while (opcao !== "3")


