import { Handler } from "./handler.js";

export class NomeHandler extends Handler {
    constructor() {
        super();
        this.field = 'NOME';
    }
  
    handle(processList, invalidProcessList) {
        for (let processo of processList){
            if(processo[this.field] !== "CORRETO"){
                processo.valid = false;
                processo.validationMessage = `O campo ${this.field} está incorreto.`;
                invalidProcessList.push(processo);
            }
            else{
                processo.valid = true;
            }
        }

        const validos = processList.filter(p => p.valid);
        processList.splice(0, processList.length, ...validos);
        return super.handle(processList, invalidProcessList);
    }
}