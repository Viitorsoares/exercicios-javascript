function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo:")
    const altura = prompt("Informe a altura do triângulo:")
    return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = prompt("Informe a base do retângulo:")
    const altura = prompt("Informe a altura do retângulo:")
    return base * altura
}

function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("Informe a área do quadrado:"))
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const altura = prompt("Informe a altura do trapézio:")
    return (baseMenor + baseMaior) * altura / 2
}

function calcularAreaCirculo() {
     const raio = prompt("Informe o raio do círculo:")
     return 3.14 * raio * raio
}

function exibirMenu() {
    return prompt (
        "Olá, qual área geométrica deseja calcular?\n\n" +
        "1 - Área do triângulo" +
        "\n2 - Área do retângulo" +
        "\n3 - Área do quadrado" +
        "\n4 - Área do trapézio" +
        "\n5 - Área do círculo" +
        "\n6 - Sair " 
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch(opcao) {
            case "1":
            resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Encerrando...")
                break
            default:
                alert("Opção inválida!")
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }
    
    }   while(menu !== "6") 
}


executar()
