
const personagens = document.querySelectorAll(".xmen")
const personagensSenai = document.querySelectorAll(".senai")
const personasSenai = document.getElementById("personagens-senai")
const personagens = document.querySelectorAll(".personagem")

const musica = new Audio("sound/tema.mp3")
musica.loop = true
musica.volume = 0.4

document.addEventListener("click", function(){
    musica.play()
}, {once: true })

const som = new Audio("sound/btn.mp3")

let p1Confirmado = false
let p2Confirmado = false

const musica = new Audio("sound/tema.mp3")
musica.loop = true
musica.volume = 0.4


document.addEventListener("click", function () {
    musica.play()
}, { once: true })
            som.currentTime = 0
            som.play()

            // VERIFICAR SE JÁ EXISTE UM PERSONAGEM SELECIONADO
            const personagemSelecionado = document.querySelector('.selecionado')

const som = new Audio("sound/btn.mp3")

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        if(p1Confirmado) return

        som.currentTime = 0
        som.play()

        // VERIFICAR SE JÁ EXISTE UM PERSONAGEM SELECIONADO
        const personagemSelecionado = document.querySelector('.selecionado')

        // REMOVENDO A CLASSE DE UM PERSONAGEM NAO SELECIONADO
        personagemSelecionado.classList.remove('selecionado')

        // ADICIONANDO A CLASSE À UM PERSONAGEM SELECIONADO
        personagem.classList.add('selecionado')



        //pegar o elemento do personagem grande 
        const imagemPersonagemGrande = document.querySelector('.personagem-grande')

        //alterar a imagem do personagem
        const idPersonagem = personagem.attributes.id.value

        imagemPersonagemGrande.src = `./img/card-${idPersonagem}.png`

        //alterar o nome do personagem selecionado
        const nomePersonagem = document.getElementById('nome-personagem')

        nomePersonagem.innerText = personagem.getAttribute('data-name')

        //alterar a descrição do personagem selecionado
        const descricaoPersonagem = document.getElementById('descricao-personagem')

        descricaoPersonagem.innerText = personagem.getAttribute('data-description')


        personagem.addEventListener("click", () => {
            if (p1Confirmado) return

            document.getElementById("modal-p1").classList.remove("oculto")
        })

        
    })
})

let evento = ""

if (personagem !== false) {
    evento = ""
} else {
    evento = "mouseenter"
    personasSenai.classList.remove("opacidade")
}



const modal = document.querySelector("#modal")
const btnConfirmar = document.querySelector("#btn-confirmar")

personagem.addEventListener("click", function () {
    modal.classList.remove(oculto)
})


// SENAI 

personagensSenai.forEach(personagem => {
    personagem.addEventListener(`${evento}`, () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        som.currentTime = 0
        som.play()

        // VERIFICAR SE JÁ EXISTE UM PERSONAGEM SELECIONADO
        const personagemSelecionado = document.querySelector('.selecionado2')

        // REMOVENDO A CLASSE DE UM PERSONAGEM NAO SELECIONADO
        personagemSelecionado.classList.remove('selecionado2')

        // ADICIONANDO A CLASSE À UM PERSONAGEM SELECIONADO
        personagem.classList.add('selecionado2')


        // QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM
        // VAI TROCAR A IMAGEM, NOME E DESCRIÇÃO

        //pegar o elemento do personagem grande 
        const imagemPersonagemGrande = document.querySelector('.personagem-grande-senai')

        //alterar a imagem do personagem
        const idPersonagem = personagem.attributes.id.value

        imagemPersonagemGrande.src = `./imagem-grande/imagem-grande-${idPersonagem}.png`

        //alterar o nome do personagem selecionado
        const nomePersonagem = document.getElementById('nome-personagem-senai')

        nomePersonagem.innerText = personagem.getAttribute('data-name')

        //alterar a descrição do personagem selecionado
        const descricaoPersonagem = document.getElementById('descricao-personagem-senai')

        descricaoPersonagem.innerText = personagem.getAttribute('data-description')

    })
})

console.log("testando")