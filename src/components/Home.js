import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render(){
        return (
            <div className= 'home'>
                  <img src="../img/1.jpg" alt=""
                    style = {{backgroundSize: 'cover',
                      width: '100%'}}
                      />
                  <div className = 'button'>
                      <a href = './Product'><button> Top 10 seller </button></a>
                  </div>
            </div>

        )
    }
}

export default Home;
