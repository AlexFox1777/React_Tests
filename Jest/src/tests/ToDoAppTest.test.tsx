import React from 'react'
import renderer from 'react-test-renderer'
import ToDoApp from '../components/ToDoApp'





test('ToDoApp renders correctly', () => { 
    let component = renderer.create(<ToDoApp />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
 })
