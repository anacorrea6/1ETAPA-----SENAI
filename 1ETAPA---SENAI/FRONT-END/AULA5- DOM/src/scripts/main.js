console.log(window.location.href)

// h1 da pagina
const titulo = document.getElementById('titulo-site')
//paragrafo de boas vindas
const saudacao =  document.querySelector('#boas-vindas')
//foto da lasanha
const fotoPrato1= document.querySelector('#foto-destaque')

const cardLasanha = 
document.querySelector("#card-lasanha")

const agora = new Date()

const hora = agora.getHours()

if (hora >= 1 && hora < 12) {
    saudacao.textContent = "Bom dia"
}
else if (hora >= 12 && hora < 18){
}
else if(hora >= 18 && hora <= 24){

saudacao.textContent = "Boa Nooite"

}
else {
    saudacao.textContent = "Hora do seu computador está com erro!"
}

fotoPrato1.alt = "Destaque do Dia: Lasanha Bolonhesa!"

titulo.style.color = "#e67e22"

