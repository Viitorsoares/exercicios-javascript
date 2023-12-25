const turista = prompt("Qual o nome do turista:")
let cidades = ""   // string vazia para concatenar as cidades passadas pelo usuario
let contagem = 0    // variavel para contar quantas cidades o usuario visitou

let continuar = prompt("Você visitou alguma cidade? [Sim/Não]")

while (continuar === "Sim") {
    const cidade = prompt("Qual o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou mais alguma cidade? [Sim/Não]")
}

alert(
    "Turista: " + turista + 
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n " + cidades 
)