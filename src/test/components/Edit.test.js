import {Edit} from "../../components/Edit";
import {shallow} from "enzyme";
import React from "react";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, onSubmit,wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = jest.fn();
    onSubmit = jest.fn();

    wrapper = shallow(<Edit 
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        onSubmit={onSubmit}
        expense={expenses[1]}/>)
})

test("Should render edit expense with an item", () => {

    expect(wrapper).toMatchSnapshot();        

})

// test("Should call onSubmit with proper data", () => {
//     // const onSubmitSpy = jest.fn();
//     const expense = expenses[1]
//     // const wrapper = shallow(<Edit expense={expense}/>)

//     wrapper.find("ExpenseForm").prop("onSubmit")(expense)

//     expect(onSubmitSpy).toHaveBeenLastCalledWith({
//         desc: expense.desc,
//         note: expense.note,
//         amount: expense.amount,
//         createdAt: expense.createdAt
//     })
// })