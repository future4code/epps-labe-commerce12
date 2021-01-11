import React from "react";
import styled from "styled-components";

const ProductHeader = styled.section`
  display: flex;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;

  p {
    margin: 0 15px 0 130px;
  }

  @media (max-width: 409px) {
    flex-direction: column;
    margin-left: 120px;
    align-items: center;

    p{
      margin: 0;
    }
  }
`;

export class HeaderField extends React.Component {

render() {
  console.log(this.props.Modo)
  let Modo = <button>Modo Lojista</button>
  if(this.props.Modo){
    Modo = <button>Modo Lojista</button>
    return (
      <ProductHeader>
        <p>Total: {this.props.quantity} itens</p>
        <button onClick={this.props.ChangeModeStatus}>{Modo}</button>
      </ProductHeader>
    );
  } else {
    Modo = <button>Modo Cliente</button>
    return (
      <ProductHeader>
        <p>Total: {this.props.quantity} itens</p>
        <button onClick={this.props.ChangeModeStatus}>{Modo}</button>
        <select onChange={this.props.orderType}>
          <option value="a-z">Ordem crescente</option>
          <option value="z-a">Ordem decrescente</option>
        </select>
      </ProductHeader>
    );
  }
}
 
}
