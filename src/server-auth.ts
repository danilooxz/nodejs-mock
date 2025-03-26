import express from 'express';
import { seedUsersStore, users } from './database';

const port = 3333;

const app = express();

app.use(express.json());

seedUsersStore();

app.post('/sessions', (request, response) => {
    const { email, password } = request.body;

    const user = users.get(email);
    if (!user || password !== user.password){
        return response.status(401).json({
            error: true,
            message: 'E-mail or password incorrect.',
        });
    }

    return response.json({
        token: 'teste',
        refreshToken: 'teste',
    }).send();

    // Pegar o usuário e senha
    // Buscar no banco o usuário
    // Erro 401 quando não encontrar o usuário
    // Descripitografar a senha
    // Verificar a senha informada com a senha do banco
    // Erro 401 quando a senha do usuário não é valida
    // Gerar o Token e o refresh Token
    // Retornar o Token e refresh Token

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});