import React from "react";

class DeleteButton extends React.Component {
    render() {
        const DeleteTodo = (e) => {
            this.props.DeleteTodo(e)
        }
        return (
            <button onClick={DeleteTodo}>Delete</button>
        )
    }
}

export default DeleteButton