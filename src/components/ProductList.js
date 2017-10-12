import React,{ Component } from 'react'
import {Link } from 'react-router-dom'
import '../style/ProductList.css'


class ProductList extends Component {
    render(){
        return(
            <div className = 'productList'>
              {this.props.products.map(product => {
                return(
                  <Link to ={`/products/${product.id}`} key={product.id} >
                  <div className= 'product'>
                  <h4> {product.title}</h4>
                   <img src={product.thumbnailUrl} alt=""/>
                   <p>Price:{product.price}</p>
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
