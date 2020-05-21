import React, { FunctionComponent, useState, FormEvent, MouseEvent } from 'react'
import ToDo from './ToDo'
import styled from 'styled-components'
import img  from './jest.png'

const Main = styled.div`
    max-width: 400px;
    margin: auto;
    border: 1px solid #6d6d6da6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;

    a{
        width: 25%;
        height: 25%;
    }
    img{
        width: 100%;
    }
`

const ToDos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const AddToDo = styled.form`
    display: flex;
    align-items: flex-end;
    width: 100%;
    border-top: 1px solid #6d6d6da6;
    padding-top: 15px;
    .todo{
        display: flex;
        flex-direction: column;
        width: 65%;
        padding-right: 5%;
        input{
            height: 35px;
            outline: none;
            border-radius: 3px;
            padding-left: 10px;
            border: 1px solid #96b2bb;
        }
    }

    button{
        width: 30%;
        height: 35px;
        outline: none;
        cursor: pointer;
        border-radius: 3px;
        border: none;
        background: #d6e9ef;
        text-transform: uppercase;
        &:hover{
            background: #b1ebfd;
        }
    }
`

const ToDoApp:FunctionComponent = () => {
    const [toDos, setToDos] = useState<Array<string>>([])
    const [toDo, setToDo] = useState('')

    function handleToDo(e: FormEvent<HTMLInputElement>){
        e.preventDefault()
        setToDo(e.currentTarget. value)
    }

    const deleteToDo = (index: number) => {
        let todos = toDos.slice()
        todos.splice(index, 1)
        setToDos(todos)
    }

    function addToDo(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        setToDos([...toDos, toDo])
    }

    return (
        <Main>
            <Logo>
                <h1>Todo with Jest</h1>
                <a href="https://jestjs.io/docs/en/getting-started"><img src={img} /></a>
            </Logo>
            <ToDos>
                {toDos.map((toDoItem, index)=> <ToDo index={index} todo={toDoItem} deleteToDo={deleteToDo} />)}
            </ToDos>
            <AddToDo>
                <label htmlFor="todo" className="todo">
                    Todo Name
                    <input id="todo" type="text" onChange={handleToDo}></input>
                </label>
                <button type="submit" onClick={addToDo}>Create</button>
            </AddToDo>
        </Main>
    )
}

export default ToDoApp

// an input field for typing up new ToDo 
// ‘Add’ button for adding ToDos 
// If the ‘Add’ button is pressed but the input field is empty, prevent a new ToDo item from being created
// If the ‘Add’ button is pressed but the input field is empty, show an alert to the user
// If the ‘Add’ button is pressed and the input field has content, add a new ToDo item
// When the ‘Delete’ button is pressed for a single ToDo item, remove that ToDo item from the App
// Each ToDo should render a ‘Delete’ button
// For the data being passed down from Display to ToDo as props, each ToDo should render the text that was passed down to it