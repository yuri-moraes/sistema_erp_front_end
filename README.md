# Sistema ERP

Este projeto é uma aplicação web de ERP (Enterprise Resource Planning) desenvolvida para gerenciar diversos aspectos de uma empresa, com funcionalidades que incluem gerenciamento de usuários, grupos, funcionários e outros recursos empresariais. A aplicação conta com um front-end em React e um back-end em Django utilizando o Django REST Framework.

Acesse a aplicação através dos seguintes links:
- **Front-end**: [Clique aqui](https://sistema-erp-front-end.vercel.app/)
- **Back-end**: [Clique aqui](https://sistema-erp-tont.onrender.com)

## Acesso ao Sistema

Aqui estão as credenciais para acessar o sistema, ou se quiser, pode criar seu usuário á partir da Api ([Documentação](https://github.com/yuri-moraes/sistema_erp)):

  - Email: admin@user.com
  - Senha: Admin@123

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Front-end:**
  - React: Biblioteca para construção de interfaces de usuário.
  - MUI (Material UI): Framework para componentes de interface de usuário.
  - Axios: Cliente HTTP para realizar requisições à API.
  - Redux Toolkit: Gerenciamento de estado global da aplicação.
  - React Router: Biblioteca para gerenciar navegação entre páginas.
  - ApexCharts: Biblioteca de gráficos para exibição de dados.
  - TypeScript: Superset de JavaScript que adiciona tipagem estática.

- **Back-end:**
  - Django: Framework de desenvolvimento web em Python.
  - Django REST Framework: Extensão para construção de APIs RESTful.

- **Ferramentas e Utilitários:**
  - ESLint: Ferramenta de análise estática para identificar padrões problemáticos em JavaScript/TypeScript.
  - Prettier: Ferramenta de formatação de código.
  - NProgress: Biblioteca para mostrar barra de progresso durante carregamentos.

## Estrutura do Projeto

A aplicação é estruturada da seguinte forma:

- `src/`: Contém os arquivos principais do código-fonte do front-end.
  - `components/`: Componentes reutilizáveis da aplicação, como tabelas e formulários.
  - `router.tsx`: Configuração das rotas da aplicação.
  - `App.tsx`: Componente raiz da aplicação.

- `package.json`: Contém as dependências do projeto e scripts para execução e build.

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

- **Iniciar o servidor de desenvolvimento:**
  ```bash
  npm start
  ```
- **Gerar a versão de produção:**
  ```bash
  npm run build
  ```
- **Executar análise de código:**
  ```bash
  npm run lint
  ```
- **Corrigir problemas de formatação automaticamente:**
  ```bash
  npm run lint:fix
  ```

## Link do Front-end e Back-end

- Front-end: [Clique aqui para acessar](https://sistema-erp-front-end.vercel.app//)
- Back-end: [Clique aqui para acessar](https://sistema-erp-tont.onrender.com/) [Documentação](https://github.com/yuri-moraes/sistema_erp)
