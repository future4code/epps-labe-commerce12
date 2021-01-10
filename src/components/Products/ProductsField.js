import React from "react";
import styled from "styled-components";
import { HeaderField } from "./HeaderField";
import { ProductItem } from "./ProductItem";

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-repeat: repeat;
  overflow-y: auto;
  background-color: #000000;
`;

const ProductContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  gap: 20px 10px;
  padding: 24px 0 0 32px;
  background-color: #ffffff;
  border-radius: 15px 0 0 0;
  overflow-y: auto;
  justify-items: center;
  

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;

  }
`;

export const ProductsField = (props) => {
  return (
    <MainContainer>
      <HeaderField quantity={props.quantity} orderType={props.orderType} />
      <ProductContainer>
        {props.orderedProducts.map((product) => {
          return (
            <ProductItem
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              value={product.value}
              id={product.id}
              addToCart={() => props.addToCart(product)}
            />
          );
        })}
      </ProductContainer>
    </MainContainer>
  );
}
