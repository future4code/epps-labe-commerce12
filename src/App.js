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
    cart: [
      {
        name: "Item A",
        value: 5,
        id: 1,
        quantity: 1,
      },
      {
        name: "Item B",
        value: 10,
        id: 160,
        quantity: 3,
      },
      {
        name: "Item E",
        value: 5,
        id: 170,
        quantity: 5,
      },
      {
        name: "Item D",
        value: 10,
        id: 180,
        quantity: 3,
      },
      {
        name: "Item C",
        value: 10,
        id: 190,
        quantity: 5,
      },
    ],
    totalValue: "",
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
    const newCart = this.state.cart.map((item) => {
      if (product.id === item.id) {
        const newItem = { ...item, quantity: item.quantity +1 };
        return newItem;
      } else {
        return item;
      }
    });
    this.setState({cart: newCart})
    
    // const { cart } = this.state;
    // const newItem = {
    //   id: product.id,
    //   name: product.name,
    //   value: product.value,
    //   quantity: 1,
    // };
    // cart.push(newItem);
    // this.setState({ cart: this.state.cart, newItem });
  };

  onClickElimina = (chave) => {
    let novaLista = this.state.cart.filter((item) => {
      return chave !== item.id;
    });

    this.setState({ cart: novaLista });
  };

  // FUNÇÃO DE RENDERIZAÇÃO DO QUE FOR FILTRADO
  filteredProducts = () => {
    const { products } = this.state;
    let filteredItems = products;
    // CRIAR FUNÇÃO AQUI----------------------------------
    return filteredItems;
  };

  render() {
    console.log(this.state.cart);
    // RENDERIZA O QUE FOR FILTRADO
    const renderProducts = this.filteredProducts();
    // ORDENA O QUE FOI RENDERIZADO E RENDERIZA
    const orderedProducts = renderProducts.sort(this.sortProducts);

    let valueTotal = 0;

    this.state.cart.map((item) => {
      valueTotal += item.value;
    });

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
        {this.state.isCartVisible && (
          <Carrinho
            cart={this.state.cart}
            onClickElimina={this.onClickElimina}
            valueTotal={valueTotal}
          />
          // <CartField
          //   item={this.state.cart.name}
          //   qtde={this.state.cart.quantity}
          // />
        )}
        <button onClick={this.cartToggle}>Carrinho</button>
      </AppWrapper>
    );
  }
}
