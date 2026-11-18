# Sudoku Binário 6×6

## 1. Especificação do desafio

O Sudoku Binário, também conhecido como Takuzu ou Binairo, é um jogo de lógica cujo objetivo é preencher um tabuleiro utilizando apenas os números `0` e `1`, respeitando determinadas regras.

Neste projeto, foi considerada uma versão com tabuleiro de 6 linhas por 6 colunas.

### Regras do jogo

- O tabuleiro deve possuir exatamente 6 linhas e 6 colunas.
- Cada posição deve conter `0`, `1` ou `null`, representando uma posição vazia.
- Não podem existir três números iguais consecutivos na horizontal ou na vertical.
- Cada linha e coluna completa deve possuir exatamente três zeros e três uns.
- Uma linha completa não pode ser idêntica a outra linha completa.
- Uma coluna completa não pode ser idêntica a outra coluna completa.
- Linhas e colunas incompletas podem possuir posições vazias, desde que não violem as demais regras.
- A partida só é considerada concluída quando todas as posições estão preenchidas e todas as regras são respeitadas.

## 2. Funcionamento dos casos de teste

Foram definidos 33 casos de teste, identificados de SB01 até SB33, para verificar diferentes situações do jogo.

Cada caso possui:
- **Nome:** identificação do cenário testado.
- **Tabuleiro:** estrutura utilizada como entrada.
- **Resultado esperado:** indica se o cenário deve ser considerado válido ou inválido.

A função de execução compara o resultado esperado com o resultado obtido pela implementação.

Se os resultados forem iguais, o teste é aprovado. Caso contrário, é reprovado, exibindo no terminal o resultado esperado e o resultado obtido.

Ao final, é apresentado um resumo com a quantidade total de testes, aprovados e reprovados.

### Relação dos 33 casos de teste

| Identificador | Descrição do cenário |
|---|---|
| SB01 | Tabuleiro completo válido |
| SB02 | Tabuleiro incompleto válido |
| SB03 | Tabuleiro com menos de 6 linhas |
| SB04 | Tabuleiro com mais de 6 linhas |
| SB05 | Linha com menos de 6 colunas |
| SB06 | Linha com mais de 6 colunas |
| SB07 | Tabuleiro com valor diferente de 0 e 1 |
| SB08 | Mais de três uns em uma linha |
| SB09 | Mais de três uns em uma coluna |
| SB10 | Três zeros consecutivos na horizontal |
| SB11 | Três uns consecutivos na horizontal |
| SB12 | Três zeros consecutivos na vertical |
| SB13 | Três uns consecutivos na vertical |
| SB14 | Duas linhas completas idênticas |
| SB15 | Duas colunas completas idênticas |
| SB16 | Três zeros consecutivos em tabuleiro incompleto |
| SB17 | Mais de três zeros em uma linha incompleta |
| SB18 | Mais de três uns em uma coluna incompleta |
| SB19 | Tabuleiro completamente vazio |
| SB20 | Tabuleiro com valor textual |
| SB21 | Partida concluída com tabuleiro válido |
| SB22 | Tentativa de concluir partida com posição vazia |
| SB23 | Três zeros consecutivos |
| SB24 | Tabuleiro com valor decimal |
| SB25 | Tabuleiro com valor booleano |
| SB26 | Uma linha completamente vazia |
| SB27 | Uma coluna completamente vazia |
| SB28 | Duas linhas parcialmente preenchidas idênticas |
| SB29 | Duas linhas completas idênticas |
| SB30 | Tabuleiro inexistente |
| SB31 | Tabuleiro com uma linha inexistente |
| SB32 | Tabuleiro com uma posição inexistente |
| SB33 | Tabuleiro em formato inválido |

### Validade do tabuleiro e vitória

É importante diferenciar a validação do tabuleiro da verificação de vitória.

Um tabuleiro incompleto pode ser válido quando respeita as regras do jogo. Entretanto, ele não representa uma partida concluída.

Por isso, os cenários de validação e os cenários de conclusão da partida devem ser tratados separadamente.

## 3. Tecnologias utilizadas

- **JavaScript:** linguagem utilizada para estruturar os casos de teste e implementar as verificações.
- **Node.js:** ambiente utilizado para executar os testes.
- **Git:** ferramenta de controle de versão.
- **GitHub:** plataforma de armazenamento e acompanhamento do projeto.

## 4. Como executar os testes

Para executar os testes, é necessário possuir o Node.js instalado.

1. Clone o repositório.
2. Abra a pasta do projeto no terminal.
3. Execute:

```bash
npm install
```

4. Execute os testes:

```bash
npm test
```

5. Verifique no terminal os resultados e o resumo da execução.

## 5. Colaborador

**Desenvolvedor:** Guilherme Luvizutto

Projeto desenvolvido individualmente como atividade acadêmica da disciplina de Testes de Software.
