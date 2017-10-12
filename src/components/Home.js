import React, { Component } from 'react';
// import { NavLink, Route} from 'react-router-dom'
import '../style/Home.css'

class Home extends Component {
    render(){
        return (
            <div className= 'home'>
                  <img src="../img/1.jpg" alt=""/>
                  <div className = 'button'>
                      <button> Top 10 seller </button>
                  </div>
            </div>

        )
    }
}

export default Home;
