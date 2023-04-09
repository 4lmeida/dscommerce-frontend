<h1 align="center">DSCommerce</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=Yarn&message=Dependency manager&color=blue&style=for-the-badge&logo=yarn"/>
  <img src="https://img.shields.io/static/v1?label=Netlify&message=deploy&color=blue&style=for-the-badge&logo=netlify"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
   <img src="http://img.shields.io/static/v1?label=FASE&message=FRONTEND&color=GREEN&style=for-the-badge"/>
</p>

> Status do Projeto: ✔️ (Concluído)

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto-open_file_folder)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#layout-e-deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto :open_file_folder:


DSCommerce é uma sistema web de front-end e back-end construida ao longo da formação do curso "Formação Desenvolvedor Moderno" na [DevSuperior](https://devsuperior.com.br/cursos) que tem como objetivo aplicar os fundamentos da programação teóricos e páticos em uma aplicação de mercado, com as frameworks mais sólidas do mercado.

<p align="justify">
  A aplicação é baseada em um comercio eletrônico que você navega autenticado(logado) ou não logado, atráves dos produtos podendo adiciona-lo no carrinho, e finalizar o seu pedido mas, para finalazar o pedido você precisa está logado, e a aplicação disponibiliza dois tipo de acesso que é cliente ou admin. O admin pode realizando   cadastro, edição e exclusão de produtos na aplicação.
</p>

## Funcionalidades

:heavy_check_mark: No CRUD de cada entidade(categorias, produtos e usuários) filtra itens pelo nome.  

:heavy_check_mark: Incluir e remover itens do carrinho de compras, bem como alterar as quantidades do produto em cada item

:heavy_check_mark: Listar produtos disponíveis, podendo filtrar produtos pelo nome  

:heavy_check_mark: Efetuar login no sistema

:heavy_check_mark: Salvar no sistema um pedido a partir dos dados do carrinho de compras informado


## Layout e Deploy da Aplicação :dash:

> Link do deploy da aplicação. Netlify: https://dscommerce-l4.netlify.app

![]()



## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

:warning: [Yarn](https://classic.yarnpkg.com/en/)


## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/4lmeida/dscommerce-frontend/
```
```
# entrar na pasta do projeto dscommerce-frontend
cd dscommerce-frontend
```
```
# baixar as dependencias do dscommerce-frontend
yarn
```
```
# executar comando de rodar o projeto
yarn dev
```

## Casos de Uso

### Consultar catálogo (Cenário principal de sucesso)
1. [OUT] O sistema informa uma listagem paginada de nome, imagem e preço dos
produtos, ordenada por nome.
2. [IN] O usuário informa, opcionalmente, parte do nome de um produto
3. [OUT] O sistema informa a listagem atualizada

### Manter produtos (Cenário principal de sucesso)
1. Executar caso de uso: Consultar catálogo.
2. O admin seleciona uma das opções
 2.1. Variante Inserir
 2.2. Variante Atualizar
 2.3. Variante Deletar

### Login (Cenário principal de sucesso)
1. [IN] O usuário anônimo informa suas credenciais (nome e senha).
2. [OUT] O sistema informa um token válido.

### Gerenciar carrinho (Cenário principal de sucesso)
1. Executar caso de uso: Consultar catálogo.
2. [IN] O Usuário anônimo seleciona um produto.
3. [OUT] O sistema informa nome, preço, descrição, imagem, e nomes das categorias
do produto selecionado.
4. [IN] O Usuário anônimo informa que deseja adicionar o produto ao carrinho.
5. [OUT] O sistema informa os dados do carrinho de compras [1].
6. [IN] O Usuário anônimo informa, opcionalmente, que deseja incrementar ou
decrementar a quantidade de um item no carrinho de compras.
7. [ OUT] O sistema informa os dados atualizados do carrinho de compras [1].

### Registrar pedido (Cenário principal de sucesso)
1. [IN] O cliente informa os dados do carrinho de compras [1].
2. [OUT] O sistema informa os dados do carrinho de compras[1] e o id do pedido.

## Linguagens, dependencias e libs utilizadas :books:

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Yarn](https://classic.yarnpkg.com/en/)
- [Node](https://nodejs.org/en/download/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://yarnpkg.com/package/axios)
- [Effect Hook](https://legacy.reactjs.org/docs/hooks-effect.html)
- [useState](https://legacy.reactjs.org/docs/hooks-state.html)
- [React Select](https://react-select.com/home)
- [Biblioteca QS](https://yarnpkg.com/package/qs)
- [History](https://yarnpkg.com/package/history)
- [jwt-decode](https://yarnpkg.com/package/jwt-decode)


## Desenvolvedores/Contribuintes

| [<img src="https://avatars.githubusercontent.com/u/93017964?v=4" width=115><br><sub>Luís Almeida</sub>](https://github.com/4lmeida) |
| :---: |


## Licença 

The [MIT License](https://github.com/4lmeida/dscommerce-frontend/blob/main/LICENSE)(MIT)

Copyright :copyright: Ano - DSCommerce

:top: [Voltar para o top](#Tópicos)
