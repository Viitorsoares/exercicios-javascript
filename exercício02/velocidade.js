const nomeVeiculo1 = prompt('Nome do PRIMEIRO veículo:')
const velocidadeVeiculo1 = parseFloat(prompt('Velocidade ' + nomeVeiculo1 + ":"))

const nomeVeiculo2 = prompt('Nome do SEGUNDO veículo:')
const velocidadeVeiculo2 = parseFloat(prompt('Velocidade ' + nomeVeiculo2 + ":"))


if (velocidadeVeiculo1 > velocidadeVeiculo2) {
    alert(nomeVeiculo1 + " esta com a velocidade MAIOR que" + " " + nomeVeiculo2 + "!")
} else if (velocidadeVeiculo1 < velocidadeVeiculo2) {
    alert(nomeVeiculo2 + " esta com a velocidade MAIOR que" + " " + nomeVeiculo1 + "!")
} else {
    alert(nomeVeiculo1 + " e " + nomeVeiculo2 + " estão com a velocidade IGUAL!")
}
