let menu = ""

do {
    menu = prompt("Escolha uma das opções a seguir:" +
    "\n1 - Comprar produtos" +
    "\n2 - Trocar produtos" + 
    "\n3 - Devolver produtos" + 
    "\n4 - Vender produtos" + 
    "\n5 - Encerrar")

    switch (menu) {
        case "1":
            alert("Você selecionou a opção numero 1")
            break
        case "2":
            alert("Você selecionou a opção numero 2")
            break
        case "3":
            alert("Você selecionou a opção numero 3")
            break
        case "4":
            alert("Você selecionou a opção numero 4")
            break
        case "5":
            alert("Você escolheu encerrar!")
            alert("Encerrando...")
        default:
            alert("Opção invalida!")
    }

} while (menu !== "5") 
    