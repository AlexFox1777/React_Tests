import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import ToDoApp from '../components/ToDoApp'


describe('ToDoApp component', () => {
    beforeAll(() =>{
        Enzyme.configure({ adapter: new Adapter() })
    })
    it('Renders correctly', () => {
        const component = shallow(<ToDoApp />)
        expect(component).toMatchSnapshot()
    })
    // If the ‘Add’ button is pressed but the input field is empty, show an alert to the user
    it('Show alert', () =>{
        const component = mount(<ToDoApp />)
        component.find('.disabled').simulate('click')
        expect(component.find('span.alert').text()).toBe('Type a todo')
    })
    // If the ‘Add’ button is pressed but the input field is empty, disable button 
    it('Disable button', () => {
        const component = mount(<ToDoApp />)
        component.find('.disabled').simulate('click')
        expect(component.find('div.todo-item')).toHaveLength(2)
    })
    // If the ‘Add’ button is pressed and the input field has content, add a new ToDo item
    it('Display new todo', () => {
        const component = mount(<ToDoApp toDoProps="Hello" />)
        component.find('button.active').simulate('click')
        expect(component.find('div.todo-item')).toHaveLength(3)
    })
})
