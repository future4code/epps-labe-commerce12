import React from "react";
import styled from "styled-components";

export const FilterContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;

  label {
    padding-top: 10px;
  }

  button {
    margin-top: 10px;
  }
`;

export const FilterField = (props) => {

  return (
    <FilterContainer>
      <h3>Filtros:</h3>
      <label htmlFor="minVal">Valor Mínimo</label>
      <input
        type="number"
        min="0"
        onChange={props.onChangeMinValue}
      />
      <label htmlFor="maxVal">Valor Máximo</label>
      <input
        type="number"
        min="0"
        onChange={props.onChangeMaxValue}
      />
      <label htmlFor="maxVal">Buscar Produto</label>
      <input
        type="text"
        onChange={props.onChangeFilteredName}
      />
    </FilterContainer>
  );
}

