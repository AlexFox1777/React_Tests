import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ToDo from '../components/ToDo'
import { defaultProps } from '../components/ToDo'

describe('ToDo component', () => {
    beforeEach(() =>{
        Enzyme.configure({ adapter: new Adapter() })
    })
    // check the render of default prop values
    it('Default prop values', () =>{
        // expect a value to be equal from defaultProps
        const component = shallow(<ToDo />)
        expect(component.find('span').text()).toBe(`- ${defaultProps.todo}`)
    })

    // check the custom value of the prop
    it('Custom prop values', () =>{
        let custom_values = {
            index: 0,
            todo: 'Do something',
            deleteToDo: () => {}
        }
        // expect custom value to be received after the render of the component
        const component = shallow(<ToDo todo={custom_values.todo} index={custom_values.index} deleteToDo={custom_values.deleteToDo} />)
        
        expect(component.find('span').text()).toBe(`${custom_values.index + 1}. ${custom_values.todo}`)
    })
    
    it('Renders correctly', () =>{
        const component = shallow(<ToDo todo="Test todo" index={1} deleteToDo={() => console.log('test component')} />)
        expect(component).toMatchSnapshot()
    })
})