const express= require('express');
const app = express();
app.get('/', function rotas(req,res){
    res.send('Bem vindo ao Neo Bank');
})
app.listen(300, function imprimirNoTerminal(){
    console.log('Servidor rodando na porta 300');
})