import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  min-width: 100px;
  border: 1px solid black;
  padding: 10px;
`;

const ItemCarrinho = styled.div`
  border-bottom: 1px dashed black;
`;
export function Carrinho(props) {

  let name = props.cart.map((item) => {
    return (
      <ItemCarrinho>
        <p>
          {item.quantity} x {item.name}
        </p>
        <p onClick={() => props.onClickElimina(item.id)} className="elimina">
          X
        </p>
      </ItemCarrinho>
    );
  });

  return (
    <StyledContainer>
      <h3>Carrinho:</h3>
      {name}
      <p>Total: R${props.valueTotal}</p>
    </StyledContainer>
  );
}
