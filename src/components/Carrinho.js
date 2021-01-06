import React from "react";
import { StyledContainer, ItemCarrinho } from "./styled";

export function Carrinho(props) {
  return (
    <StyledContainer>
      <h2>Carrinho: </h2>
      {props.carrinho.map((produto) => {
        return (
          <ItemCarrinho>
            <p>{produto.nome} {produto.valor}</p>
          </ItemCarrinho>
        );
      })}
    </StyledContainer>
  );
}
