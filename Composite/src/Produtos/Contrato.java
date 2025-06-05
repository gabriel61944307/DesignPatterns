package Produtos;

import java.math.BigDecimal;

public class Contrato implements IComponente, IProduto{
    private String ticker;
    private String descricao;
    private Integer quantidade;
    private BigDecimal valor;

    public Contrato(String ticker, String descricao, Integer quantidade, BigDecimal valor){
        this.ticker = ticker;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    @Override
    public BigDecimal getTotal() {
        return this.valor.multiply(new BigDecimal(this.quantidade));
    }

    @Override
    public String toString() {
        return ticker + " - " + descricao + '\n';
    }

    @Override
    public BigDecimal getValor() {
        return this.valor;
    }

    @Override
    public Integer getQuantidade() {
        return this.quantidade;
    }
}
