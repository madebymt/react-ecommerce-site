import React, { Component } from 'react';
import Data from './Data'
import ProductList from './ProductList'
console.log(Data)


class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:Data
        }
    }
  // componentDidMount(){
      // fetch(URL)
      // .then(response => response.json)
      // .then(json => {
      //      console.log(json)
      //     this.setState({
      //         product:json.prosucts
      //     })
      // }) }

    render(){
        return (
            <div className = "container">
                  <h2> Product </h2>
                  <ProductList products={this.state.products}/>
            </div>
        )
    }
}

export default Product;
