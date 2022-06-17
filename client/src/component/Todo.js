import React from "react";

class Todo extends React.Component {
    render() {
        return (
            <div id={this.props.todo.todo_id} className={`todo ${this.props.todo.completed}`}>
                <h1>{this.props.todo.todo || this.props.todo}</h1>
            </div>
        )
    }
}

export default Todo