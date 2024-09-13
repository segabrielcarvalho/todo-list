# To-Do List Application

## Descrição

Este é um projeto de **To-Do List** criado com **Next.js 14** e **Tailwind CSS**. O objetivo deste projeto é fornecer uma aplicação simples e interativa onde os usuários possam adicionar, marcar como concluídas e deletar tarefas. A aplicação é projetada para ser fácil de entender, escalar e modificar.

## Tecnologias Utilizadas

- **Next.js 14**: Um framework de React para desenvolvimento web moderno.
- **Tailwind CSS**: Um framework de CSS utilitário que facilita a criação de interfaces de usuário com estilos consistentes.

## Funcionalidades

- **Adicionar Tarefa**: Adicione novas tarefas à lista.
- **Marcar Tarefa como Concluída**: Clique em uma tarefa para marcar/desmarcar como concluída.
- **Excluir Tarefa**: Remova tarefas da lista.
- **Interface Responsiva**: A aplicação é responsiva, oferecendo uma boa experiência em dispositivos móveis e desktops.

## Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado na sua máquina:

- **Node.js** (recomendado: versão 20.x ou superior)
- **pnpm** (recomendado: versão 9.10.x ou superior)

## Instruções de Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/segabrielcarvalho/todo-list.git
   cd todo-list
   ```

````

2. **Instale as dependências:**

   ```bash
   pnpm install
   ```

3. **Execute o Servidor de Desenvolvimento:**

   Inicie o servidor de desenvolvimento com o comando:

   ```bash
   pnpm dev
   ```

   Acesse `http://localhost:3000` no seu navegador para ver o aplicativo em ação.

## Estrutura do Projeto

```plaintext
todo-list/
├── components/
│   └── TodoList.jsx     # Componente da lista de tarefas
├── pages/
│   └── index.jsx        # Página principal que utiliza o componente ToDoList
├── public/
│   └── ...              # Arquivos públicos, como imagens ou ícones
├── styles/
│   └── globals.css      # Estilos globais com Tailwind CSS
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js   # Configuração do Tailwind CSS
```

## Uso

### Adicionar Tarefa

- Digite o texto da tarefa no campo de entrada e clique no botão **"Add"** para adicionar a tarefa à lista.

### Marcar Tarefa como Concluída

- Clique no texto da tarefa para marcá-la como concluída. A tarefa será tachada e mudará de cor para indicar a conclusão.

### Excluir Tarefa

- Clique no botão **"Delete"** ao lado da tarefa que deseja remover da lista.

## Personalização

Este projeto pode ser facilmente personalizado e estendido para atender às suas necessidades. Abaixo estão algumas sugestões:

- **Adicionar Filtragem de Tarefas**: Filtre as tarefas por "Todas", "Concluídas" ou "Pendentes".
- **Integração com Backend**: Conecte a aplicação a um backend para persistir as tarefas.
- **Notificações e Alertas**: Adicione notificações para ações como "Tarefa adicionada", "Tarefa removida", etc.

## Contribuição

Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie um branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça o commit de suas alterações (`git commit -m 'Adicionei nova feature'`).
4. Envie para o branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.

- **Seu Nome** - [gabrielcarvalho.profissional@hotmail.com](mailto:gabrielcarvalho.profissional@hotmail.com)
- **GitHub**: [https://github.com/segabrielcarvalho](https://github.com/segabrielcarvalho)

```
````
