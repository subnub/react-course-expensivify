import {LoginPage} from "../../components/LoginPage";
import React from "react";
import {shallow} from "enzyme";

test("should tendere loginpage", () => {
    const wrapper = shallow(<LoginPage />);

    expect(wrapper).toMatchSnapshot();
})

test("should simulate login click", () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>)

    wrapper.find("button").simulate("click");

    expect(startLogin).toHaveBeenCalled();
})