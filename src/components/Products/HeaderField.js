import React from "react";
import styled from "styled-components";

const ProductHeader = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
`;

export const HeaderField = (props) => {
  return (
    <ProductHeader>
      <p>Total: {props.quantity} itens</p>
      <select onChange={props.orderType}>
        <option value="a-z">Ordem crescente</option>
        <option value="z-a">Ordem decrescente</option>
      </select>
    </ProductHeader>
  );
}
