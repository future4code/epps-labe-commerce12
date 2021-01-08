import React from "react";
import { ProdutoBox } from "./ProdutoBox";
import { StyledContainer } from "./styled";

export class Filtro extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          pesquisaNome: '',
          valorMinimo: 0,
          valorMaximo: Infinity,
      };
  }

  pesquisar = (event) => {
      this.setState({ pesquisaNome: event.target.value });
  };

  minValue = (event) => {
      this.setState({ MenorValor: Number(event.target.value) });
  };

  maxValue = (event) => {
      this.setState({ MaiorValor: Number(event.target.value) });
  };

  render() {
      return (
          <>
              <StyledContainer>
                  
                  <label> Valor mínimo</label>
                  <input onChange={this.minValue} type="number" min={0} />
                  <label> Valor máximo</label>
                  <input
                      onChange={this.maxValue}
                      type="number"
                      min={this.state.MenorValue}
                  />
                  <label> Busca por Nome</label>
                  <input onChange={this.pesquisar} type="text" />
              </StyledContainer>

              <ProdutoBox
                  Parameters={this.state.pesquisaNome}
                  valMax={this.state.MaiorValor}
                  valMin={this.state.MenorValue}
              />
          </>
      );
  }
}

// export default Filtro;