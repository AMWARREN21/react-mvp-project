import React from 'react'
import Todo from './Todo'

class Todos extends React.Component {
    render() {
        return (
            <div className='container'>
                {this.props.todos.map((todo) => (
                    <Todo key={todo.todo_id} todo={todo} />
                ))}
            </div>
        )
    }
}

export default Todos

