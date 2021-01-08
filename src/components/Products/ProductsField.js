import React from "react";
import styled from "styled-components";
import { HeaderField } from "./HeaderField";
import { ProductItem } from "./ProductItem";

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductContainer = styled.section`
  display: flex;
  gap: 10px;
  padding: 10px;
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
