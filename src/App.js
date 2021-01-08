import React from "react";
import styled from "styled-components";
import { FilterField } from "./components/Filter/FilterField";
import { ProductsField } from "./components/Products/ProductsField";
import { CartField } from "./components/Cart/CartField";

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
        value: 30.5,
        imageUrl: "https://picsum.photos/200/201",
      },
      {
        id: 3,
        name: "item C",
        value: 25.62,
        imageUrl: "https://picsum.photos/201/200",
      },
    ],
    cart: [],
    selectedOrder: "",
    isCartVisible: false,
    filter: {
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
    this.setState({ filter: { minValue: event.target.value } });
  };

  changeMaxValueFilter = (event) => {
    this.setState({ filter: { maxValue: event.target.value } });
  };

  changeFilteredName = (event) => {
    this.setState({ filter: { filteredName: event.target.value } });
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
    const { products, cart } = this.state;
    const cartArray = [...cart]
    const newItem = [
      { id: product.id, name: product.name, value: product.value, quantity: 1 },
    ];
    cartArray.push(newItem);
    console.log(this.state.cart);
    // const {products} = this.state
    // const cartItem = products.filter((product) => {
    //   if(product) {
    //     return product.name
    //   }
    // })
    // console.log(cartItem);
  };

  // FUNÇÃO DE RENDERIZAÇÃO DO QUE FOR FILTRADO
  filteredProducts = () => {
    const { products } = this.state;
    let filteredItems = products;
    // CRIAR FUNÇÃO AQUI----------------------------------
    return filteredItems;
  };

  render() {
    // RENDERIZA O QUE FOR FILTRADO
    const renderProducts = this.filteredProducts();
    // ORDENA O QUE FOI RENDERIZADO E RENDERIZA
    const orderedProducts = renderProducts.sort(this.sortProducts);

    return (
      <AppWrapper>
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
        {this.state.isCartVisible && <CartField />}
        <button onClick={this.cartToggle}>Carrinho</button>
      </AppWrapper>
    );
  }
}
