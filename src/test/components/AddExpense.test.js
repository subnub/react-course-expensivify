import React from 'react';
import {shallow} from "enzyme";
import {AddExpensivePage} from "../../components/AddExpensivePage";

test("should render adExpense page correctly", () => {
    const onSubmit = jest.fn();
    const history = {push: jest.fn()};
    const wrapper = shallow(<AddExpensivePage onSubmit={onSubmit} 
        history={history}/>)
    expect(wrapper).toMatchSnapshot();
})