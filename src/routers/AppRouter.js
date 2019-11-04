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
import PublicRoute from "./PublicRoute";

export const history = createHistory()

const AppRouter = () => (

    <Router history={history}>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpensiveDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensivePage} />
            <PrivateRoute path="/edit/:id" component={Edit} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)

export default AppRouter;