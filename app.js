const express = require('express');

const app = express();

app.get ('/', (req, res) =>{

    res.send('Página Home a ser exibida!');
});

app.listen(4000, () => console.log('SERVIDOR RODANDO...'));
