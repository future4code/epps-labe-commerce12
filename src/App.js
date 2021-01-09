import React from "react";
import styled from "styled-components";
import { FilterField } from "./components/Filter/FilterField";
import { ProductsField } from "./components/Products/ProductsField";
// import { CartField } from "./components/Cart/CartField";
import { Carrinho } from "./components/Cart/Carrinho";

const AppWrapper = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;

  > button {
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 70px;
    height: 70px;
  }
`;

export default class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "item A",
        value: 10.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "item B",
        value: 20.0,
        imageUrl: "https://picsum.photos/200/201",
      },
      {
        id: 3,
        name: "item C",
        value: 30.0,
        imageUrl: "https://picsum.photos/201/200",
      },
    ],
    cart: [],
    totalValue: "",
    selectedOrder: "",
    isCartVisible: false,
    filters: {
      minValue: null,
      maxValue: null,
      filteredName: "",
    },
  };

  // ABRIR COMPONENTE DO CARRINHO
  cartToggle = () => {
    this.setState({ isCartVisible: !this.state.isCartVisible });
  };

  // FUNÇÕES DO FILTRO ------------------------------------------
  changeMinValueFilter = (event) => {
    this.setState({ filters: { minValue: event.target.value } });
  };

  changeMaxValueFilter = (event) => {
    this.setState({ filters: { maxValue: event.target.value } });
  };

  changeFilteredName = (event) => {
    this.setState({ filters: { filteredName: event.target.value } });
  };

  // FUNCÇÕES DA ÁREA DO PRODUTO ------------------------------------------
  // FUNÇÃO PARA ORDERNAR LISTA
  sortProducts = (productA, productB) => {
    const { selectedOrder } = this.state;

    if (selectedOrder === "a-z") {
      return productA.value - productB.value;
    } else if (selectedOrder === "z-a") {
      return productB.value - productA.value;
    }
  };

  // CAPTURA SE ORDEM É CRESCENTE OU DECRESCENTE
  orderType = (event) => {
    this.setState({
      selectedOrder: event.target.value,
    });
  };

  // FUNÇÕES DO CARRINHO ------------------------------------------
  addToCart = (product) => {
    let newCart = [...this.state.cart]
    const cartIndex = newCart.findIndex((item) => item.id === product.id) //procura no array newCart se existe algum item com id igual ao product.id e retorna o índice dele. Se não existir, retorna índice -1
    if(cartIndex > -1) {
      newCart[cartIndex].quantity += 1;
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        value: product.value,
        quantity: 1,
      };
      newCart.push(newItem);
    }
    this.setState({cart: newCart})
  };

  onClickDelete = (product) => {
    let newCart = [...this.state.cart];
    const cartIndex = newCart.findIndex((item) => item.id === product.id);
    newCart.splice(cartIndex, 1)
    this.setState({cart: newCart})
  };

  // FUNÇÃO DE RENDERIZAÇÃO DO QUE FOR FILTRADO
  filterProducts = () => {
    const { products, filters } = this.state;
    const filteredProducts = products.filter((product) => {
      if (filters.minValue !== 0) {
        return product.value > filters.minValue;
      } else if (filters.maxvalue !== 0) {
        return product.value < filters.maxValue;
      } else {
        return product;
      }
    });
    return filteredProducts;
  };

  render() {
    // RENDERIZA O QUE FOR FILTRADO
    const filteredProducts = this.filterProducts();
    // ORDENA O QUE FOI RENDERIZADO E RENDERIZA
    const orderedProducts = filteredProducts.sort(this.sortProducts);

    // VALOR TOTAL DO CARRINHO
    let totalValue = 0;
    this.state.cart.map((item) => {
      totalValue += item.value * item.quantity;
    });

    return (
      <AppWrapper>
        <button onClick={this.cartTotalValue}>Teste</button>
        <FilterField
          onChangeMinValue={this.changeMinValueFilter}
          onChangeMaxValue={this.changeMaxValueFilter}
          onChangeFilteredName={this.changeFilteredName}
        />
        <ProductsField
          quantity={this.state.products.length}
          orderType={this.orderType}
          orderedProducts={orderedProducts}
          addToCart={this.addToCart}
        />
        {this.state.isCartVisible && (
          <Carrinho
            cart={this.state.cart}
            onClickElimina={this.onClickElimina}
            totalValue={totalValue}
          />
        )}
        <button onClick={this.cartToggle}>Carrinho</button>
      </AppWrapper>
    );
  }
}
