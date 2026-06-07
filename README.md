# Pokédex TypeScript Lite

## Repositório

GitHub: https://github.com/mauriciofree/pokedex-typescript-lite

---

## Sobre o Projeto

O Pokédex TypeScript Lite é uma aplicação desenvolvida em Node.js com TypeScript que realiza consultas à PokeAPI e organiza os resultados em um catálogo local durante a execução do programa.

A aplicação permite buscar Pokémon por nome ou ID, transformar os dados recebidos da API em objetos simplificados e gerenciar um catálogo local com funcionalidades de adição, listagem e remoção de Pokémon.

---

## Objetivo

Este projeto tem como objetivo praticar os conceitos estudados no Módulo 01 do curso, incluindo:

- Node.js
- TypeScript
- Programação Orientada a Objetos
- Consumo de APIs REST
- JSON
- Interfaces e Tipagem
- Funções Assíncronas
- Promises
- Async/Await
- Tratamento de Erros
- Métodos de Arrays
- Git e GitHub
- GitFlow
- Kanban

---

## Tecnologias Utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub
- Trello (Kanban)

---

## Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

- Node.js
- npm
- Git

---

## Como Instalar

Clone o repositório:

```bash
git clone https://github.com/mauriciofree/pokedex-typescript-lite
```

Acesse a pasta do projeto:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install

---

## Como Executar

Executar em modo de desenvolvimento:

```bash
npm run dev
```

Compilar o projeto:

```bash
npm run build
```

---

## Funcionalidades

[A DEFINIR]

---

## Exemplos de Execução

[A DEFINIR]

## Estrutura do Projeto

```text
src/
├── main.ts
├── controllers/
│   └── TerminalController.ts
├── services/
│   ├── PokeApiService.ts
│   └── BoxService.ts
├── models/
│   ├── Pokemon.ts
│   └── CustomErrors.ts 
├── utils/
|   └── textFormatters.ts
├── pc_box.json
├── tsconfig.json
├── package.json
└── README.md
```

## Explicação dos Arquivos

### main.ts

Ponto de entrada da aplicação. Responsável por iniciar a execução do sistema e demonstrar o fluxo principal.

### models/

Contém as interfaces, tipos e classes utilizadas para representar os dados dos Pokémon.

### services/

Responsável pelas regras de negócio, integração com a PokeAPI e gerenciamento do catálogo.

### controllers/

Responsável pela comunicação com o usuário através do terminal.

### utils/

Funções auxiliares utilizadas em diferentes partes da aplicação.

### pc_box.json

Arquivo utilizado para armazenar os Pokémon cadastrados no catálogo local.

---

## Conceitos Aplicados

### TypeScript

O projeto foi desenvolvido utilizando TypeScript para adicionar tipagem estática ao código. Foram utilizados tipos em parâmetros de funções, retornos tipados, propriedades de objetos, arrays tipados e classes.

Exemplos:

* `nomeOuId: string`
* `Promise<PokemonResumo | null>`
* `PokemonResumo[]`

### Interface PokemonResumo

A interface `PokemonResumo` foi criada para representar uma versão simplificada dos dados de um Pokémon utilizados pela aplicação.

Ela contém os seguintes atributos:

* id
* nome
* tipos
* altura
* peso

Essa interface garante que todos os Pokémon armazenados no catálogo possuam a mesma estrutura.

### Interface PokemonApiResponse

A interface `PokemonApiResponse` foi utilizada para tipar os dados retornados pela PokeAPI. Apenas os campos necessários para a aplicação foram mapeados, evitando o uso excessivo de propriedades não utilizadas.

### Fetch e async/await

A consulta à PokeAPI é realizada através da função `fetch`, utilizando programação assíncrona com `async/await`.

O sistema envia uma requisição HTTP para a API, aguarda a resposta e transforma os dados recebidos em um objeto simplificado do tipo `PokemonResumo`.

### Tratamento de Erros

O tratamento de erros foi implementado através de blocos `try/catch`.

Quando um Pokémon inexistente é informado ou ocorre alguma falha na requisição, a aplicação exibe uma mensagem amigável no terminal e retorna `null`, evitando a interrupção da execução.

### Métodos de Array

Foram utilizados métodos de array para manipulação dos dados:

* `map()` para transformar os tipos retornados pela API em uma lista de nomes.
* `some()` para verificar se um Pokémon já existe no catálogo.
* `filter()` para remover Pokémon pelo ID.
* `forEach()` para exibir os Pokémon armazenados no catálogo.

### Classe CatalogoPokemon

A classe `CatalogoPokemon` foi criada para gerenciar o catálogo local da aplicação.

Atributos:

* `private pokemons: PokemonResumo[]`

Métodos:

* `adicionar()` – adiciona um Pokémon ao catálogo.
* `listar()` – exibe todos os Pokémon cadastrados.
* `remover()` – remove um Pokémon utilizando seu ID.

A classe também impede o cadastro de Pokémon duplicados através da validação do ID.

## Organização do Projeto

O gerenciamento das tarefas foi realizado utilizando a metodologia Kanban através do Trello.

