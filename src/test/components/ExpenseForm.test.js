import React from "react";
import {shallow} from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses"
import moment from "moment"

test("should render expense form correctly", () => {

    const wrapper = shallow(<ExpenseForm />)

    expect(wrapper).toMatchSnapshot()
})

test("should render expense form correctly with data", () => {

    const expense = expenses[0];

    const wrapper = shallow(<ExpenseForm expense={expense}/>)

    expect(wrapper).toMatchSnapshot();
})

test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    })

    expect(wrapper.state("errorState").length).toBeGreaterThan(0)

    expect(wrapper).toMatchSnapshot();
})

test("should set description on input change", () => {
    const wrapper = shallow(<ExpenseForm />)

    wrapper.find("input").at(0).simulate("change", {
        target: {
            value: "new input"
        }
    })

    expect(wrapper.state("desc")).toBe("new input")

    expect(wrapper).toMatchSnapshot();
})

test("should set note on text change", () => {

    const wrapper = shallow(<ExpenseForm />)

    const newNote = "new note"

    wrapper.find("textarea").simulate("change", {
        target: {
            value: newNote
        }
    })

    expect(wrapper.state("noteText")).toBe(newNote);

    expect(wrapper).toMatchSnapshot();
})

test("should set amount if amount is valid", () => {

    const wrapper = shallow(<ExpenseForm />)

    const amount = "23.50"

    wrapper.find("input").at(1).simulate("change", {
        target: {
            value: amount
        }
    })

    expect(wrapper.state("amount")).toBe(amount);

    expect(wrapper).toMatchSnapshot()
})

test("should not set the amount", () => {

    const wrapper = shallow(<ExpenseForm />)

    const amount = "23.503"

    wrapper.find("input").at(1).simulate("change", {
        target: {
            value: amount
        }
    })

    expect(wrapper.state("amount").length).toBe(0);

    expect(wrapper).toMatchSnapshot();
})

test("should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn();
    const expense = expenses[0]
    const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy}/>)

    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    })

    expect(wrapper.state("errorState")).toBe("")

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        desc: expense.desc,
        note: expense.note,
        amount: expense.amount,
        createdAt: expense.createdAt
    });
})

test("should set new data, on data change", () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now)
    expect(wrapper.state("createdAt")).toEqual(now)
})

test("should set on focus change", () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({focused: true})
    expect(wrapper.state("calanderFocused")).toBe(true)
})