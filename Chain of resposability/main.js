import { validateProcessFields } from "./validations/validationChains.js";
import { validateProcessFieldsSoNome } from "./validations/validationChains.js";
import { validateProcessFieldsOrdemDiferente } from "./validations/validationChains.js";

const processos = [
    { CNJ: '123.456.789-00', ID_INTIMACAO: '123456', NOME: 'CORRETO' },
    { CNJ: '' , ID_INTIMACAO: '123456789'},
    { CNJ: 'invalido-sem-formatacao', ID_INTIMACAO: '123456101'},
    { CNJ: '111.477.729-X', ID_INTIMACAO: '1'},
    { CNJ: '222.444.888-0', ID_INTIMACAO: '1234567891011', NOME: 'GABRIEL'},
    { CNJ: '222.444.888-0', ID_INTIMACAO: '1234567891011', NOME: 'CORRETO'},
    { CNJ: '222.444.888-0', ID_INTIMACAO: '1234567891011', NOME: 'MALAQUIAS'},
];

const processosInvalidos = [];

validateProcessFields(processos, processosInvalidos);
// validateProcessFieldsSoNome(processos, processosInvalidos);
// validateProcessFieldsOrdemDiferente(processos, processosInvalidos);

console.log("PROCESSOS VALIDOS:");
console.log(JSON.stringify(processos, null, 2));
console.log("PROCESSOS INVALIDOS:");
console.log(JSON.stringify(processosInvalidos, null, 2));