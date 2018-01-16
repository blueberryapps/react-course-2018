/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme'
import AddItem from './index.jsx';
import renderer from 'react-test-renderer';


describe('Add Item', () => {

  it('renders correctly', () => {
    const tree = renderer
      .create(<AddItem add={() => {}} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should change value', () => {
    const wrapper = mount(<AddItem add={()=>{}} />);
    const component = wrapper.find('input');

    component.simulate("change", { target: { value: 'foo' }});
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('input').getElement().props.value).toEqual('foo')
  });

  it('should add item after click enter', () => {
    const addMock = jest.fn();
    const wrapper = mount(<AddItem add={addMock} />);
    const component = wrapper.find('input');

    component.simulate("change", { target: { value: 'bar' }});
    expect(wrapper.find('input').getElement().props.value).toEqual('bar');
    component.simulate('keyDown', { key: 'w', keyCode: 119, which: 119 });
    expect(addMock.mock.calls.length).toEqual(0);

    component.simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13 });
    expect(wrapper.find('input').getElement().props.value).toEqual('');
    expect(addMock.mock.calls[0][0]).toEqual('bar')
  });
});
