import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  min-width: 100px;
  border: 1px solid black;
  padding: 10px;
`;

const CartItem = styled.div`
  border-bottom: 1px dashed black;
  display: flex;
  justify-content: space-between;
`;

export function Cart(props) {
  let name = props.cart.map((item) => {
    return (
      <CartItem>
        <p>
          {item.quantity}x {item.name}
        </p>
        <p
          onClick={() => props.onClickDelete(item.id)}
          className="elimina"
        >
          X
        </p>
      </CartItem>
    );
  });

  return (
    <CartContainer>
      <h3>Cart:</h3>
      {name}
      <p>Total: R${props.totalValue}</p>
    </CartContainer>
  );
}
