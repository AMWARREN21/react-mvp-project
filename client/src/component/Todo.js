import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import InputTodo from "./InputTodo";

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
                <EditButton handleEdit={this.props.handleEdit} todo={this.props.todo.todo} />
            </div>
        )
    }
}

export default Todo