const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'dbnode',
});

app.get('/', (req, res) => {

  //insere um nome em people
  const insert = 'INSERT INTO people (name) VALUES (?)';
  const nome = 'Samuca Santos'

  connection.query(insert, [nome], (error, results) => {
    if (error) {
      res.status(500).send(`Erro ao inserir registro na tabela "people": ${error.message}`);
    }
  });

  //busca todos os registros 
  const query = 'SELECT * FROM people';

  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send(`Erro ao buscar registros na tabela "people": ${error.message}`);
    } else {
      const peopleList = results.map((person) => person.name).join(', ');
      const htmlResponse = `<h1>Full Cycle Rocks!</h1><p>${peopleList}</p>`;
      res.send(htmlResponse);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

