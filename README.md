# API de Consultas Médicas

## Descrição

Esta é uma API para gerenciar consultas médicas, permitindo a criação, leitura, atualização e exclusão de consultas. A API foi desenvolvida utilizando Node.js e MySQL.

## Funcionalidades

- **Criar Consulta**: Permite criar uma nova consulta médica.
- **Listar Consultas**: Retorna uma lista de todas as consultas médicas cadastradas.
- **Pesquisar Consultas**: Permite encontrar uma consulta especifica
- **Atualizar Consulta**: Permite atualizar os detalhes de uma consulta médica existente.
- **Excluir Consulta**: Permite excluir uma consulta médica existente.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL
- Docker
- Dotenv

## Instalação

Para instalar e executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/API-DE-CONSULTAS.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd API-DE-CONSULTAS
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Configure as variáveis de ambiente:
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=sua-senha
    DB_NAME=nome-do-banco
    ```

5. Inicie o servidor:
    ```sh
    npm start
    ```

## Rotas da API

### Criar Consulta

- **URL**: `/consulta`
- **Método**: `POST`
- **Corpo da Requisição**:
    ```json
    {
        "name": "Nome do Paciente",
        "idade": "Idade do Paciente",
        "hospital": "Hospital da Consulta",
        "medico": "Nome do Médico",
        "data": "Data desejada",
        "horario": "Horario desejado"
    }
    ```
- **Resposta**:
    ```json
    {
        "id": 1,
        "name": "Nome do Paciente",
        "idade": "Idade do Paciente",
        "hospital": "Hospital da Consulta",
        "medico": "Nome do Médico",
        "data": "Data desejada",
        "horario": "Horario desejado"
    }
    ```

### Listar Consultas

- **URL**: `/consulta`
- **Método**: `GET`
- **Resposta**:
    ```json
    [
        {
          "id": 1,
          "name": "Nome do Paciente",
          "idade": "Idade do Paciente",
          "hospital": "Hospital da Consulta",
          "medico": "Nome do Médico",
          "data": "Data desejada",
          "horario": "Horario desejado"
        },
        ...
    ]
    ```

    ### Pesquisar Consultas

- **URL**: `/consulta/:name`
- **Método**: `GET`
- **Resposta**:
    ```json
    [
        {
          "id": 1,
          "name": "Nome do Paciente",
          "idade": "Idade do Paciente",
          "hospital": "Hospital da Consulta",
          "medico": "Nome do Médico",
          "data": "Data desejada",
          "horario": "Horario desejado"
        },
        ...
    ]
    ```

### Atualizar Consulta

- **URL**: `/consulta/:id`
- **Método**: `PUT`
- **Corpo da Requisição**:
    ```json
    {
       "id": 1,
        "name": "Nome do Paciente",
        "idade": "Idade do Paciente",
        "hospital": "Hospital da Consulta",
        "medico": "Nome do Médico",
        "data": "Data desejada",
        "horario": "Horario desejado"
    }
    ```
- **Resposta**:
    ```json
    {
       "id": 1,
        "name": "Nome do Paciente",
        "idade": "Idade do Paciente",
        "hospital": "Hospital da Consulta",
        "medico": "Nome do Médico",
        "data": "15:00",
        "horario": "Horario desejado"
    }
    ```

### Excluir Consulta

- **URL**: `/consultas/:id`
- **Método**: `DELETE`
- **Resposta**:
    ```json
    {
        "message": "Consulta excluída com sucesso"
    }
    ```

## Contribuição

Se você quiser contribuir com este projeto, sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
