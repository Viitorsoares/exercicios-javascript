const imoveis = []
let opcao = ""

do {
    opcao = prompt(
    "Olá, Seja bem vindo ao cadastro de imóveis!\n" +
    "O numero de imóveis cadastrados é: " + imoveis.length +
    "\n\nEscolha as opções:\n1 - Salvar um imóvel\n2 - Mostrar todos os imóveis\n3 - Sair"
    )

    switch(opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Nome do proprietario:")
            imovel.quartos = prompt("Quantidade de quartos:")
            imovel.banheiros = prompt("Quantidade de banheiros:")
            imovel.garagem = prompt("O imóvel possui garagem? [Sim/Não]")

            const confirmacao = confirm(
                "Deseja salvar esse imóvel?\n" +
                "\nProprietario: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos + 
                "\nBanheiros: " + imovel.quartos + 
                "\nPossui garagem? " + imovel.garagem
            )

            if (confirmacao) {
                imoveis.push(imovel)
            }

            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imovel = " + (i + 1) + 
                    "\n\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem? " + imoveis[i].garagem 
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }

} while (opcao !== "3")
