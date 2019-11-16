import {shallow} from "enzyme";
import React from "react";
import LoadingPage from "../../components/LoadingPage"

test("Should render the loading page", () => {
    const wrapper = shallow(<LoadingPage />);

    expect(wrapper).toMatchSnapshot();
})