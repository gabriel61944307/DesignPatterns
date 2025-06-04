package Produtos;

import java.math.BigDecimal;

public class Contrato implements IComponente{
    private String ticker;
    private String descricao;

    public Contrato(String ticker, String descricao){
        this.ticker = ticker;
        this.descricao = descricao;
    }

    @Override
    public BigDecimal getTotal() {
        return new BigDecimal(2.0526186106506);
    }

    @Override
    public String toString() {
        return ticker + " - " + descricao;
    }
}
