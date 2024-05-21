const btns = document.querySelectorAll('.btn')

btns.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const btn = document.getElementById(this.id)
    const categoria = btn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}
