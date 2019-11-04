import React from "react";
import {NavLink} from "react-router-dom"
import {connect} from "react-redux";
import {startLogout} from "../actions/auth"

export const Header = ({startLogout}) => (
    <div>
        <h1>Expensivify</h1>
        <header className="header">
        <NavLink to="/dashboard" activeClassName="is_active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is_active">Create</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
    </div>
    
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => {dispatch(startLogout())}
})

export default connect(undefined, mapDispatchToProps)(Header);