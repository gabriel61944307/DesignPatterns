package Produtos;
import java.math.BigDecimal;

public interface IProduto {
    String getNome();
    BigDecimal getValor();
    Integer getQuantidade();
}
