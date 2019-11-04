import React from "react";
import {Router,Route, Switch} from "react-router-dom"
import ExpensiveDashboardPage from "../components/ExpensiveDashboardPage"
import AddExpensivePage from "../components/AddExpensivePage"
import LoginPage from "../components/LoginPage"
import Help from "../components/Help"
import Edit from "../components/Edit"
import NotFoundPage from "../components/NotFound"
import createHistory from "history/createBrowserHistory"
import PrivateRoute from "./PrivateRoute"

export const history = createHistory()

const AppRouter = () => (

    <Router history={history}>
        <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpensiveDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensivePage} />
            <Route path="/help" component={Help} />
            <PrivateRoute path="/edit/:id" component={Edit} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)

export default AppRouter;