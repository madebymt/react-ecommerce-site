import React,{ Component } from 'react'
import {Link } from 'react-router-dom'
import './ProductList.css'


class ProductList extends Component {
    render(){
        return(
            <div className = 'productList'>
              {this.props.products.map(product => {
                return(
                  <Link to ={`/products/${product.id}`} key={product.id} >
                  <div className= 'product'>
                    <h4> {product.title}</h4>
                    <div className= 'shop'>
                     <p>Price:$ {product.price}</p>
                     <p className = 'cart' >Add to cart</p>
                    </div>
                     <img src={product.thumbnailUrl} alt=""/>
                  </div>
                  </Link>
                )
              }
            )
          }
            </div>
          )
          }

}


export default ProductList;
