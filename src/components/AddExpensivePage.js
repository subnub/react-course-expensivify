import React from "react";
import ExpenseForm from "./ExpenseForm"
import {connect} from "react-redux"
import {startAddExpense} from "../actions/expenses"

export class AddExpensivePage extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense)
        this.props.history.push("/")
    }

    render() {
        return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm onSubmit={this.onSubmit}/>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => {dispatch(startAddExpense(expense))}
})

export default connect(undefined, mapDispatchToProps)(AddExpensivePage);