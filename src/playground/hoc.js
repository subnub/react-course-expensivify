// Higher Order Component - A Component that renders another component 

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {

    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info, please do not share!</p>}
        <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuth = (WrappedComponent) => {

    return (props) => (
        <div>
        {!props.isAuth && <p>Please autheticate</p>}
        {props.isAuth && <WrappedComponent {...props}/>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
//const AuthInfo = requireAuth(Info);

ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details"/>, document.getElementById("app"));
//ReactDOM.render(<AuthInfo isAuth={false} info="There are the details"/>, document.getElementById("app"));
