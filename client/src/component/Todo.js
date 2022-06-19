import React from "react";
import Button from "./Button";

class Todo extends React.Component {
    render() {

        return (
            <div
                id={this.props.todo.todo_id}
                className={`todo ${this.props.todo.completed}`}>
                <h1>{this.props.todo.todo}</h1>
                <div className="buttons">
                    <Button
                        class={"Erase"}
                        text={"Erase"}
                        handleTodo={this.props.DeleteTodo} />
                    <Button
                        class={"toggle"}
                        text={"Complete?"}
                        handleTodo={this.props.HandleEdit} />
                </div>
            </div>
        )
    }
}

export default Todo