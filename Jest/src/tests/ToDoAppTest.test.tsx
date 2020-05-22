import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ToDoApp from '../components/ToDoApp'


describe('ToDoApp component', () => {
    beforeAll(() =>{
        Enzyme.configure({ adapter: new Adapter() })
    })
    it('Renders correctly', () => {
        const component = shallow(<ToDoApp />)
        expect(component).toMatchSnapshot()
    })
    
})
