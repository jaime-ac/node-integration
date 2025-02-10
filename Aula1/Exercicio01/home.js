// antes de começar a criar qualquer API, primeiro tem que iniciar com o comando "npm init -y" para configurar e salvar o package.json. Depois "npm install express" para instalar o express;

//aqui a gente chama/faz uma requisição ou habilita o express para poder usar ele
const express = require ("express");

//aqui a gente cria um aplicativo web usando o express
const app = express(); 

//criando uma porta para que o API acesse o banco de dados, ou seja, para rodar o BACKEND;
// const PORT = 3000; 

//app.get => server para
// req = requisição; res = resposta;
app.get("/exercicio01", (req, res) => {

    res.send("Funcionando..."); //enviar respostas

});

//inicia e "ouve" conexões em um caminho
app.listen(PORT,  () => {

    console.log(`Servidor rodando em http://localhost:${PORT}`)

})

