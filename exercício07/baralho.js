const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no baralho: " + baralho.length + 
        "\n1 - Adicionar uma carta\n2 - Remover uma carta\n3 - Sair"
    )

    switch(opcao) {
        case "1":
            const novaCarta = prompt("Qual é a carta:")
            baralho.push(novaCarta)
            break
        case "2":
            const removerCarta = baralho.pop()
            if (!removerCarta) {
                alert("Não há nenhuma carta no baralho!")
            } else {
                alert("Você puxou um(a) " + removerCarta)
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }

} while (opcao !== "3");
