import React from "react";
import styled from "styled-components";
import { Filter } from "./components/Filter/Filter";
import { ProductsField } from "./components/Products/ProductsField";
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
        imageUrl: "https://picsum.photos/201/202",
      },
      {
        id: 4,
        name: "item D",
        value: 40.0,
        imageUrl: "https://picsum.photos/201/203",
      },
      {
        id: 5,
        name: "item E",
        value: 50.0,
        imageUrl: "https://picsum.photos/201/200",
      },
      {
        id: 6,
        name: "item F",
        value: 60.0,
        imageUrl: "https://picsum.photos/202/200",
      },
      {
        id: 7,
        name: "item G",
        value: 70.0,
        imageUrl: "https://picsum.photos/203/200",
      },
      {
        id: 8,
        name: "item H",
        value: 80.0,
        imageUrl: "https://picsum.photos/201/201",
      },
    ],
    cart: [],
    totalValue: "",
    selectedOrder: "",
    isCartVisible: false,
    filterData: {
      minValue: -Infinity,
      maxValue: Infinity,
      searchName: "",
    },
  };

  // LOCAL STORAGE
  componentDidUpdate() {
    localStorage.setItem("cartData", JSON.stringify(this.state.cart));
  }

  componentDidMount() {
    const cartArray = JSON.parse(localStorage.getItem("cartData")) || [];
    this.setState({ cart: cartArray });
  }

  // ABRIR COMPONENTE DO Cart
  cartToggle = () => {
    this.setState({ isCartVisible: !this.state.isCartVisible });
  };

  // FUNÇÕES DO FILTRO ------------------------------------------
  minValue = (event) => {
    this.setState({
      filterData: {
        ...this.state.filterData,
        minValue: Number(event.target.value),
      },
    });
  };

  maxValue = (event) => {
    this.setState({
      filterData: {
        ...this.state.filterData,
        maxValue: Number(event.target.value),
      },
    });
  };

  changeSearchName = (event) => {
    this.setState({
      filterData: { ...this.state.filterData, searchName: event.target.value },
    });
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
    let newCart = [...this.state.cart];
    const cartIndex = newCart.findIndex((item) => item.id === product.id); //procura no array newCart se existe algum item com id igual ao product.id e retorna o índice dele. Se não existir, retorna índice -1
    if (cartIndex > -1) {
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
    this.setState({ cart: newCart });
  };

  onClickDelete = (product) => {
    let newCart = [...this.state.cart];
    const cartIndex = newCart.findIndex((item) => item.id === product.id);
    newCart.splice(cartIndex, 1);
    this.setState({ cart: newCart });
  };

  // FUNÇÃO DE RENDERIZAÇÃO DO QUE FOR FILTRADO
  filterProducts = () => {
    const { products } = this.state;
    let filteredItemsByName = products.filter((item) =>
      item.name.includes(this.state.filterData.searchName)
    );
    let filteredItemsByMinValue = filteredItemsByName.filter(
      (item) => item.value >= this.state.filterData.minValue
    );
    let filteredItemsByMaxValue = filteredItemsByMinValue.filter(
      (item) => item.value < this.state.filterData.maxValue
    );

    return filteredItemsByMaxValue;
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
        <Filter
          changeSearchName={this.changeSearchName}
          minValue={this.minValue}
          maxValue={this.maxValue}
          minFilterValue={this.state.filterData.minValue}
          maxFilterValue={this.state.filterData.maxValue}
          cleanFilter={this.cleanFilter}
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
