import React from "react";
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm"
import {editExpense, removeExpense, startEditExpense, startRemoveExpense} from "../actions/expenses"

export class Edit extends React.Component {

    constructor(props) {
        super(props)
    }

    onSubmit = (expense) => {

        console.log("submit", this.props.expense.id)
        this.props.dispatch(startEditExpense(this.props.expense.id,expense))
        this.props.history.push("/dashboard")
    }

    onClick = (e) => {
        this.props.dispatch(startRemoveExpense({id: this.props.expense.id}))
        this.props.history.push("/dashboard")
    }

    render() {

        return (
            <div>

                <div className="page-header">
                <div className="content-container">
                    <h1>Edit Expense</h1>
                </div>
                </div>

                <div className="content-container">

                    <ExpenseForm expense={this.props.expense} onSubmit={(expense) => {
                        this.onSubmit(expense)
                    }}/>
                    
                    <div>
                        <button className="button button--secondary" onClick={(e) => {
                            this.onClick(e)
                        }}>Remove</button>
                    </div>
    
                </div>
                
            </div>
        )
    }
}

// const Edit = (props) => {
    
//     console.log(props);

    

//     return (
//     <div>
//         <ExpenseForm expense={props.expense} onSubmit={(expense) => {
//             console.log("submit", props.expense.id)
//             props.dispatch(editExpense(props.expense.id,expense))
//             props.history.push("/")
//         }}/>
//         <button onClick={(e) => {
//             props.dispatch(removeExpense({id: props.expense.id}))
//             props.history.push("/")
//         }}>Remove</button>
//     </div>
// )}

const mapToStore = (state, props) => {

    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapToStore)(Edit);