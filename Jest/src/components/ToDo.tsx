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
    index: number;
    deleteToDo: (index: number) => void;
}

const ToDo:FunctionComponent<Props> = ({
    todo,
    index,
    deleteToDo
}) => {
    return (
        <Item>
            <span>
                {`${index + 1}. ${todo}`}
            </span>
            
            <IconBtn onClick={() => deleteToDo(index)}>X</IconBtn>
        </Item>
    )
}

export default ToDo