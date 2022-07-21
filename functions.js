const usuarios = require("./database/usuarios2.json");
const fs = require ('fs');
const path = require("path");

function salvarUsuario() {
    
    fs.writeFileSync(path.resolve("./database/usuarios2.json"), JSON.stringify(usuarios, null, 4));
}

module.exports = {

    // ok
    criarUsuarios: (nome) => {

        let novoId = usuarios[usuarios.length - 1].id + 1;

        let novoUsuario = {
            id: novoId,
            nome: nome
        }

        usuarios.push(novoUsuario);

        salvarUsuario();
    },

    // ok
    listarUsuarios: () => {

        return usuarios;

    },

    // ok
    buscarUsuarios: (id) => {

        let usuarioEncontrado = usuarios.find( usuarios => usuarios.id == id);

        return usuarioEncontrado == undefined ? console.log('ERRO: USUÁRIO COM ID NÃO ENCONTRADO') : usuarioEncontrado;
    },
    
    
    // ok
    removerUsuarios: function(id) {
        
        let usuarioEncontrado = this.buscarUsuarios(id);
        
        usuarioEncontrado.id == undefined ? ("") : usuarios.splice(usuarios.indexOf(usuarioEncontrado),1);
        
        salvarUsuario();
    },
 
    substituirUsuarios: function(novoNome, id) {

        let usuarioEncontrado = this.buscarUsuarios(id);

        usuarioEncontrado == undefined ? ("") : usuarioEncontrado.nome = novoNome;

        salvarUsuario();

        return usuarioEncontrado;
    }
}
