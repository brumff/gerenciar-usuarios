const usuarios = ['matheus', 'lucas', 'marcos', 'joão'];

function retornarUsuarios(){
    return usuarios;
}

function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}