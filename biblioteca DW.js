
let livros = [];


let autores = new Map();


let generos = new Set();

function adicionarLivro(titulo, autor, genero) {
 
    livros.push(titulo);
    

    autores.set(titulo, autor);
    
    
    generos.add(genero);
    
    console.log(`Livro "${titulo}" adicionado com sucesso!`);
}


function removerLivro(titulo) {
    const index = livros.indexOf(titulo);
    
    if (index !== -1) {
    
        livros.splice(index, 1);
        
        
        autores.delete(titulo);
        
        console.log(`Livro "${titulo}" removido com sucesso!`);
    } else {
        console.log(`Livro "${titulo}" não encontrado!`);
    }
}


function listarLivros() {
    if (livros.length === 0) {
        console.log("Nenhum livro na biblioteca.");
    } else {
        console.log("Livros disponíveis:");
        livros.forEach(titulo => {
            console.log(`- ${titulo} (Autor: ${autores.get(titulo)})`);
        });
    }
}


function verificarDisponibilidade(titulo) {
    if (livros.includes(titulo)) {
        console.log(`O livro "${titulo}" está disponível.`);
    } else {
        console.log(`O livro "${titulo}" não está disponível.`);
    }
}


function buscarLivrosPorGenero(genero) {
    let livrosPorGenero = livros.filter(titulo => {

        return generos.has(genero);
    });
    
    if (livrosPorGenero.length === 0) {
        console.log(`Nenhum livro encontrado para o gênero "${genero}".`);
    } else {
        console.log(`Livros do gênero "${genero}":`);
        livrosPorGenero.forEach(titulo => {
            console.log(`- ${titulo} (Autor: ${autores.get(titulo)})`);
        });
    }
}


adicionarLivro("O Chamado de Cthulhu", "H.P Lovecraft", "Terror");
adicionarLivro("As Dores do Mundo", "Arthur Schoppenhauer", "Filosofia");
adicionarLivro("O Iluminado", "Stephen King", "Terror");

listarLivros();
verificarDisponibilidade("O Chamado de Cthulhu");

buscarLivrosPorGenero("Terror");

removerLivro("As Dores do Mundo");
listarLivros();
verificarDisponibilidade("As Dores do Mundo");



