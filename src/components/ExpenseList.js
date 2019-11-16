import React from "react";
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenes from "../selectors/expense";

export const ExpenseList = (props) => (

    <div className="content-container">

        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        
        <div className="list-body">
        {props.expenses.length === 0 ?

            (<p>No Expensess</p>) 
            
            : 

            (props.expenses.map((expense) => {
                console.log(expense)
                return (
                    <ExpenseListItem key={expense.id} {...expense}/>
                )
            }))}
        </div>
        
    </div>
)

const mapStataeToProps = (state) => {

    console.log(state);
    return {
        expenses: selectExpenes(state.expenses, state.filter)
    }
}

export default connect(mapStataeToProps)(ExpenseList);

