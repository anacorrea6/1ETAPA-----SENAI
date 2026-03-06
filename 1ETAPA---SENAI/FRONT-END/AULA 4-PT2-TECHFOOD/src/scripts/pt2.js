class Prato{
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
    exibirComMoeda(total) {
       // return "R$" + this.preco.toFixed(2)
        return "R$" + total.toFixed(2)
    }
}
const lasanha = new Prato("Lasanha a Bolonhesa", 45)

let qtd = prompt(`Simulação: Quantas unidades de ${lasanha.nome} você deseja?`)
let preco_total = qtd*lasanha.preco

// alert(`Resumo da simulação: \n Prato: ${lasanha.nome} Total: ${lasanha.exibirComMoeda(preco_total)}`)

alert("Bem vindo ao restaurante sabor saber")

const cliente = prompt("Para um atendimento personalizado. Digite seu nome:")

let clienteFormatado = cliente.trim().toUpperCase()


alert("Bem vindo " + clienteFormatado + "ao restaurante Sabor e Saber")