import React from "react";
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenes from "../selectors/expense";

export const ExpenseList = (props) => (

    <div>

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
)

const mapStataeToProps = (state) => {

    console.log(state);
    return {
        expenses: selectExpenes(state.expenses, state.filter)
    }
}

export default connect(mapStataeToProps)(ExpenseList);

