import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Item = styled.div`
    padding-bottom: 15px;
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
            {index + 1}
            {`. ${todo}`}
            <span onClick={() => deleteToDo(index)}>Delete</span>
        </Item>
    )
}

export default ToDo