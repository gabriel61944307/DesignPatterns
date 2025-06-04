package Produtos;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Fundo implements IComponente {
    private List<IComponente> filhos = new ArrayList<>();

    public void adicionar(IComponente c){
        filhos.add(c);
    }

    public void remover(IComponente c){
        filhos.remove(c);
    }

    @Override
    public BigDecimal getTotal() {
        BigDecimal total = BigDecimal.ZERO;
        for (IComponente componente : filhos) {
            total = total.add(componente.getTotal());
        }
        
        return total;
    }
}
