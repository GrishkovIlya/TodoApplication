import React from 'react'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        paddidng:0
    }
}

const TodoList =({todos, toggleTodo, removeTodo}) => {
return (
    <ul style={styles.ul}>
    {todos.map((todo, index) => {
return <TodoItem
todo={todo}
index={index}
key={todo.id}
removeTodo={removeTodo}
onChange={toggleTodo}
/>
    })}
    </ul>
    )
}

export default TodoList

