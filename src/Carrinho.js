import React from 'react'

class Carrinho extends React.Component {
    state={
        listaDeCompras: [{
            quantidade: "3",
            produto: "Item E",
            id: "15165151",
            preco: 15.00
        }],
        precoTotal: 5
    }

    onClickEliminar = (e) => {
        console.log(this.state.quantidade)

        let novaListaDeCompras = this.state.listaDeCompras.splice(e.target, 1)

        this.setState({listaDeCompras: novaListaDeCompras})
    }

    somaTotal = () => {
        this.state.listaDeCompras.map((item) => {

            this.setState({precoTotal: this.state.precoTotal+item.preco})  
        })
      
    }

    render() {
        return (
            <div>
                <h3>Carrinho:</h3>
                <div>
                    <p>{this.state.quantidade} x {this.state.quantidade}</p>
                    <p onClick={this.onClickElimina} className="elimina">X</p>
                </div>
                <p>Total: R${this.state.precoTotal}</p>
            </div>
        )
    }

}

export default Carrinho