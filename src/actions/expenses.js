import uuid from "uuid"
import {database} from "../firebase/firebase"


// ADD_EXPENSE
export const addExpense = (expense) => ({
    type:"ADD_EXPENSE",
    expense: expense
})

export const startAddExpense = (expenseData = {}) => {

    return (dispatch, getState) => {

        const {desc = "", note="", amount=0, createdAt=0} = expenseData;
        const expense = {desc, note, amount, createdAt}
        return database.ref().child("users").child(getState().auth.uid).child("expenses").push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }

    

    

}

// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

export const startRemoveExpense = ({id} = {}) => {

    return (dispatch, getState) => {
        return database.ref().child("users").child(getState().auth.uid).child("expenses").child(id).remove().then(() => {
            dispatch(removeExpense({id}))
        })
    }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

export const startEditExpense = (id, updates) => {

    return (dispatch, getState) => {
        database.ref().child("users").child(getState().auth.uid).child("expenses").child(id).set({...updates}).then(() => {
            dispatch(editExpense(id, updates));
        })
    }
}

export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
})

export const startSetExpenses = () => {

    return (dispatch, getState) => {
        return database.ref().child("users").child(getState().auth.uid).child("expenses").once("value").then((snapshot) => {

            const dataExpenses = []

            snapshot.forEach((data) => {
                
                dataExpenses.push({
                    id: data.key,
                    ...data.val()
                });
            })
            
            dispatch(setExpenses(dataExpenses))
        })
    }
}
