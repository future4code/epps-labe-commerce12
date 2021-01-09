import React from "react";
import styled from "styled-components";

const ProductHeader = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const HeaderField = (props) => {
  return (
    <ProductHeader>
      <p>Quantidade de produtos: {props.quantity}</p>
      <select onChange={props.orderType}>
        <option value="a-z">Ordem crescente</option>
        <option value="z-a">Ordem decrescente</option>
      </select>
    </ProductHeader>
  );
}
