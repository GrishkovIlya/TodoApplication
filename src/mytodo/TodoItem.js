import React from 'react'

const style = {
    li:{
        display: 'flex',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '15px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px'
    },
    input: {
        marginRight: '5px'
    }
}

const TodoItem = ({todo, index, onChange, removeTodo}) => {
    const array = []

    if (todo.isComplited) {
        array.push('done')
    }

    return (
        <li style={style.li}>
            <span>
                <input
                type = 'checkbox'
                style = {style.input}
                check = {todo.isComplited}
                onChange = {() => onChange(todo.id)}>
                </input>
                <strong>{index+1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className = 'button' onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
} 

export default TodoItem