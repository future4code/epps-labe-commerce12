import React from "react";
import { StyledProdutoBox } from "./styled";

export function ProdutoBox(props) {
    return (
      <StyledProdutoBox key={props.id}>
        <img src={props.imageUrl} alt="" />
        <p>{props.nome}</p>
        <p>R$ {props.valor}</p>
        <button onClick={props.addBtn}>Adicionar ao Carrinho</button>
      </StyledProdutoBox>
    );
}
