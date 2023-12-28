const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no baralho:\n " + baralho.length + 
        "\N1 - Adicionar uma carta\n2 - Remover uma carta\n3 - Sair"
    )

    switch(opcao) {
        case "1":
            const novaCarta = prompt("Qual é a carta:")
            baralho.push(novaCarta)
            break
        case "2":
            const removerCarta = baralho.pop
            if (removerCarta) {
                
            }
        case "3":
            alert("Saindo...")
        default:
            alert("Opção inválida!")
    }

} while (opcao !== "3")
