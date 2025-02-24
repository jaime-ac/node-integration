CREATE TABLE usuarios (
	cpf varchar PRIMARY KEY NOT NULL,
	nome varchar(50) NOT NULL,
	senha varchar(6) NOT NULL	
);

INSERT INTO usuarios VALUES('63595482329', 'Jaime', '123456');

SELECT * FROM usuarios;
