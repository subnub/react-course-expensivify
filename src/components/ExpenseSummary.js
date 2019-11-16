import React from "react";
import {connect} from "react-redux"
import selectExpenses from "../selectors/expense"
import expenseTotal from "../selectors/expenseTotal"
import numeral from "numeral"
import {Link} from "react-router-dom";


export const ExpensesSummary = (props) => {

    const total = expenseTotal(props.expenses)
    const totalFormated = numeral(total / 100).format("$0,0.00")
    const expenseLength = props.expenses.length;
    const viewingText = expenseLength === 1 ? "1 expense" : expenseLength + " expenses"

    return (

        <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{viewingText}</span> totalling <span>{totalFormated}</span></h1>
        <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
        </div>
        </div>
        </div>
    )
}

const connectPropToStore = (state) => ({
    expenses: selectExpenses(state.expenses, state.filter),
    
})

export default connect(connectPropToStore)(ExpensesSummary)