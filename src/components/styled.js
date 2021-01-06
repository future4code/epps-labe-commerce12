import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  min-width: 100px;
  border: 1px solid black;
  padding: 10px;
`;

export const StyledAppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 10px;
`;

export const StyledProdutoBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dotted orange;
  margin: 10px 0;
  padding: 10px;
  height: fit-content;
  width: 200px;

  img {
    width: 100%;
  }
`;

export const StyledProdutosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 10px;
`;

export const StyledBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 10px;
  padding: 10px;
`;

export const ItemCarrinho = styled.div`
  border-bottom: 1px dashed black;
`;

export const CarrinhoBtn = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  height: 80px;
  width: 80px;
`;
