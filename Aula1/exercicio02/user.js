const express = require ("express");

const app = express();

const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

let usuarios = [];

// ✅ comando para criar um usuário e cadastrar ele;
app.post('/usuarios', (req, res) => {

    const {cpf, name, email} = req.body;

    const usuario = {cpf, name, email};

    usuarios.push(usuario);

    res.status(201).json({message: 'Usuário cadastro com sucesso!!!'})

});

// 🗒️ comando para listar todos os usuários do array
app.get('/usuarios', (req, res) => {

    res.json(usuarios);

});

// 🔍 comando para buscar um usuário pelo ID
app.get('/usuarios/:id', (req, res) => {

    const {cpf} = req.params;

    const usuario = usuarios.find(u => u.cpf === cpf);

    if (usuario){

        res.json(usuario);

    }else{

        res.status(404).json({message: 'Usuário não encontrado...'});

    };

});

// ✏️ comando para atualizar um usuário
app.put('/usuarios/:id', (req, res) => {

    const {cpf} = req.params;

    const {name, email} = req.body;

    const usuario = usuarios.find(u => u.cpf === cpf);

    if(usuario){

        usuario.name = name || usuario.name;
        usuario.email = email || usuario.email;

        res.json({message: 'Informações do usuário atualizadas com sucesso!'})

    }else{

        res.status(404).json({message: 'Usuário não encontrado...'})

    };

});

// ❌ comando para deletar algum usuário
app.delete('/usuarios/:id', (req, res) => {

    const {cpf} = req.params;

    const indice = usuarios.findIndex(u => u.cpf === cpf);

    if (indice !== -1){

        const usuarioRemovido = usuarios.splice(indice, 1);
        res.json({message: 'Usuário removido com sucesso!', usuario: usuarioRemovido[0]})

    }else{

        res.status(404).json({message: 'Usuário não encontrado...'});

    }

});


// 🚀 Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/usuarios`);
});