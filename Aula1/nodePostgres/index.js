// é usada para carregar variáveis de ambiente definidas em um arquivo .env para o process.env dentro da aplicação Node.js. Permite armazenar informações sensíveis como chaves de API, credenciais de banco de dados e configurações sem expô-las diretamente no código.
require("dotenv").config();

//guarda as informações do meu bd na variável ${port}, tais informações foram criadas no arquivo '.env', ele guarda as informações de acesso ao meu bd;
const port = process.env.PORT || 3000;

const db = require("./db");

// Importa o Express
const express = require("express"); 

// Cria a aplicação Express, é a base para qualquer aplicação Express. Ele cria a instância do servidor onde você pode definir rotas, middlewares e outras configurações.
const app = express(); 

// Middleware para interpretar JSON
app.use(express.json()); 

//Inicia o servidor na porta definida.
app.listen(port); 
console.log(`Backend rodando na porta ${port}`)



//🗒️pegar ou listar meus dados;
app.get("/", (req, res) =>{

    res.json({
        message: "Funcionando!"
    });

});

// ✏️criar uma rota
app.get("/users", (req, res) => {

    const usuario = await db.selectCustomers();
    res.json(usuario);

});