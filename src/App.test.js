import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { mount, shallow } from 'enzyme';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("regex test",()=>{
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  expect("uma@gmail.com").toMatch(emailRegex);
});

test('renders without crashing',()=>{
  shallow(<App/>);
});

test("renders parent and child components", () =>{
  mount(<App/>)
});

describe.only('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<button onClick={mockCallBack}>Ok!</button>));
    button.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
})