import MyComponent from "./MyComponent";
import {shallow} from "enzyme";

it.skip("button click testing",()=>{
    const component=shallow(<MyComponent header={"Button Click"} value={"clicked a Button"}/>);
    // expect(component.find('p').at(0).text()).toBe('Button Click');
    expect(component.find('p#header').text()).toBe('Button Click');
    component.find('button').simulate('click');
    expect(component.find('p').at(1).text()).toBe('clicked a Button');
});