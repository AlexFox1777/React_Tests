import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
`

const IconBtn = styled.button`
    border: 1px solid #eaa9a9;
    background: white;
    color: #ce7575;
    cursor: pointer;
    &:hover{
        background: #ffe5e5;
    }
    &:focus{
        outline: none;
    }
`

type Props = {
    todo: string;
    index: number | string;
    deleteToDo: (index: number) => void;
}

export let defaultProps:Props = {
    todo: 'Do nothing',
    index: '-',
    deleteToDo: () => {}
}

const ToDo:FunctionComponent<Partial<Props>> = ({
    todo = defaultProps.todo,
    index = defaultProps.index,
    deleteToDo = defaultProps.deleteToDo
}) => {
    return (
        <Item className="todo-item">
            <span className="todo-phrase">
                {`${typeof index === 'number' ? `${index + 1}.` : index} ${todo}`}
            </span>
            
            <IconBtn className="delete" onClick={() => typeof index === 'number' && deleteToDo(index)}>X</IconBtn>
        </Item>
    )
}

export default ToDo