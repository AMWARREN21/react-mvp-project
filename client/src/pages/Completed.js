import React from "react";
import Clock from "../component/Clock";
import InputTodo from "../component/InputTodo";
import CompletedTodos from "../component/CompletedTodos";

export default class CompletedPage extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="content-container">
                    <InputTodo addTodo={this.props.state.addTodo} />
                    <CompletedTodos
                        todos={this.props.state.todos}
                        DeleteTodo={this.props.state.DeleteTodo}
                        handleEdit={this.props.state.handleEdit} />
                </div>
                <div className="clock-container">
                    <Clock clock={this.props.state.clock} />
                </div>
            </div>
        )
    }
}