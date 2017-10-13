import React,{ Component }  from 'react'
import Data from './Data'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: Data
      }
    }
  render() {
    return (
    <div className = 'product-detail'>
    {this.state.product.name}
    <div className = 'row'>
    <img src = {this.state.product.thumbnailUrl} alt = ''/>
    <div>
    <p> {this.state.product.price} </p>
    <a href ={this.stat.product.url}> add to cart </a>
    </div>
  </div>
</div>
    )
    }
}

export default ProductDetail
