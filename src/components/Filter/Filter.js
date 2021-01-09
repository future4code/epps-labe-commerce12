import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  Label {
    margin-top: 10px;
  }
`;

export const Filter = (props) => {
  return (
    <>
      <FilterContainer>
        <h3>Filtros:</h3>
        <label> Valor mínimo</label>
        <input
          onChange={(event) => props.minValue(event)}
          type="number"
          min={0}
          value={props.minFilterValue}
        />
        <label> Valor máximo</label>
        <input
          onChange={(event) => props.maxValue(event)}
          type="number"
          value={props.maxFilterValue}
        />
        <label> Busca por nome</label>
        <input
          onChange={(event) => props.changeSearchName(event)}
          type="text"
        />
      </FilterContainer>
    </>
  );
};
