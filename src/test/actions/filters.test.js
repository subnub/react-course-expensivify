import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from "../../actions/filters";
import moment from "moment"

test("Should generate set start date action object", () => {
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: "SET_START_DATE", 
        date: moment(0)
    })
})

test("Should generate set end date action object", () => {
    const action = setEndDate(moment(0))

    expect(action).toEqual({
        type: "SET_END_DATE", 
        date: moment(0)
    })
})

test("should set text filter with data", () => {
    const action = setTextFilter("example");

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "example"
    })
})

test("should set text filter with no data", () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
})

test("should set sort by date action object", () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})

test("should set sort by amount action object", () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})