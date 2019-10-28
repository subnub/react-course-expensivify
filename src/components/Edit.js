import React from "react";
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm"
import {editExpense, removeExpense} from "../actions/expenses"

const Edit = (props) => {
    
    console.log(props);

    return (
    <div>
        <ExpenseForm expense={props.expense} onSubmit={(expense) => {
            console.log("submit", props.expense.id)
            props.dispatch(editExpense(props.expense.id,expense))
            props.history.push("/")
        }}/>
        <button onClick={(e) => {
            props.dispatch(removeExpense({id: props.expense.id}))
            props.history.push("/")
        }}>Remove</button>
    </div>
)}

const mapToStore = (state, props) => {

    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapToStore)(Edit);