import React from "react";

export default class Button extends React.Component {
    render() {

        const handleTodo = (e) => {
            this.props.handleTodo(e)

        }
        return (
            <button className={this.props.class} onClick={handleTodo}>{this.props.text}</button>
        )
    }
}