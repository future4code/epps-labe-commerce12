import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.section`
  border: 1px solid black;
  padding: 10px;
  width: 200px;
`;

export const CartField = () => {
    return (
      <CartContainer>
        <h3>Carrinho</h3>
        <p>x</p>
      </CartContainer>
    );
}