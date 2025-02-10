const express = require('express'); 
const app = express();

let veiculos = [];

app.get('/veiculos', (req, res) => {
    res.json(veiculos);
});

//o <app.get> serve para pegar algum dado do meu conjunto de dados
app.get('/veiculos/:placa', (req, res) => {

    const {placa} = req.params;

    const veiculo = veiculos.find(v => v.placa === placa);

    if (veiculo){
        res.json(veiculo);
    }else{
        res.status(404).json({message: 'Veículo não encontrado.'});
    }
});

//o <app.post> serve para enviar dados ao meu conjunto de dados
app.post('/veiculos', (req, res) => {

    const {placa, marca, modelo, ano} = req.body;

    const veiculo = {placa, marca, modelo, ano};

    veiculos.push(veiculo);

    res.status(201).json({message: 'Veículo cadastrado com sucesso!!!'})
});

//o <app.put> serve para atualizar os dados de um elemento no meu conjunto de dados
app.put('/veiculos/:placa', (req, res) => {

    const {placa} = req.params;

    const {marca, modelo, ano} = req.body;

    const veiculo = veiculos.find(v =>v.placa === placa);

    if(veiculo){

        veiculo.marca = marca || veiculo.marca;

        veiculo.modelo = modelo || veiculo.modelo;

        veiculo.ano = ano || veiculo.ano;

        res.json({message: 'Informações do veículo atualizadas com sucesso!'});
    }
});

//o <app.delete> serve para deletar dados do meu conjunto de dados
app.delete('/veiculos/:placa', (req, res) => {
    
});