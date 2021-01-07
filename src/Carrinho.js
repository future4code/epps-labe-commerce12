import React from 'react'

class Carrinho extends React.Component {
    state={
        quantidade: 4,
        listaDeCompras: [{
            produto:"Item A",
            preco: 5,
            key: 150
        },
        {
            produto:"Item B",
            preco: 10,
            key: 160
        },
        {
            produto:"Item E",
            preco: 5,
            key: 170
        },
        {
            produto:"Item D",
            preco: 10,
            key: 180
        },
        {
            produto:"Item C",
            preco: 10,
            key: 190
        }],

    }

    onClickElimina = (chave) => {

       let novaLista = this.state.listaDeCompras.filter((item) => {
        return chave !== item.key
        })

        this.setState({listaDeCompras: novaLista})
    }

    render() {
        let precoTotal = 0

            this.state.listaDeCompras.map((item) => {
                 precoTotal += item.preco
            })


            let produto = this.state.listaDeCompras.map((item) => {
                return (
                    <div>
                        <p>{this.state.quantidade} x {item.produto}</p>
                        <p onClick={() => this.onClickElimina(item.key)} className="elimina">X</p>
                    </div>
                )
           })


        return (
            <div>
                <h3>Carrinho:</h3>
                {produto}
                <p>Total: R${precoTotal}</p>
            </div>
        )
    }

}

export default Carrinho