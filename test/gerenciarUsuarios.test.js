const { retornarUsuarios, adicionarNovoUsuario } = require('../scr/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        //1. Adicionar um novo nome na lista de usuário
        adicionarNovoUsuario('maria');
        //2. Retornar a lista de usuários na caixa lista de usuários
        const listDeUsuarios = retornarUsuarios();
        //3. Comparar se o novo nome está no fim da lista de usuários
        expect(listDeUsuarios.at(-1)).to.equal('maria');
    });
});