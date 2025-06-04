package Produtos;

import java.math.BigDecimal;

public class Acao implements IComponente{
    private String ticker;
    private String descricao;

    public Acao(String ticker, String descricao){
        this.ticker = ticker;
        this.descricao = descricao;
    }

    @Override
    public BigDecimal getTotal() {
        return new BigDecimal(15.45116515651);
    }

    @Override
    public String toString() {
        return ticker + " - " + descricao;
    }
}
