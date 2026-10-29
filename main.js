// ===================================================
// X-MEN - SELEÇÃO P1 E P2
// P1 -> confirmar/cancelar -> habilitar P2 -> confirmar
// ===================================================

const personagens = document.querySelectorAll('.xmen')
const personagensSenai = document.querySelectorAll('.senai')

const listaP1 = document.querySelector('.personagens[data-player="1"]')
const listaP2 = document.getElementById('personagens-senai')
const painelP2 = document.getElementById('p2')

const modalP1 = document.getElementById('modal-p1')
const modalP2 = document.getElementById('modal-p2')

// Compatível também com os IDs antigos de confirmação
const confirmarP1 = modalP1.querySelector('#btn-confirmar-p1, #btn-confirmar, .btn-confirmar')
const confirmarP2 = modalP2.querySelector('#btn-confirmar-p2, #btn-confirmar, .btn-confirmar')
const cancelarP1 = document.getElementById('btn-cancelar-p1')
const cancelarP2 = document.getElementById('btn-cancelar-p2')

let p1Confirmado = false
let p2Confirmado = false

// Reutiliza os elementos de áudio já presentes no HTML
const musica = document.getElementById('tema') || new Audio('sound/tema.mp3')
musica.loop = true
musica.volume = 0.4

const som = document.getElementById('btn') || new Audio('sound/btn.mp3')

// O navegador exige uma interação do usuário para tocar áudio
const tocarMusica = () => musica.play().catch(() => {})
document.addEventListener('click', tocarMusica, { once: true })

function tocarSom() {
    som.currentTime = 0
    som.play().catch(() => {})
}

function modalAberto(modal) {
    return !modal.classList.contains('oculto')
}

// Aplica bloqueio real às listas: impede mouse, clique e hover
function atualizarEstadoJogadores() {
    listaP1.classList.toggle('bloqueado', p1Confirmado)

    const p2Bloqueado = !p1Confirmado || p2Confirmado
    listaP2.classList.toggle('bloqueado', p2Bloqueado)

    // Antes de confirmar P1, P2 fica escurecido.
    // Após confirmar P1, recupera a opacidade normal.
    listaP2.classList.toggle('opacidade', !p1Confirmado)
    painelP2.classList.toggle('opacidade', !p1Confirmado)

    listaP1.setAttribute('aria-disabled', String(p1Confirmado))
    listaP2.setAttribute('aria-disabled', String(p2Bloqueado))
}

function podeEscolherP1() {
    return !p1Confirmado && !modalAberto(modalP1)
}

function podeEscolherP2() {
    return p1Confirmado && !p2Confirmado && !modalAberto(modalP2)
}

function mostrarPersonagem(personagem, jogador) {
    const p1 = jogador === 1
    const classeSelecionada = p1 ? 'selecionado' : 'selecionado2'
    const lista = p1 ? listaP1 : listaP2

    lista.querySelector(`.${classeSelecionada}`)?.classList.remove(classeSelecionada)
    personagem.classList.add(classeSelecionada)

    const id = personagem.id
    const imagem = document.querySelector(p1 ? '.personagem-grande' : '.personagem-grande-senai')
    imagem.src = p1
        ? `./img/card-${id}.png`
        : `./imagem-grande/imagem-grande-${id}.png`

    document.getElementById(p1 ? 'nome-personagem' : 'nome-personagem-senai').innerText =
        personagem.getAttribute('data-name') || ''

    document.getElementById(p1 ? 'descricao-personagem' : 'descricao-personagem-senai').innerText =
        personagem.getAttribute('data-description') || ''

    tocarSom()
}

function rolarNoCelular() {
    if (window.innerWidth < 450) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}

// ---------------- PLAYER 1 ----------------
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        if (!podeEscolherP1()) return
        mostrarPersonagem(personagem, 1)
    })

    personagem.addEventListener('click', () => {
        if (!podeEscolherP1()) return
        mostrarPersonagem(personagem, 1)
        rolarNoCelular()
        modalP1.classList.remove('oculto')
    })
})

confirmarP1.addEventListener('click', () => {
    if (!modalAberto(modalP1) || p1Confirmado) return

    p1Confirmado = true
    modalP1.classList.add('oculto')
    atualizarEstadoJogadores() // Congela P1 e libera P2
})

cancelarP1?.addEventListener('click', () => {
    if (p1Confirmado) return
    modalP1.classList.add('oculto')
    // Continua permitindo selecionar personagens no P1
})

// ---------------- PLAYER 2 ----------------
personagensSenai.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        if (!podeEscolherP2()) return
        mostrarPersonagem(personagem, 2)
    })

    personagem.addEventListener('click', () => {
        if (!podeEscolherP2()) return
        mostrarPersonagem(personagem, 2)
        rolarNoCelular()
        modalP2.classList.remove('oculto')
    })
})

confirmarP2.addEventListener('click', () => {
    if (!modalAberto(modalP2) || !p1Confirmado || p2Confirmado) return

    p2Confirmado = true
    modalP2.classList.add('oculto')
    atualizarEstadoJogadores() // Congela a seleção do P2

    console.log('Jogadores confirmados:', {
        p1: listaP1.querySelector('.selecionado')?.id,
        p2: listaP2.querySelector('.selecionado2')?.id
    })
})

cancelarP2?.addEventListener('click', () => {
    if (!p1Confirmado || p2Confirmado) return
    modalP2.classList.add('oculto')
    // Continua permitindo selecionar personagens no P2
})

// Estado inicial: P1 livre, P2 bloqueado e escurecido
atualizarEstadoJogadores()
