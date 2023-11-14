// Importa o framework Express, que é utilizado para facilitar a criação de servidores web em Node.js.
const express = require("express");

// Cria uma instância do aplicativo Express.
const app = express();

// Permite que o aplicativo Express analise dados no formato JSON que são enviados nas requisições.
app.use(express.json());

// Define uma rota para lidar com requisições do tipo POST na URL "/users".
app.post("/users", (request, response) => {
    // Extrai os dados do corpo da requisição, que são esperados estar no formato JSON.
    const { name, email, password } = request.body;

    // Retorna os dados recebidos como resposta no formato JSON.
    response.json({ name, email, password });
});

// Define a porta em que o servidor vai escutar as requisições. Neste caso, a porta é 3333.
const PORT = 3333;

// Inicia o servidor na porta especificada e exibe uma mensagem no console quando o servidor estiver rodando.
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
