# API de Games
Esta API realiza a listagem de games, bem como o cadastro, edição e leitura de games cadastrados nessa mesma lista.

O banco de dados é um array de objetos, onde cada objeto contendo informações, como o nome, ano de publicação e preço de cada um dos jogo cadastrados. Sendo assim, não possui nenhum banco de dados real.

## Endpoints

### GET /games
Traz a listagem de jogos já cadastrados.
#### Parâmetros
Nenhum
#### Respostas
##### OK 200
Caso essa resposta aconteça você vai receber a listagem de todos os games.

Exemplo de resposta:
```json
[
    {
        "id": 1,
        "title": "Call of Duty MW",
        "year": 2019,
        "price": 60
    },
    {
        "id": 2,
        "title": "Sea of Thieves",
        "year": 2018,
        "price": 40
    },
    {
        "id": 3,
        "title": "Minecraft",
        "year": 2012,
        "price": 20
    }
]
```
##### Falha na autenticação 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante a autenticaçao da
requisição. Motivos: Token inválido ou token expirado.

Exemplo de resposta:
```json
{
    "error": "Token inválido"
}
```


### POST /auth
Faz o processor de login.
#### Parâmetros
email: Email do usuário cadastrado no sistema.

password: Senha do usuário cadastrado no sistema.

Exemplo de requisição:

```json
{
    "email":"tobias@gmail.com"
    "password":"tobais_123"
}
```
OBS: Se estiver usando o Postman, enviar os dados via <strong>x-www-form-urlencoded e sem as aspas</strong>.
#### Respostas
##### OK 200
Caso essa resposta aconteça, você receberá um token.

Exemplo de resposta:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b2JpYXNAZ21haWwuY29tIiwiaWF0IjoxNjQ0MTA4MzI2LCJleHAiOjE2NDQyODExMjZ9._4Zen67fjiZUGCiTCFaoiHxjYRN2SOtcVHKYgH44INg"
}
```
##### Sintaxe inválida 400
Caso essa resposta aconteça, isso significa que há algo de errado nos identificados/nomes dos parâmetros.

Exemplo de resposta:
```json
{
    "error": "Dados inválidos."
}
```
##### Não autorizado 401
Caso essa resposta aconteça, isso significa que o valor da senha (password) está errada.

Exemplo de resposta:
```json
{
    "error": "Credenciais erradas."
}
```
##### Usuário não foi encontrado
Caso essa resposta aconteça, isso significa que não há usuário cadastrado na lista de pessoas autorizadas que tenha as credenciais passadas.

Exemplo de resposta:
```json
{
    "error": "Usuário não encontrado."
}
```
##### Falha na geração do token
Caso essa resposta acontaça, isso significa que um erro interno ocorreu durante a assinatura do token pelo JWT.

Exemplo de resposta:
```json
{
    "error": "Falha interna."
}
```
