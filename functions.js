const usuarios = require("./database/usuarios2.json");
const fs = require ('fs');
const path = require("path");

module.exports = {

    criarUsuarios: (nome) => {

        let novoId = usuarios[usuarios.length - 1].id + 1;

        let novoUsuario = {
            id: novoId,
            nome: nome
        }

        usuarios.push(novoUsuario);

        fs.writeFileSync(path.resolve("./database/usuarios2.json"), JSON.stringify(usuarios, null, 4));

    },

    listarUsuarios: () => {

        return usuarios;

    },

    buscarUsuarios: (id) => {

        let usuarioEncontrado = usuarios.find( usuarios => usuarios.id == id);

        return usuarioEncontrado == undefined ? console.log('ERRO: USUÁRIO COM ID NÃO ENCONTRADO') : usuarioEncontrado;
    },
    
    removerUsuarios: (id) => {

        let usuarioEncontrado = buscarUsuarios(id);

        usuarioEncontrado == undefined ? ("") : usuarios.splice(usuarios.indexOf(usuarioEncontrado),1);

        fs.writeFileSync(path.resolve("./database/usuarios2.json"), JSON.stringify(usuarios, null, 4));

    },
 
    substituirUsuarios: (novoNome, id) => {

        let usuarioEncontrado = buscarUsuarios(id);

        usuarioEncontrado.nome = novoNome;

        fs.writeFileSync(path.resolve("./database/usuarios2.json"), JSON.stringify(usuarios, null, 4));

    }
}
