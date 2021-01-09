import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  min-width: 150px;
  border: 1px solid black;
  padding: 10px;
`;

const CartItem = styled.div`
  border-bottom: 1px dashed black;
  display: flex;
  justify-content: space-between;

  button {
    padding: 3px;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: bold;
  }
`;

export function Cart(props) {
  let name = props.cart.map((item) => {
    return (
      <CartItem>
        <a>
          <p>
            {item.quantity}x {item.name}
          </p>
        </a>
        <button onClick={() => props.onClickDelete(item.id)} className="elimina">
          [ X ]
        </button>
      </CartItem>
    );
  });

  return (
    <CartContainer>
      <h3>Carrinho:</h3>
      {name}
      <p>Total: R${props.totalValue}</p>
    </CartContainer>
  );
}
