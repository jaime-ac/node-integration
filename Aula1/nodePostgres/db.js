//função assincrona permite que várias operações sejam executadas de forma simultânea sem bloquear a execução de outras tarefas;
async function connect(){ 

    if(global.connection){ //Verifica se já existe uma conexão global com o banco de dados

        //Evita criar múltiplas conexões: Se já houver uma conexão existente (global.connection), apenas a reutiliza.
        return global.connection.connect();

    }

    //O Pool é recomendado para aplicações web, pois gerencia conexões de forma eficiente.
    const { Pool } = require("pg");

    // Configuração da conexão com PostgreSQL, ou seja, estou passando as informações de acesso ao meu banco de dados ao variável {pool}
    const pool = new Pool ({

        //estou pegando toda informação do meu banco que está armazenado na variável {CONNECTION_STRING};
        connectionString:process.env.CONNECTION_STRING // Usa a URL do banco diretamente

    });

    //estabelece a conexão com o banco de dados;
    const client = await pool.connect(); 
    console.log("Foi criado o pool de conexão!");

    //pega a hora exata da conexão;
    const res = await client.query("select now()"); 
    console.log("Horário: ", res.rows[0]); 

    //libera a conexão com o banco de dados de volta para o pool de conexões.
    client.release(); 

    //está atribuindo o objeto pool à variável global connect no Node.js
    global.connect = pool; 

    return pool.connect(); 
};

//chamar a função connect;
connect(); 

async function selectCustomers() {
    
    const client = await connect();
    const res = await client.query("SELECT * FROM users");
    return res.rows;
    
}

//chamar a função selectCustomers;
selectCustomers();