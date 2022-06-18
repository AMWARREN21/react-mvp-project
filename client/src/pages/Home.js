import React from "react";
import InputTodo from "../component/InputTodo";
import Todos from "../component/Todos";

export default class Home extends React.Component {
    render() {
        return (
            <div className="content-container">
                <InputTodo addTodo={this.props.addTodo} />
                <Todos todos={this.props.todos} DeleteTodo={this.props.DeleteTodo} handleEdit={this.props.handleEdit} />
            </div>
        )
    }
}