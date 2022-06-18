import React from "react";
import DeleteButton from "./DeleteButton";

class Todo extends React.Component {
    render() {
        let completed = this.props.todo.completed

        if (!this.props.todo.completed) {
            completed = false
        }

        return (
            <div id={this.props.todo.todo_id} className={`todo ${completed}`}>
                <h1>{this.props.todo.todo}</h1>
                <DeleteButton DeleteTodo={this.props.DeleteTodo} />
            </div>
        )
    }
}

export default Todo