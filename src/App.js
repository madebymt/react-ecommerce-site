import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'


import './style/App.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path= '/' exact component = {Home} />
          <Route path= '/about' exact component = {About} />
          <Route path= '/product' exact component = {Product} />
          <Route path= '/contact' exact component = {Contact} />

        </Layout>

      </BrowserRouter>

    );
  }
}

export default App;
