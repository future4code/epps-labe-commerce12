import React from "react";
import { FilterContainer } from "./FilterField";

export class Filtro extends React.Component {
  
  

  render() {
      return (
          <>
              <FilterContainer>
                  
                  <label> Valor mínimo</label>
                  <input onChange={(event) => this.props.minValue(event)} type="number" min={0} value={this.props.minFilterValue} />
                  <label> Valor máximo</label>
                  <input onChange={(event) => this.props.maxValue(event)} type="number" value={this.props.maxFilterValue}/>
                  <label> Busca por Nome</label>
                  <input onChange={(event) => this.props.pesquisar(event)} type="text" />
              </FilterContainer>

              
                  {/* Buscar={this.state.pesquisaNome}
                  valMax={this.state.valorMinimo}
                  valMin={this.state.valorMaximo} */}
              
          </>
      );
  }
}

// export default Filtro;