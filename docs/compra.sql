-- SQL do banco de dados de Inventários com apenas uma tabela
DROP DATABASE IF EXISTS compra;
CREATE DATABASE compra CHARSET=UTF8 COLLATE utf8_general_ci;
USE compra;
-- DDL Criação da estrutura da tabela
CREATE TABLE compra(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50) NOT NULL,
    descricao text,
    quantidade INT NOT NULL,
    imagem varchar(100) NOT NULL,
    valor decimal(10,2) not null
);
-- DML Popular a tabela com dados de teste
INSERT INTO compra (nome, descricao, quantidade, imagem, valor) VALUES 
    ('Maçãs', 'Maçãs Fuji orgânicas', 6,"maca.jpg",  12.00),
    ('Bananas', 'Bananas maduras', 4, "banana.jpg", 5.00),
    ('Carne', 'Coxão duro', 2, "carne.jpg", 40.00),
    ('Linguiça', 'Linguiça de porco',1, "linguica.jpg", 10.00),
    ('Frango', 'Peito de frango',3, "frango.jpg", 18.00);

SELECT SUM(valor) AS Total FROM compra;