### Quadro Kanban

Link do quadro:

https://trello.com/b/Jc1GFqR2/pok%C3%A9dex-typescript-lite

### Colunas Utilizadas

- Backlog
- A Fazer
- Em Andamento
- Concluído

### Principais Tarefas

- Criar repositório no GitHub
- Configurar projeto Node com TypeScript
- Criar package.json
- Criar tsconfig.json
- Criar src/main.ts
- Criar interface PokemonResumo
- Criar interface PokemonApiResponse
- Criar função buscarPokemon
- Usar fetch para consultar a PokeAPI
- Tratar erro de Pokémon inexistente
- Mapear resposta da API
- Criar classe CatalogoPokemon
- Criar método adicionar
- Bloquear Pokémon duplicado
- Criar método listar
- Criar método remover
- Usar pelo menos 3 métodos de array
- Testar fluxo no main.ts
- Atualizar README.md
- Registrar exemplos de execução no README
- Enviar links no AVA

---

## Fluxo de Versionamento

O projeto foi desenvolvido utilizando GitFlow simplificado.

### Branches Utilizadas

- main
- develop
- feat/pokedex
- docs/readme

### Exemplos de Commits Semânticos

```text
feat: configura projeto com typescript
feat: cria interfaces de pokemon
feat: implementa busca na pokeapi
feat: cria classe de catalogo
feat: adiciona validacao de duplicidade
fix: trata pokemon inexistente
docs: atualiza readme com instrucoes
```

---

## Melhorias Futuras

- Criar menu interativo no terminal
- Persistir dados em arquivo JSON
- Exibir estatísticas dos Pokémon
- Filtrar Pokémon por tipo
- Implementar testes automatizados
- Criar API REST utilizando Express

## Checklist final de entrega Antes de enviar no AVA, confira:

[x] Criei o repositório público no GitHub
[X] Configurei o projeto Node.js com TypeScript
[X] Criei o package.json
[X] Criei o tsconfig.json
[x] Criei o arquivo src/main.ts
[X] Criei uma interface ou type para PokemonResumo
[x] Criei uma interface simples para a resposta da PokeAPI
[x] Criei função assíncrona para buscar Pokémon
[x] Usei fetch
[x] Usei async/await
[x] Usei try/catch
[x] Tratei erro de Pokémon inexistente
[x] Transformei o retorno da API em objeto simples
[x] Criei catálogo local em array ou classe
[x] Criei função ou método para adicionar Pokémon
[x] Impedi Pokémon duplicado
[x] Criei função ou método para listar catálogo
[ ] Criei função ou método para remover Pokémon por ID
[ ] Usei pelo menos 3 métodos de array
[ ] Exibi mensagens claras no terminal
[ ] Testei o fluxo no main.ts
[ ] Atualizei o README.md
[ ] Incluí exemplos de execução no README
[ ] Criei quadro Kanban ou planejamento equivalente
[ ] Fiz commits no GitHub
[ ] Usei branches mínimas
[ ] Enviei o link do GitHub no AVA
[ ] Enviei o link do Kanban no AVA
[ ] Não deixei vídeo como item obrigatório

## Testes Realizados

Durante o desenvolvimento foram realizados testes para validar as principais funcionalidades da aplicação.

### Busca válida

Entrada testada:

```text
pikachu
```

Saída obtida:

```text
{ id: 25, nome: 'pikachu', tipos: [ 'electric' ], altura: 4, peso: 60 }
```

Resultado esperado: ✅

O Pokémon foi encontrado na PokeAPI e seus dados foram convertidos para o formato simplificado da aplicação.

Todos os teste foram feitos usando o comando:

```text
npm run dev
```

---

### Busca inválida

Entrada testada:

```text
pokemon-inexistente
```

Saída obtida:

```text
[ERRO] Pokémon não encontrado.
```

Resultado esperado: ✅

O sistema tratou corretamente a tentativa de busca de um Pokémon inexistente sem interromper a execução.

---

### Adição ao catálogo

Entrada testada:

```text
Adicionar Pikachu
```

Saída obtida:

```text
[OK] pikachu adicionado ao catálogo.
```

Resultado esperado: ✅

O Pokémon foi adicionado ao catálogo local.

---

### Prevenção de duplicidade

Entrada testada:

```text
Adicionar Pikachu novamente
```

Saída obtida:

```text
[AVISO] pikachu já está no catálogo.
```

Resultado esperado: ✅

A aplicação impediu o cadastro duplicado utilizando o ID do Pokémon.

---


### Listagem do catálogo - apenas 1 pokemon

Saída obtida:

```text
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

Resultado esperado: ✅

O Pokémon cadastrado foi exibido corretamente.

---

### Listagem do catálogo - 2 pokemons

Obs: Antes de listar novamente, foi executada a adição de um novo pokemon.

Saída obtida antes de Adicionar o novo pokemon:

```text
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

Saída obtida depois de Adicionar o novo pokemon:

```text
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```

Resultado esperado: ✅

Os Pokémons cadastrados foram exibidos corretamente.

---
