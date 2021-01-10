import React from "react";
import styled from "styled-components";

const ProductHeader = styled.section`
  display: flex;
  /* justify-content: space-between; */
  padding: 10px;
  background-color: #000000;
  color: #ffffff;

  p {
    margin: 0 15px 0 130px;
  }

  @media (max-width: 409px) {
    flex-direction: column;
    margin-left: 120px;
    align-items: center;

    p{
      margin: 0;
    }
  }
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
