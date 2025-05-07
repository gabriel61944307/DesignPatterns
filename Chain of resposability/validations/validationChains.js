import { CnjHandler, IdIntimacaoHandler, NomeHandler } from "../handlers/Index.js";

function validateProcessFields(processos, processosInvalidos){
    const cnjHandler = new CnjHandler();
    const inIntimacaoHandler = new IdIntimacaoHandler();
    const nomeHandler = new NomeHandler();

    cnjHandler
        .setNext(inIntimacaoHandler)
        .setNext(nomeHandler);

    cnjHandler.handle(processos, processosInvalidos);
}

function validateProcessFieldsSoNome(processos, processosInvalidos){
    const nomeHandler = new NomeHandler();

    nomeHandler.handle(processos, processosInvalidos);
}

function validateProcessFieldsOrdemDiferente(processos, processosInvalidos){
    const cnjHandler = new CnjHandler();
    const inIntimacaoHandler = new IdIntimacaoHandler();
    const nomeHandler = new NomeHandler();

    nomeHandler
        .setNext(inIntimacaoHandler)
        .setNext(cnjHandler);

    nomeHandler.handle(processos, processosInvalidos);
}

export { validateProcessFields, validateProcessFieldsSoNome, validateProcessFieldsOrdemDiferente}

/*  Poderiam ser definidas mais funções de validação com propósitos diferentes.
    Por exemplo em ordens diferentes ou com menos campos a serem validados ou campos diferentes a serem validados para abas diferentes.

    Validar campos que estão mais comumente incorretos antes diminui o tempo de validação pois
    campos validados como falsos uma vez não são mais verificados.
    
    É possível quebrar infinitamente as verificações, por exemplo fazer com que o elo inicial da corrente de verificações verifique apenas
    se os campos obrigatórios estão preenchidos e sempre usar esse handler como primeiro handler da corrente.
    */