import { Handler } from "./handler.js";

export class CnjHandler extends Handler {
    constructor() {
        super();
        this.field = 'CNJ';
    }
  
    handle(processList, invalidProcessList) {
        for (let processo of processList){
            if(!processo[this.field] || processo[this.field].toString().trim() === ''){
                processo.valid = false;
                processo.validationMessage = `O campo ${this.field} está vazio.`;
                invalidProcessList.push(processo);
            }
            else if (processo[this.field].split('.').length != 3 && processo[this.field].split('-').length != 2){
                processo.valid = false;
                processo.validationMessage = `O campo ${this.field} [${processo[this.field]}] está com partes faltantes.`;
                invalidProcessList.push(processo);
            }
            /*
                E assim por diante com todas as validações pertinentes ao CNJ
            */
            else{
                processo.valid = true;
            }
        }

        const validos = processList.filter(p => p.valid);
        processList.splice(0, processList.length, ...validos);
        return super.handle(processList, invalidProcessList);
    }
}