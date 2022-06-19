import React from 'react'
import Todo from './Todo'

class IncompleteTodos extends React.Component {
    render() {
        return (
            <div className='container'>
                {this.props.todos.filter(todo => todo.completed === false)
                    .map((todo) => (
                        <Todo
                            key={todo.todo_id}
                            todo={todo}
                            DeleteTodo={this.props.DeleteTodo}
                            HandleEdit={this.props.handleEdit} />
                    ))}
            </div>
        )
    }
}

export default IncompleteTodos