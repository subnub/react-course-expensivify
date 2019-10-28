import {createStore, combineReducers} from "redux"
import uuid from "uuid"

// ADD_EXPENSE
const addExpense = ({desc = "", note="", amount=0, createdAt=0} = {}) => ({
    type:"ADD_EXPENSE",
    expense: {
        id: uuid(),
        desc, 
        note, 
        amount, 
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})


// Expenses reducer 

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        
        case "ADD_EXPENSE":

            return [
                ...state,
                action.expense
            ]
        case "REMOVE_EXPENSE":
            
            return state.filter((item) => {
                return item.id !== action.id
            })
        case "EDIT_EXPENSE":

            return state.map((expense) => {
                if (expense.id === action.id) {

                    return {...expense, ...action.updates}

                } else {

                    return xpense
                }
            })

        default:
            return state;
    }
}

// SET_TEXT_FILTER

const setTextFilter = (text="") => ({
    type: "SET_TEXT_FILTER",
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE"
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
})

// SET_START_DATE
const setStartDate = (date) => ({
    type: "SET_START_DATE",
    date
})

// SET_END_DATE
const setEndDate = (date) => ({
    type: "SET_END_DATE",
    date
})

// Filters reducer 

const filtersReducerDefaultState = {
    text:"",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {

    switch (action.type) {

        case "SET_TEXT_FILTER":

            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            
            return {
                ...state,
                sortBy: "amount"
            }
        case "SORT_BY_DATE":
            
            return {
                ...state,
                sortBy: "date"
            }
        case "SET_START_DATE":

            return {
                ...state,
                startDate: action.date
            }
        case "SET_END_DATE":
            
            return {
                ...state,
                endDate: action.date
            }

        default:
            return state; 
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer,
    })
);

// Get visible expenses 
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    

    
    return expenses.filter((expense) => {

        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= date;
        const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {

        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

//console.log(store.getState());

store.subscribe(() => {
    //console.log("updated", store.getState());
    const state = store.getState();

    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)

    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({desc:"rent", amount: 100, createdAt: -2100}))
const expenseTwo = store.dispatch(addExpense({desc:"coffee", amount: 00, createdAt: -1000}))

//store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(removeExpense({id: expenseTwo.expense.id}))
// store.dispatch(editExpense(expenseOne.expense.id, {amount:500}))


//store.dispatch(setTextFilter("ee"))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(-1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(300));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id:"adsfssfds",
        desc: "January rent", 
        note: "This was the final payment",
        amount: 54000,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", //date or amount
        startDate: undefined, 
        endDate: undefined
    }
}

const person = {
    name: "kyle",
    age: 22
}

console.log({
    ...person, 
    age: 25,
    location: "RI"
})