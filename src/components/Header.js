import React from "react";
import {NavLink} from "react-router-dom"

const Header = () => (
    <div>
        <h1>Expensivify</h1>
        <header className="header">
        <NavLink to="/" activeClassName="is_active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is_active">Create</NavLink>
        <NavLink to="help" activeClassName="is_active">Help</NavLink> 
    </header>
    </div>
    
)

export default Header;