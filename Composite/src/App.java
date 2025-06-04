import Produtos.Acao;
import Produtos.Contrato;
import Produtos.Fundo;
import Produtos.IComponente;

public class App {
    public static void main(String[] args) throws Exception {
        IComponente acao1 = new Acao("PETR4", "Ações da Petrobras.");
        IComponente acao2 = new Acao("VALE3", "Ações da Vale.");
        IComponente contrato1 = new Contrato("IPCA+%", "Renda fixa atrelada ao IPCA.");
        IComponente contrato2 = new Contrato("SELIC+%", "Renda fixa atrelada a SELIC.");

        Fundo fundo1 = new Fundo();
        fundo1.adicionar(acao1);
        fundo1.adicionar(contrato1);

        Fundo fundo2 = new Fundo();
        fundo2.adicionar(acao2);
        fundo2.adicionar(contrato2);

        fundo1.adicionar(fundo2);

        System.out.println("Total do fundo: " + fundo1.getTotal());
    }
}
