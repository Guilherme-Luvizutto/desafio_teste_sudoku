let totalTestes = 0;
let testesPassaram = 0;
let testesFalharam = 0;

function executarTeste(nome, resultadoEsperado, resultadoObtido) {
    totalTestes++;

    if (resultadoEsperado === resultadoObtido) {
        testesPassaram++;
        console.log(`✅ PASSOU: ${nome}`);
    } else {
        testesFalharam++;
        console.log(`❌ FALHOU: ${nome}`);
        console.log(`Esperado: ${resultadoEsperado}`);
        console.log(`Obtido: ${resultadoObtido}`);
    }
}

function exibirResumo() {
    console.log("\n========== RESUMO DOS TESTES ==========");
    console.log(`Total: ${totalTestes}`);
    console.log(`Aprovados: ${testesPassaram}`);
    console.log(`Reprovados: ${testesFalharam}`);
}

const SB01 = {
    nome: "Tabuleiro completo válido",
    tabuleiro: [
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0]
    ],
    esperado: true
};

const SB02 = {
    nome: "Tabuleiro incompleto válido",
    tabuleiro: [
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, null, 1, 0, 1],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0]
    ],
    esperado: true
};

const SB03 = {
    nome: "Tabuleiro com menos de 6 linhas",
    tabuleiro: [
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0]
    ],
    esperado: false
};

const SB04 = {
    nome: "Tabuleiro com mais de 6 linhas",
    tabuleiro: [
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0],
        [1, 0, 1, 0, 1, 0]
    ],
    esperado: false
};

const SB05 = {
    nome: "Linha com menos de 6 colunas",
    tabuleiro: [
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0]
    ],
    esperado: false
};

const SB06 = {
    nome: "Linha com mais de 6 colunas",
    tabuleiro: [
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0]
    ],
    esperado: false
};

const SB07 = {
    nome: "Tabuleiro com valor diferente de 0 e 1",
    tabuleiro: [
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 2, 1, 0, 1],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0]
    ],
    esperado: false
};

const SB08 = {
    nome: "Mais de três uns em uma linha",
    tabuleiro: [
        [1, 1, 0, 1, 1, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB09 = {
    nome: "Mais de três uns em uma coluna",
    tabuleiro: [
        [1, null, null, null, null, null],
        [1, null, null, null, null, null],
        [null, null, null, null, null, null],
        [1, null, null, null, null, null],
        [1, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB10 = {
    nome: "Três zeros consecutivos na horizontal",
    tabuleiro: [
        [0, 0, 0, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB11 = {
    nome: "Três uns consecutivos na horizontal",
    tabuleiro: [
        [1, 1, 1, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB12 = {
    nome: "Três zeros consecutivos na vertical",
    tabuleiro: [
        [0, null, null, null, null, null],
        [0, null, null, null, null, null],
        [0, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB13 = {
    nome: "Três uns consecutivos na vertical",
    tabuleiro: [
        [1, null, null, null, null, null],
        [1, null, null, null, null, null],
        [1, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB14 = {
    nome: "Duas linhas completas idênticas",
    tabuleiro: [
        [1, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1]
    ],
    esperado: false
};

const SB15 = {
    nome: "Duas colunas completas idênticas",
    tabuleiro: [
        [1, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 1],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 1, 0]
    ],
    esperado: false
};

const SB16 = {
    nome: "Três zeros consecutivos em tabuleiro incompleto",
    tabuleiro: [
        [0, 0, 0, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB17 = {
    nome: "Mais de três zeros em uma linha incompleta",
    tabuleiro: [
        [0, 0, 1, 0, 0, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB18 = {
    nome: "Mais de três uns em uma coluna incompleta",
    tabuleiro: [
        [1, null, null, null, null, null],
        [1, null, null, null, null, null],
        [0, null, null, null, null, null],
        [1, null, null, null, null, null],
        [1, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB19 = {
    nome: "Tabuleiro completamente vazio",
    tabuleiro: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: true
};

const SB20 = {
    nome: "Tabuleiro com valor textual",
    tabuleiro: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, "1", null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB21 = {
    nome: "Partida concluída com tabuleiro válido",
    tabuleiro: [
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0]
    ],
    esperado: true
};

const SB22 = {
    nome: "Concluir partida com posição vazia",
    tabuleiro: [
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, null]
    ],
    esperado: false
};

const SB23 = {
    nome: "Três zeros consecutivos",
    tabuleiro: [
        [0, 0, 0, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB24 = {
    nome: "Tabuleiro com valor decimal",
    tabuleiro: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, 0.5, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB25 = {
    nome: "Tabuleiro com valor booleano",
    tabuleiro: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, true, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB26 = {
    nome: "Uma linha completamente vazia",
    tabuleiro: [
        [null, null, null, null, null, null],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 0]
    ],
    esperado: true
};

const SB27 = {
    nome: "Uma coluna completamente vazia",
    tabuleiro: [
        [null, 0, 1, 0, 0, 1],
        [null, 1, 0, 1, 1, 0],
        [null, 0, 0, 1, 0, 1],
        [null, 1, 1, 0, 0, 1],
        [null, 0, 1, 0, 1, 0],
        [null, 1, 0, 1, 1, 0]
    ],
    esperado: true
};

const SB28 = {
    nome: "Duas linhas parcialmente preenchidas idênticas",
    tabuleiro: [
        [0, 1, null, 0, null, 1],
        [null, null, null, null, null, null],
        [0, 1, null, 0, null, 1],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: true
};

const SB29 = {
    nome: "Duas linhas completas idênticas",
    tabuleiro: [
        [0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB30 = {
    nome: "Tabuleiro inexistente",
    tabuleiro: null,
    esperado: false
};

const SB31 = {
    nome: "Tabuleiro com uma linha inexistente",
    tabuleiro: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        undefined,
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB32 = {
    nome: "Tabuleiro com uma posição inexistente",
    tabuleiro: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, undefined, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    esperado: false
};

const SB33 = {
    nome: "Tabuleiro em formato inválido",
    tabuleiro: {
        linha1: [0, 1, 0, 1, 0, 1],
        linha2: [1, 0, 1, 0, 1, 0]
    },
    esperado: false
};