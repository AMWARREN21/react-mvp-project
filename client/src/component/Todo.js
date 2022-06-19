import React from "react";
import Button from "./Button";

class Todo extends React.Component {
    render() {
        let completed = this.props.todo.completed

        if (!this.props.todo.completed) {
            completed = false
        }

        return (
            <div id={this.props.todo.todo_id} className={`todo ${completed}`}>
                <h1>{this.props.todo.todo}</h1>
                <div className="buttons">
                    <Button class={"Erase"} handleTodo={this.props.DeleteTodo} />
                    <Button class={"Edit"} />
                </div>
            </div>
        )
    }
}

export default Todo