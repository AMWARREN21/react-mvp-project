import React from 'react'
import Todo from './Todo'

class Todos extends React.Component {
    render() {
        return (
            <div className='container'>
                {this.props.todos.map((todo, index) => (
                    <Todo key={index} todo={todo} />
                ))}
            </div>
        )
    }
}

export default Todos

