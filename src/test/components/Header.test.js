import React from "react"
import {shallow} from "enzyme"
import {Header} from "../../components/Header"

test("Should render header correctly", () => {
    const wrapper = shallow(<Header />)
    
    expect(wrapper).toMatchSnapshot();
})

test("should simulate logout click", () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);

    wrapper.find("button").simulate("click");

    expect(startLogout).toHaveBeenCalled();
})