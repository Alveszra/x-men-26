    const personagens = document.querySelectorAll(".personagem")

    personagens.forEach(personagem => {
        personagem.addEventListener('mouseenter', () => {

            if(window.innerWidth < 450){
                window.scrollTo({top: 0, behavior: 'smooth'})
            }

            // VERIFICAR SE JÁ EXISTE UM PERSONAGEM SELECIONADO
            const personagemSelecionado = document.querySelector('.selecionado')

            // REMOVENDO A CLASSE DE UM PERSONAGEM NAO SELECIONADO
            personagemSelecionado.classList.remove('selecionado')

            // ADICIONANDO A CLASSE À UM PERSONAGEM SELECIONADO
            personagem.classList.add('selecionado')


            // QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM
            // VAI TROCAR A IMAGEM, NOME E DESCRIÇÃO

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

        })
    })