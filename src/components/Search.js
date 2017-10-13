import React, {Component} from 'react'
import ProductList from './ProductList'
import Data from './Data'

class Search extends Component {
   constructor(props){
    super(props)
     this.state = {
       searchText: " ",
       product: []

     }
 }
 handleSearchTextChange = event =>{
   this.setState({ searchText: event.target.value},this.searchItems)
 }
 searchItems = () =>{
   this.setState({
     product:Data
   })
 }
 render(){
   return(
     <div className = 'container'>
      <form>
       <input type = 'text'
       value= {this.state.searchText}
       onChange={this.handleSearchTextChange}
       placeholder= 'Search'
       />

      </form>

      <div className='container'>
      <ProductList products={this.state.products}/>
      </div>

     </div>
   )
 }
}

export default Search
