// Exercício 1: Personalizador de Acesso (Strings e Interação)
let nome = prompt (`Qual é o seu nome?`).trim()
let sobrenome = prompt (`Qual é o seu sobrenome?`).trim()

let nomeCompleto = nome.concat (` ${sobrenome}`)

alert(nomeCompleto.length)

alert("Bem vindo " + nomeCompleto + "  ao restaurante BOM GOSTO")

// Exercício 2: Calculadora de Divisão de Conta (Aritméticos)
let valorConta = prompt('Insira o valor total da sua conta!')
let valorPessoa = prompt ('Quantas pessoas pagarão?')

let valorTotal = valorConta/valorPessoa

alert (`Cada amigo deve pagar R$${valorTotal}, formatando o número para 2 casas decimais`)

// exercício 3: Validador de Promoção (Lógicos e Relacionais)
let compra = prompt ('Qual o valor da sua compra')

let ajuste = prompt ('Vai ter cupom?')

if (compra > 150 || ajuste.toLowerCase() == "sim")
{
    alert("Frete gratuito")
}else {
    alert("Frete não pago")
}


