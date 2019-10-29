import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"
import "normalize.css/normalize.css"
import "./styles/styles.scss"
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters"
import getVisibleExpenses from "./selectors/expense"
import {Provider} from "react-redux"
import "react-dates/lib/css/_datepicker.css"
import 'react-dates/initialize';

const store = configureStore();

const unsubscribe = store.subscribe(() => {

    const state = store.getState();

    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);

    console.log(visibleExpenses);

})

console.log("new")

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById("app"))
