import {shallow} from "enzyme";
import React from "react"
import expenses from "../fixtures/expenses"
import {ExpensesSummary} from "../../components/ExpenseSummary";

test("Should correctly rendere expense summary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]}/>)

    expect(wrapper).toMatchSnapshot();
})

test("Should correctly rendere expense summary with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>)

    expect(wrapper).toMatchSnapshot();
})