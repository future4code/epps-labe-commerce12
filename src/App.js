import React from "react";
import {
  StyledAppContainer,
  StyledBarContainer,
  StyledContainer,
  StyledProdutosContainer,
  StyledHomeContainer,
  CarrinhoBtn,
} from "./components/styled";
import { ProdutoBox } from "./components/ProdutoBox";
import { InputsItem } from "./components/InputsItem";
import { Carrinho } from "./components/Carrinho";

export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        nome: "Foguete Apollo 11",
        valor: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        nome: "Baleia azul",
        valor: 30000.5,
        imageUrl: "https://picsum.photos/200/201",
      },
    ],
    carrinho: [],
    carrinhoAberto: false,
    targetNome: "",
    targetValor: "",
    quantidade: 1,
  };

  adicionarAoCarrinho = (id) => {
    const copiaProdutos = this.state.produtos.map((produto) => {
      if (id === produto.id) {
        const novoProduto = {
          ...produto,
          quantidade: 1,
        };
        return novoProduto;
      } else {
        return produto;
      }
    });
    this.setState({ produtos: copiaProdutos });
    console.log(this.state.produtos);
  };

  abrirCarrinho = () => {
    this.setState({ carrinhoAberto: !this.state.carrinhoAberto });
  };

  render() {
    let ComponenteCarrinho;
    if (this.state.carrinhoAberto) {
      ComponenteCarrinho = <Carrinho carrinho={this.state.carrinho} />;
    }

    return (
      <StyledAppContainer>

        <CarrinhoBtn onClick={this.abrirCarrinho}>Carrinho</CarrinhoBtn>

        <StyledContainer>
          <h2>Filtros: </h2>
          <InputsItem rotulo={"Valor Minimo"} />
          <InputsItem rotulo={"Valor Máximo"} />
          <InputsItem rotulo={"Buscar Produto"} />
        </StyledContainer>

        <StyledHomeContainer>
          <StyledBarContainer>
            <p>Quantidade de Produtos: {this.state.produtos.length}</p>
            <select>
              <option>Preço: Crescente</option>
              <option>Preço: Decrescente</option>
            </select>
          </StyledBarContainer>

          <StyledProdutosContainer>
            {this.state.produtos.map((produto) => {
              return (
                <ProdutoBox
                  id={produto.id}
                  nome={produto.nome}
                  valor={produto.valor}
                  imageUrl={produto.imageUrl}
                  addBtn={this.adicionarAoCarrinho}
                />
              );
            })}
          </StyledProdutosContainer>
        </StyledHomeContainer>
        {ComponenteCarrinho}
      </StyledAppContainer>
    );
  }
}
