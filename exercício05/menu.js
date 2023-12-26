let menu = parseFloat(prompt(
    "Escolha uma das opções a seguir:" +
    "\n1 - Comprar produtos" +
    "\n2 - Trocar produtos" + 
    "\n3 - Devolver produtos" + 
    "\n4 - Vender produtos" + 
    "\n5 - Encerrar"
))

while (menu !== 5) {
    switch (menu) {
        case 1:
            alert("Você selecionou a opção numero 1")
            let menu = parseFloat(prompt(
                "Escolha uma das opções a seguir:" +
                "\n1 - Comprar produtos" +
                "\n2 - Trocar produtos" + 
                "\n3 - Devolver produtos" + 
                "\n4 - Vender produtos" + 
                "\n5 - Encerrar"
            ))            
        case 2:
            alert("Você selecionou a opção numero 2")
            break
        case 3:
            alert("Você selecionou a opção numero 3")
            break
        case 4:
            alert("Você selecionou a opção numero 4")
            break
        default:
            alert("Opção invalida!")
    }
}

alert(encerrou)
