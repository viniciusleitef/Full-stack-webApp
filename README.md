O projeto consiste em um sistema de autenticação que permite aos usuários se cadastrarem, fazerem login e acessarem áreas restritas da aplicação. Abaixo estão as principais funcionalidades e tecnologias utilizadas:

*Backend (FastAPI)*

  -Framework: FastAPI, baseado em Python, para criação de uma API RESTful.
  
  -Banco de Dados: PostgreSQL, interagindo com o backend através do SQLAlchemy.


  -*Funcionalidades:
  
    Cadastro de novos usuários.
    
    Login e verificação de credenciais.
    
    Geração de tokens JWT (JSON Web Tokens) para autenticação de usuários.
    
    Endpoints para recuperação de todos os usuários cadastrados e busca de usuário pelo e-mail.
    
  -Segurança: Implementação de práticas para garantir a segurança dos dados e das operações de autenticação.
  
*Frontend (React)*

  -Framework: React, com uso de React Router para gerenciamento de navegação.
  
  -*Funcionalidades:
  
    Páginas de registro, login e página inicial (restrita a usuários autenticados).
    
    Gerenciamento do estado de autenticação utilizando contextos do React.
    
    Requisições assíncronas utilizando Axios para comunicação com a API backend.
    
    Validação de formulários e exibição de mensagens de erro de forma responsiva.
    
*Estrutura do Repositório

  -backend/: Contém todo o código relacionado ao backend do projeto, desenvolvido com FastAPI e Python.
  
  -frontend/: Contém todo o código relacionado ao frontend do projeto, desenvolvido com React.
