import React from 'react'
import styled from "styled-components";

const Container = styled.div`
height: 90vh;
background-color: white;
`

export class Shopkeeper extends React.Component{
    state={
        inputName: "",
        inputPrice: "",
        inputImage: ""
    }

    onChangeProductName = (e) => {
        this.setState({inputName: e.target.value})
    }

    onChangeProductPrice = (e) => {
        this.setState({inputPrice: e.target.value})
    }

    onChangeProductImage = (e) => {
        this.setState({inputImage: e.target.value})
    }

    render() {
        return (
            <Container>
                <label value={this.state.inputName} onChange={this.onChangeProductName}>Nome do Produto</label>
                <input/>
                <label value={this.state.inputPrice} onChange={this.onChangeProductPrice}>Preço do Produto</label>
                <input/>
                <label value={this.state.inputImage} onChange={this.onChangeProductImage}>Link da Imagem</label>
                <input/>
            </Container>
          );
    }
 
}