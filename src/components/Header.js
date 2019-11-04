import React from "react";
import {NavLink} from "react-router-dom"
import {connect} from "react-redux";
import {startLogout} from "../actions/auth"

export const Header = ({startLogout}) => (
    <div>
        <h1>Expensivify</h1>
        <header className="header">
        <NavLink to="/" activeClassName="is_active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is_active">Create</NavLink>
        <NavLink to="help" activeClassName="is_active">Help</NavLink> 
        <button onClick={startLogout}>Logout</button>
    </header>
    </div>
    
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => {dispatch(startLogout())}
})

export default connect(undefined, mapDispatchToProps)(Header);