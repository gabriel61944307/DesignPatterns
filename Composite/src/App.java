import java.math.BigDecimal;
import java.math.RoundingMode;

import Produtos.Acao;
import Produtos.Contrato;
import Produtos.Fundo;
import Produtos.IComponente;

public class App {
    public static void main(String[] args) throws Exception {
        IComponente acao1 = new Acao("PETR4", "Ações da Petrobras.", 15, new BigDecimal(2.5564));
        IComponente acao2 = new Acao("VALE3", "Ações da Vale.", 8, new BigDecimal(25.2013));
        IComponente contrato1 = new Contrato("IPCA+%", "Renda fixa atrelada ao IPCA.", 80, new BigDecimal(20.2354));
        IComponente contrato2 = new Contrato("SELIC+%", "Renda fixa atrelada a SELIC.", 237, new BigDecimal(56.1458));

        Fundo fundo1 = new Fundo("GRM SA");
        fundo1.adicionar(acao1);
        fundo1.adicionar(contrato1);

        Fundo fundo2 = new Fundo("SUBGRM SA");
        fundo2.adicionar(acao2);
        fundo2.adicionar(contrato2);

        fundo1.adicionar(fundo2);

        System.out.println(fundo1);
        System.out.println("Total do fundo: " + fundo1.getTotal().setScale(6, RoundingMode.CEILING));
    }
}
