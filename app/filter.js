const btns = document.querySelectorAll('.btn')

btns.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const btn = document.getElementById(this.id)
    const categoria = btn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}
