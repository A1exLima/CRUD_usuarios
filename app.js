const express = require('express');
const functions = require('./functions');

const app = express();

// middleware Express 
// Responsavel por pegar o corpo da requisiçao e organizar este corpo dentro do req.body
app.use(express.json());


// Rota para página inicial
app.get ('/', (req, res) =>{

    res.send('Página Home a ser exibida!');
});


// Rota para Listar Usuários (.get)
app.get('/listarUsuarios', (req, res) => {

    let usuarios = functions.listarUsuarios();
    res.send(usuarios);
});

// Rota para Criar um Usuário (.post)
// Teste é efetuado na ferramenta REQBIN
app.post('/criarUsuarios', (req, res) => {

    // recebe como parametro um middleware implementado pela ferramenta reqbin
    functions.criarUsuarios(req.body.nome);
    res.send('Usuário Criado com Sucesso!');
});

// Rota para Buscar Usuários pelo ID (.get)
// Endereco da rota que vai no seguinte formato /busca?id=x <= (nome desse formato de endereco é query string)
// Modelo Exemplo teste código: http://localhost:4000/buscaUsuarios?id=x (x = ID do usuário a buscar)
app.get('/buscaUsuarios', (req, res) => {

    let usuarioEncontrado = functions.buscarUsuarios(req.query.id);
    res.send(usuarioEncontrado);
});

//Rota para apagar Usuário pelo ID (.post)
// Teste é efetuado na ferramenta REQBIN
app.post('/apagarUsuario', (req, res) => {

    functions.removerUsuarios(req.body.id);
    res.send(`Usuário ${req.body.id} removido com Sucesso!`);
});


// Rota para Substituir Usuário pelo ID e alteracao de nome (.get)
// Endereco da rota que vai no seguinte formato /busca?id=x <= (nome desse formato de endereco é query string)
// Modelo Exemplo teste código: http://localhost:4000/substituirUsuario?nome=x&id=x (x = ID do usuário a buscar)
app.get('/substituirUsuario', (req, res) => {

    let usuarioSubstituido = functions.substituirUsuarios(req.query.nome, req.query.id);

    usuarioSubstituido == undefined ? res.send('Usuário não encontrado') : res.send(`Usuário ${req.query.id} substituido com sucesso!`);
    
});

app.listen(4000, () => console.log('SERVIDOR RODANDO...'));

// app.get      <= Para pedir informacoes para o servidor
// app.post     <= Enviar informacoes para o servidor
// app.delete   <= Pede para apagar algo do servidor
// app.put      <= Alterar alguma informacao no servidor (Completamente)
// app.patch    <= Alterar alguma informacao no servidor (Parte da entidade)

//C: CREATE (CRIAR) =  app.post
//R: READ (LER) = app.get
//U: UPDATE (ALTERAR/ATUALIZAR) = app.put / app.patch
//D: DELETE (APAGAR) = app.delete
