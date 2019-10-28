import filterReducer from "../../reducers/filter"
import moment from "moment"

test("should setup deefault filter values", () => {
    const state = filterReducer(undefined, {type:"@@INIT"})

    expect(state).toEqual({
        text:"",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})

test("should set sortBy to amount", () => {

    const state = filterReducer(undefined, {"type":"SORT_BY_AMOUNT"})

    expect(state.sortBy).toBe("amount")
})

test("should set sortBy to date", () => {

    const currentState = {
        text:"",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }

    const action = {
        type: "SORT_BY_DATE"
    }

    const state = filterReducer(currentState, action)

    expect(state.sortBy).toBe("date")
})

test("should set text filter", () => {

    const state = filterReducer(undefined, {type:"SET_TEXT_FILTER", text: "example"})

    expect(state.text).toBe("example")
})

test("should set start date filter", () => {

    const state = filterReducer(undefined, {type:"SET_START_DATE", date: 100})

    expect(state.startDate).toBe(100);
    
})

test("should set end date filter", () => {

    const state = filterReducer(undefined, {type:"SET_END_DATE", date: 300})

    expect(state.endDate).toBe(300);
    
})