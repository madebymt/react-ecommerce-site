import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import '../style/Layout.css'

class Layout extends Component {
    render(){
        return (
            <div>
                <header>
                   <div className = 'nav'>
                     <Link to='/'>
                        <i className="fa fa-coffee fa-3x" aria-hidden="true"></i>
                     </Link>
                     <NavLink exact to = '/'> Home </NavLink>
                     <NavLink to = 'about'> About </NavLink>
                     <NavLink to = '/product'> product </NavLink>
                     <NavLink to = '/contact'> Contact </NavLink>
                     <NavLink to = '/search'> Search </NavLink>
                  </div>

                </header>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
