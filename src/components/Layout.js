import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import './Layout.css'

class Layout extends Component {
    render(){
        return (
            <div>
                <header>
                   <div className = 'nav'>
                     <Link to='/'>
                        <i className="fa fa-coffee fa-3x" aria-hidden="true"></i>
                     </Link>
                     <NavLink activeClassName = 'selected'exact to = '/'> Home </NavLink>
                     <NavLink activeClassName = 'selected' to = 'about'> About </NavLink>
                     <NavLink activeClassName = 'selected'to = '/product'> product </NavLink>
                     <NavLink activeClassName = 'selected'to = '/contact'> Contact </NavLink>
                     <NavLink activeClassName = 'selected'to = '/search'> Search </NavLink>
                  </div>

                </header>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
