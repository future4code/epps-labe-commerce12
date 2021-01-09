import React from "react";
import styled from "styled-components";
import { Filtro} from "./components/Filter/Filtro";
import { ProductsField } from "./components/Products/ProductsField";
// import { CartField } from "./components/Cart/CartField";
import { Cart } from "./components/Cart/Cart";

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
        name: "viagem",
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
    filter: {
      minValue: -Infinity,
      maxValue: Infinity,
      searchName: "",
    },
  };

  // ABRIR COMPONENTE DO Cart
  cartToggle = () => {
    this.setState({ isCartVisible: !this.state.isCartVisible });
  };

  // FUNÇÕES DO FILTRO ------------------------------------------
  // changeMinValueFilter = (event) => {
  //   this.setState({ filter: { minValue: event.target.value } });
  // };

  // changeMaxValueFilter = (event) => {
  //   this.setState({ filter: { maxValue: event.target.value } });
  // };

  // changeFilteredName = (event) => {
  //   this.setState({ filter: { filteredName: event.target.value } });
  // };

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

  // FUNÇÕES DO Cart ------------------------------------------
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
  filteredProducts = () => {
    const { products } = this.state;
    let filteredItemsByName = products.filter(item => item.name.includes(this.state.filter.searchName))
    let filteredItemsByMinValue = filteredItemsByName.filter(item => item.value >= this.state.filter.minValue)
    let filteredItemsByMaxValue = filteredItemsByMinValue.filter(item => item.value < this.state.filter.maxValue)
    
    return filteredItemsByMaxValue;
  
  };

  minValue = (event) => {
    this.setState({ filter: { ...this.state.filter, minValue: Number(event.target.value) }});
  };

  maxValue = (event) => {
    this.setState({ filter: { ...this.state.filter, maxValue: Number(event.target.value) }});
  };

  pesquisar = (event) => {
    this.setState({ filter : { ...this.state.filter, searchName: event.target.value }});
  };


  render() {
    // RENDERIZA O QUE FOR FILTRADO
    const filteredProducts = this.filterProducts();
    // ORDENA O QUE FOI RENDERIZADO E RENDERIZA
    console.log("oiii", renderProducts)
    console.log("estado minValue", this.state.filter.minValue)
    console.log("estado searchName", this.state.filter.searchName)
    console.log("estado maxValue", this.state.filter.maxValue)
    const orderedProducts = renderProducts.sort(this.sortProducts);

    let valueTotal = 0;

    // VALOR TOTAL DO Cart
    let totalValue = 0;
    this.state.cart.map((item) => {
      totalValue += item.value * item.quantity;
    });

    return (
      <AppWrapper>
        <Filtro
          pesquisar = {this.pesquisar}
          minValue = {this.minValue}
          maxValue = {this.maxValue}
          minFilterValue = {this.state.filter.minValue}
          maxFilterValue = {this.state.filter.maxValue}
        />
        <ProductsField
          quantity={this.state.products.length}
          orderType={this.orderType}
          orderedProducts={orderedProducts}
          addToCart={this.addToCart}
        />
        {this.state.isCartVisible && (
          <Cart
            cart={this.state.cart}
            onClickDelete={this.onClickDelete}
            totalValue={totalValue}
          />
        )}
        <button onClick={this.cartToggle}>Cart</button>
      </AppWrapper>
    );
  }
}
