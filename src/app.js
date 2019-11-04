import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"
import "normalize.css/normalize.css"
import "./styles/styles.scss"
import AppRouter, {history} from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import {addExpense, startSetExpenses} from "./actions/expenses";
import {login, logout} from "./actions/auth"
import getVisibleExpenses from "./selectors/expense"
import {Provider} from "react-redux"
import "react-dates/lib/css/_datepicker.css"
import 'react-dates/initialize';
import {firebase} from "./firebase/firebase"

const store = configureStore();

const unsubscribe = store.subscribe(() => {

    const state = store.getState();

    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);

    console.log(state);

})

console.log("new")

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false; 
const renderApp = () => {

    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("app"))
        hasRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {

    if (user) {
        console.log("logged in")
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {

            renderApp()

            if (history.location.pathname === "/") {
                history.push("/dashboard")
            }
        })

    } else {
        console.log("logged out")
        store.dispatch(logout())
        renderApp()
        history.push("/")
    }
})

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"))



