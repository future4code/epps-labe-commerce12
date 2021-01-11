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
  align-items: center;
`;

const ProductContainer = styled.section`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  height: 100%;
  gap: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px 15px 0 0;
  overflow-y: auto;
  justify-items: center;
  width: 97%;
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
