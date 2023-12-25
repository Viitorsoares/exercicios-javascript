const nomePersonagem1 = prompt("Nome do PRIMEIRO personagem:")
const ataquePersonagem1 = parseFloat(prompt("Poder de ATAQUE de " +  nomePersonagem1 + ':' ))

const nomePersonagem2 = prompt("Nome do SEGUNDO personagem:")
let pontosDeVida = parseFloat(prompt("Quantidade de pontos de VIDA de " + nomePersonagem2  + ":"))
const poderDeDefesa = parseFloat(prompt("Poder de DEFESA de " + nomePersonagem2 + ":"))
const escudo = prompt(nomePersonagem2 + " Possui escudo? [SIM/NÃO]")

let danoCausado = 0

if (ataquePersonagem1 > poderDeDefesa && escudo === "Não") {
    danoCausado = ataquePersonagem1 - poderDeDefesa
} else if (ataquePersonagem1 > poderDeDefesa && escudo === "Sim") {
    danoCausado = (ataquePersonagem1- poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(nomePersonagem1 + " causou " + danoCausado + " pontos de dano em " + nomePersonagem2) 
alert(
    nomePersonagem1 + "\nPoder de ataque: " + ataquePersonagem1 + "\n\n" +
    nomePersonagem2 + "\nPontos de vida: " + pontosDeVida + 
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
)
