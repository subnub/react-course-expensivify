import React from "react"
import moment from "moment";
import {SingleDatePicker} from "react-dates";

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            desc: props.expense ? props.expense.desc : "",
            noteText: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calanderFocused: false,
            errorState: ""
        }
    }

    

    onDescChange = (e) => {
        const desc = e.target.value;
        this.setState(() => ({desc}))
    }

    onNoteChange = (e) => {
        const noteText = e.target.value;
        this.setState(() => ({noteText}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {

        if (createdAt) {
            this.setState(() => ({createdAt}))
        }
    }

    onFocusChange = ({focused}) => {

        this.setState(() => ({calanderFocused: focused}))
    }

    onSubmit = (e) => {

        e.preventDefault();

        if (!this.state.desc || !this.state.amount) {
            // Set Error state 
            this.setState(() => ({errorState: "Please Provide Description and amount"}))
        } else {
            // Clear Error
            this.setState(() => ({errorState: ""}))
            this.props.onSubmit({
                desc: this.state.desc,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.noteText
            })

        }
    }

    render() {
        return (
            <div>
                {this.state.errorState !== "" && <p>{this.state.errorState}</p>}
                <form onSubmit={this.onSubmit}>
                <input type="text" 
                    placeholder="Description" 
                    autoFocus value={this.state.desc}
                    onChange={this.onDescChange}
                />
                <input 
                    type="text" 
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calanderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                />
                <textarea 
                    value={this.state.noteText} 
                    placeholder="Add a note to your expense (optional)"
                    onChange={this.onNoteChange}>
                </textarea>
                <button>Add Expense</button>
                </form>
            </div>
        )
    }
}