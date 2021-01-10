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
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  gap: 10px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 15px 0 0 0;
  overflow-y: auto;

  @media (max-width: 810px) {
    justify-content: center;
    /* border-radius: 0; */
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
