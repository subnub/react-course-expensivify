import React from "react";
import {connect} from "react-redux"
import selectExpenses from "../selectors/expense"
import expenseTotal from "../selectors/expenseTotal"
import numeral from "numeral"


const expensesSummary = (props) => {

    const total = expenseTotal(props.expenses)
    const totalFormated = numeral(total / 100).format("$0,0.00")
    const expenseLength = props.expenses.length;

    return (
        <div>
        {expenseLength === 1 ? 
            <p>Viewing 1 expense totalling {totalFormated}</p> :
            <p>Viewing {expenseLength} expenses totalling {totalFormated}</p>}
        </div>
    )
}

const connectPropToStore = (state) => ({
    expenses: selectExpenses(state.expenses, state.filter),
    
})

export default connect(connectPropToStore)(expensesSummary)