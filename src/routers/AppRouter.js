import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import ExpensiveDashboardPage from "../components/ExpensiveDashboardPage"
import AddExpensivePage from "../components/AddExpensivePage"
import Help from "../components/Help"
import Edit from "../components/Edit"
import NotFoundPage from "../components/NotFound"
import Header from "../components/Header"

const AppRouter = () => (

    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={ExpensiveDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensivePage} />
            <Route path="/help" component={Help} />
            <Route path="/edit/:id" component={Edit} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter;