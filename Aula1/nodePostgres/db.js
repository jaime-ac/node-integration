async function connect(){

    if(global.connection){
        return global.connection.connect();
    }

    //O Pool é recomendado para aplicações web, pois gerencia conexões de forma eficiente.
    const { Pool } = require("pg");

    // Configuração da conexão com PostgreSQL, ou seja, estou passando as informações de acesso ao meu banco de dados ao variável {pool}
    const pool = new Pool ({

        //estou pegando toda informação do meu banco que está armazenado na variável {CONNECTION_STRING};
        connectionString:process.env.CONNECTION_STRING // Usa a URL do banco diretamente

        //esse seria o jeito de passar informações caso eu não tivesse definido tudo na variável {CONNECTION_STRIN} no .env
        // DB_USER=postgres
        // DB_HOST=localhost
        // DB_NAME=meubanco
        // DB_PASS=senha
        // DB_PORT=5432

    });

    const client = await pool.connect(); //estabelece a conexão com o banco de dados;
    console.log("Foi criado o pool de conexão!");

    const res = await client.query("select now()");

    console.log("Horário: ",res.rows[0]);

    client.release();

    return client.connect();
};

module.exports = connect;