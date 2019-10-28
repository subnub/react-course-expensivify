import React from "react";
import {connect} from "react-redux";
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters"
import {DateRangePicker} from "react-dates"

class ExpenesListFilters extends React.Component {

    state = {
        calanderFocus: null
    };

    onDatesChange = ({startDate, endDate}) => {

        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (calanderFocus) => {

        this.setState(() => ({calanderFocus}))
    }

    render() {
        return (
            <div>
        <input type="text" value={this.props.filter.text} onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select value={this.props.filter.sortBy} onChange={(e) => {
            
            e.target.value === "date" ? this.props.dispatch(sortByDate()) 
            : this.props.dispatch(sortByAmount());

        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
            startDate={this.props.filter.startDate}
            endDate={this.props.filter.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calanderFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates={true}
        />

        </div> 
        )
    }
}


const mapStateToProps = (state) => {

    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps)(ExpenesListFilters);