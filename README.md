# Desafio 01. Conceitos do NodeJS

Essa aplicação será utilizada para armazenar projetos e suas tarefas.

## Rotas

- `POST /projects`: Recebe id e title dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: "Novo projeto", tasks: [] };

- `GET /projects`: Lista todos os projetos e suas tarefas;

- `PUT /projects/:id`: Altera apenas o título do projeto com o id presente nos parâmetros da rota;

- `DELETE /projects/:id`: Deleta o projeto com o id presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: Recebe um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: "1", title: "Novo projeto" }` e a rota `POST /projects/1/tasks` com `{ title: "Nova tarefa" }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: 'Novo projeto',
    tasks: ['Nova tarefa']
  }
]
```

Link do desafio: https://github.com/Rocketseat/bootcamp-gostack-desafio-01
