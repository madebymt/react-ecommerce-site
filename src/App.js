import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Search from './components/Search'
import Contact from './components/Contact'


import './style/App.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path= '/' exact component = {Home} />
          <Route path= '/about' component = {About} />
          <Route path= '/product'  exact component = {Product} />
          <Route path= '/product/:id'  component = {ProductDetail} />
          <Route path= '/contact' component = {Contact} />
          <Route path= '/search'  component = {Search} />


        </Layout>

      </BrowserRouter>

    );
  }
}

export default App;
