import React from 'react'
import styled from "styled-components";

const ProductBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 2px dotted;
  padding: 5px;
`;

export const ProductItem = (props) => {
    return (
      <ProductBox>
        <img src={props.imageUrl} alt="" />
        <p>{props.name}</p>
        <p>R$ {props.value}</p>
        <button onClick={props.addToCart}>Adicionar ao Carrinho</button>
      </ProductBox>
    );
}
