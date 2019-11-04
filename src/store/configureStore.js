import {createStore, combineReducers, applyMiddleware} from "redux"
import expensesReducer from "../reducers/expenses"
import filtersReducer from "../reducers/filter";
import authReducer from "../reducers/auth"
import thunk from "redux-thunk"

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filter: filtersReducer,
            auth: authReducer
        }),
        composeEnchancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

