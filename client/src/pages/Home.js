import React from "react";
import Clock from "../component/Clock";
import InputTodo from "../component/InputTodo";
import Todos from "../component/Todos";
import EditTodo from "../component/EditTodo";

export default class Home extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="content-container">
                    <InputTodo addTodo={this.props.addTodo} />
                    <Todos todos={this.props.todos}
                        DeleteTodo={this.props.DeleteTodo} />
                </div>
                <div className="clock-container">
                    <Clock clock={this.props.clock} />
                </div>
            </div>
        )
    }
}